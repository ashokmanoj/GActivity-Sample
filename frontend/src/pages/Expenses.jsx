// src/pages/Expenses.jsx
import React, { useState, useEffect } from "react";
import ExpensesFilter from "../components/filters/ExpensesFilter";
import ExpensesTable from "../components/common/ExpensesTable";
import { fetchExpenses, exportExpenses } from "../api/expensesApi";
import { FaFileExcel } from "react-icons/fa";
// import { saveAs } from "file-saver"; // optional; we will fallback if not installed

export default function Expenses() {
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(12);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({});

  // popup state for bill details
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const loadData = async (f = filters, p = page) => {
    setLoading(true);
    try {
      const payload = await fetchExpenses({ ...f, page: p, limit });
      setRows(payload.rows || []);
      setTotal(payload.total || 0);
      setTotalPages(payload.totalPages || 1);
      setPage(payload.page || 1);
    } catch (err) {
      console.error("Failed to fetch expenses", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, []);

  const handleSearch = (newFilters) => {
    setFilters(newFilters);
    setPage(1);
    loadData(newFilters, 1);
  };

  const handleExport = async () => {
    try {
      const blob = await exportExpenses(filters);
      // try using file-saver if available
      try {
        // if file-saver installed
        // saveAs(blob, `expenses_${new Date().toISOString().slice(0,10)}.xlsx`);
        // fallback if not installed:
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `expenses_${new Date().toISOString().slice(0,10)}.xlsx`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      } catch (e) {
        // fallback
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `expenses_${new Date().toISOString().slice(0,10)}.xlsx`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      }
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

  const goPrev = () => {
    if (page > 1) {
      const np = page - 1;
      setPage(np);
      loadData(filters, np);
    }
  };
  const goNext = () => {
    if (page < totalPages) {
      const np = page + 1;
      setPage(np);
      loadData(filters, np);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between gap-4">
        <ExpensesFilter onSearch={handleSearch} />
        <div className="flex items-center gap-2">
          <button
            onClick={handleExport}
            className="bg-green-600 text-white px-2 py-2 rounded-md flex items-center gap-2 shadow hover:bg-green-700"
          ><FaFileExcel size={15} />
            Export
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="text-lg font-semibold">TotalExpenses : {total}</div>
        {/* <div className="text-sm text-gray-600">Total: </div> */}
      </div>

      {loading ? (
        <div className="bg-white p-6 rounded shadow text-center">Loading...</div>
      ) : (
        <ExpensesTable data={rows} onBillDateClick={handleBillClick} />
      )}

      {/* Pagination */}
      <div className="flex items-center justify-between mt-3">
        {/* <div className="text-sm text-gray-600">Total: {total}</div> */}
        <div className="flex items-center gap-2">
          <button onClick={goPrev} disabled={page <= 1} className="px-3 py-1 bg-gray-100 rounded disabled:opacity-50">Prev</button>
          <div className="text-sm">Page {page} / {totalPages}</div>
          <button onClick={goNext} disabled={page >= totalPages} className="px-3 py-1 bg-gray-100 rounded disabled:opacity-50">Next</button>
        </div>
      </div>

      {/* Modal for Bill Detail */}
      {modalOpen && selectedRow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Bill Details</h3>
              <button onClick={handleCloseModal} className="text-gray-600">Close</button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div><strong>Billdate:</strong> {new Date(selectedRow.billdate).toLocaleDateString()}</div>
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
              <button onClick={handleCloseModal} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
