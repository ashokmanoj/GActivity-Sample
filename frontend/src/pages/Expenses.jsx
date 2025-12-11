import React, { useState, useEffect } from "react";
import ExpensesFilter from "../components/filters/ExpensesFilter";
import FilterBar from "../components/common/FilterBar";
import ExpensesTable from "../components/common/ExpensesTable";
import { fetchExpenses, exportExpenses } from "../api/expensesApi";
import { FaFileExcel } from "react-icons/fa";
import Pagination from "../components/common/Pagination";

export default function Expenses() {
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1);
  const limit = 12;

  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({});

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const loadData = async (f = filters, p = page) => {
    setLoading(true);
    try {
      const payload = await fetchExpenses({ ...f, page: p, limit });

      setRows(payload.rows || []);
      setTotal(payload.total || 0);
      setTotalPages(payload.totalPages || 1);
      setPage(payload.page || p);
    } catch (err) {
      console.error("Failed to fetch expenses", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSearch = (newFilters) => {
    setFilters(newFilters);
    setPage(1);
    loadData(newFilters, 1);
  };

  const handleExport = async () => {
    try {
      const blob = await exportExpenses(filters);
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `expenses_${new Date().toISOString().slice(0, 10)}.xlsx`;
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Export failed", err);
      alert("Export failed");
    }
  };

  const handleBillClick = (row) => {
    setSelectedRow(row);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedRow(null);
  };

  const setPageMove = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
    loadData(filters, newPage);
  };

  const rm = ["BIKSHA"];
  const alldesignation = [
    "All Designation",
    "Technical Executive",
    "Installation Interns",
    "Computer Operator",
  ];
  const allExecutive = [
    "All Executive",
    "Anupam Dutta : 9613705280",
    "Rohit Sharma : 9876543210",
  ];
  const expence = ["-- All --", "Expenses", "Advance"];
  const status = ["-- All Status --", "Pending", "Approved", "Rejected"];

  return (
    <div className="p-3 sm:p-4 space-y-4">

      {/* FILTER BAR + EXPORT BUTTON */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

        <div className="w-full">
          <FilterBar
            onSearch={handleSearch}
            singleDate={false}
            enableDateRange={true}
            filters={[
              { lable: "RM", options: rm, key: "rm" },
              { lable: "Designation", options: alldesignation, key: "designation" },
              { lable: "Executive", options: allExecutive, key: "executive" },
              { lable: "Expence", options: expence, key: "expence" },
              { lable: "Status", options: status, key: "status" },
            ]}
            enableExport={false}
          />
        </div>

        <button
          onClick={handleExport}
          className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 w-full sm:w-auto justify-center"
        >
          <FaFileExcel size={16} /> Export
        </button>
      </div>

      {/* TOTAL EXPENSES */}
      <div className="text-lg font-semibold text-gray-800">
        Total Expenses: {total}
      </div>

      {/* TABLE */}
      {loading ? (
        <div className="bg-white p-6 rounded shadow text-center">Loading...</div>
      ) : (
        <div className="overflow-x-auto rounded border border-gray-200">
          <ExpensesTable  onBillDateClick={handleBillClick} />
        </div>
      )}

      {/* PAGINATION */}
      <div className="flex justify-center">
        <Pagination
          currentPage={page}
          totalItems={total}
          pageSize={limit}
          onPageChange={setPageMove}
        />
      </div>

      {/* BILL DETAILS POPUP */}
      {modalOpen && selectedRow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3">
          <div className="bg-white rounded-lg p-6 w-full max-w-md sm:max-w-xl shadow-xl">

            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Bill Details</h3>
              <button onClick={handleCloseModal} className="text-gray-600">Close</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div><strong>Bill Date:</strong> {new Date(selectedRow.billdate).toLocaleDateString()}</div>
              <div><strong>Executive:</strong> {selectedRow.executive_name}</div>
              <div><strong>Mobile:</strong> {selectedRow.mobile}</div>
              <div><strong>No of Bill:</strong> {selectedRow.no_of_bill}</div>
              <div><strong>Req Amount:</strong> {selectedRow.req_amount}</div>
              <div><strong>RM Amount:</strong> {selectedRow.rm_amount}</div>
              <div><strong>RMH Amount:</strong> {selectedRow.rmh_amount}</div>
              <div><strong>Account:</strong> {selectedRow.account}</div>
              <div><strong>Status:</strong> {selectedRow.status}</div>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
