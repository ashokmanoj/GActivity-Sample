// backend/src/controllers/expensesReport.js
import pool from "../config/db.js";
import ExcelJS from "exceljs";

const buildFilterQuery = (queryParams) => {
  const { rm, designation, executive, allFilter, status, startDate, endDate } =
    queryParams;
  let sql = "WHERE 1=1";
  const params = [];

  if (rm) {
    params.push(`%${rm}%`);
    sql += ` AND executive_name ILIKE $${params.length}`; // adjust if you have separate rm field
  }
  if (designation) {
    params.push(`%${designation}%`);
    sql += ` AND designation ILIKE $${params.length}`;
  }
  if (executive) {
    params.push(`%${executive}%`);
    sql += ` AND executive_name ILIKE $${params.length}`;
  }
  if (allFilter) {
    params.push(allFilter);
    sql += ` AND account = $${params.length}`; // adapt if allFilter maps to different column
  }
  if (status) {
    params.push(status);
    sql += ` AND status = $${params.length}`;
  }
  if (startDate && endDate) {
    params.push(startDate);
    params.push(endDate);
    sql += ` AND billdate BETWEEN $${params.length - 1} AND $${params.length}`;
  }

  return { sql, params };
};

export const getExpensesReport = async (req, res) => {
  try {
    // pagination
    const page = parseInt(req.query.page || "1", 10);
    const limit = parseInt(req.query.limit || "25", 10);
    const offset = (page - 1) * limit;

    const { sql, params } = buildFilterQuery(req.query);

    // total count
    const countQuery = `SELECT count(*) FROM expenses_report ${sql}`;
    const countRes = await pool.query(countQuery, params);
    const total = parseInt(countRes.rows[0].count, 10);

    // main data
    const dataQuery = `SELECT * FROM expenses_report ${sql} ORDER BY id ASC LIMIT $${
      params.length + 1
    } OFFSET $${params.length + 2}`;
    const dataParams = params.concat([limit, offset]);
    const dataRes = await pool.query(dataQuery, dataParams);

    res.json({
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      rows: dataRes.rows,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export const exportExpensesReport = async (req, res) => {
  try {
    const { sql, params } = buildFilterQuery(req.query);

    // fetch all matching rows (no pagination)
    const dataQuery = `SELECT * FROM expenses_report ${sql} ORDER BY id ASC`;
    const dataRes = await pool.query(dataQuery, params);
    const rows = dataRes.rows;

    // Create workbook & sheet
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Expenses");

    // header
    sheet.columns = [
      { header: "SL No", key: "sl", width: 8 },
      { header: "Billdate", key: "billdate", width: 15 },
      { header: "Executive Name", key: "executive_name", width: 30 },
      { header: "Mobile", key: "mobile", width: 15 },
      { header: "NoOfBill", key: "no_of_bill", width: 10 },
      { header: "RM.App Count", key: "rm_app_count", width: 12 },
      { header: "Req.Amt", key: "req_amount", width: 12 },
      { header: "RM Amount", key: "rm_amount", width: 12 },
      { header: "RMH Amt", key: "rmh_amount", width: 12 },
      { header: "Account", key: "account", width: 10 },
      { header: "Status", key: "status", width: 10 },
    ];

    rows.forEach((r, idx) => {
      sheet.addRow({
        sl: idx + 1,
        billdate: r.billdate ? r.billdate.toISOString().split("T")[0] : "",
        executive_name: r.executive_name,
        mobile: r.mobile,
        no_of_bill: r.no_of_bill,
        rm_app_count: r.rm_app_count,
        req_amount: r.req_amount,
        rm_amount: r.rm_amount,
        rmh_amount: r.rmh_amount,
        account: r.account,
        status: r.status,
      });
    });

    // styling (optional) - bold header
    sheet.getRow(1).font = { bold: true };

    // Write to buffer and send
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="expenses_report.xlsx"`
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
