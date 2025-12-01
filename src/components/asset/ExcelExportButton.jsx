// src/components/asset/ExcelExportButton.jsx

import React from "react";

export default function ExcelExportButton({ rows }) {
  const handleExport = () => {
    if (!rows.length) return;

    const headers = [
      "Type",
      "Tran.Date",
      "Transaction No.",
      "Asset Desc",
      "Qty",
      "Project",
      "Executive",
      "Location",
      "Status",
      "Institute",
      "SerialNo",
      "TransactionNote",
      "TicketID",
      "Req.TrnNo",
      "IsReturn",
      "Issue",
      "Chkn",
    ];

    const csvRows = [
      headers.join(","),
      ...rows.map((r) =>
        [
          r.type,
          r.tranDate,
          r.transactionNo,
          `"${r.assetDesc}"`,
          r.qty,
          r.project,
          `"${r.executive}"`,
          `"${r.location}"`,
          r.status,
          `"${r.institute}"`,
          r.serialNo,
          `"${r.transactionNote}"`,
          r.ticketId,
          r.reqTranNo,
          r.isReturn,
          `"${r.issue}"`,
          r.chkn,
        ].join(",")
      ),
    ];

    const blob = new Blob([csvRows.join("\n")], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "asset-transactions.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleExport}
      className="px-3 py-1 rounded-lg bg-green-600 text-white text-xs hover:bg-green-700"
    >
      Export Excel
    </button>
  );
}
