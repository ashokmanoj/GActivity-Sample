// src/components/asset/AssetTable.jsx

import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import ExcelExportButton from "./ExcelExportButton";
import TransactionPopup from "./TransactionPopup";

export default function AssetTable({ rows }) {
  const [page, setPage] = useState(1);
  const [popupItem, setPopupItem] = useState(null);

  const pageSize = 10;
  const totalPages = Math.ceil(rows.length / pageSize) || 1;

  useEffect(() => {
    setPage(1);
  }, [rows]);

  const start = (page - 1) * pageSize;
  const currentRows = rows.slice(start, start + pageSize);

  return (
    <div className="mt-4 bg-white rounded-xl shadow border p-4">
      {/* Top row: total + excel */}
      <div className="flex justify-between items-center mb-3">
        <p className="text-sm text-gray-600">
          Total: <span className="font-semibold">{rows.length}</span> Rows
        </p>
        <ExcelExportButton rows={rows} />
      </div>

      {rows.length === 0 ? (
        <p className="text-center text-gray-500 py-6 text-sm">
          No asset transaction data found for selected filters.
        </p>
      ) : (
        <>
          <div className="overflow-auto max-h-[60vh]">
            <table className="min-w-full border-collapse">
              <thead className="bg-gray-100 text-xs">
                <tr>
                  <th className="border px-2 py-2 text-left">Type</th>
                  <th className="border px-2 py-2 text-left">Tran.Date</th>
                  <th className="border px-2 py-2 text-left">Transaction No.</th>
                  <th className="border px-2 py-2 text-left">
                    Asset | Model | Desc.
                  </th>
                  <th className="border px-2 py-2 text-center">Qty</th>
                  <th className="border px-2 py-2">Project</th>
                  <th className="border px-2 py-2">Executive</th>
                  <th className="border px-2 py-2">Location</th>
                  <th className="border px-2 py-2">Status</th>
                  <th className="border px-2 py-2">Institute</th>
                  <th className="border px-2 py-2">SerialNo</th>
                  <th className="border px-2 py-2">TransactionNote</th>
                  <th className="border px-2 py-2">TicketID</th>
                  <th className="border px-2 py-2">Req.TrnNo</th>
                  <th className="border px-2 py-2">IsReturn</th>
                  <th className="border px-2 py-2">Issue</th>
                  <th className="border px-2 py-2">Chkn</th>
                </tr>
              </thead>

              <tbody>
                {currentRows.map((row) => (
                  <TableRow
                    key={row.id}
                    row={row}
                    onTransactionClick={() => setPopupItem(row)}
                  />
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-700">
            <button
              className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Previous
            </button>

            <span>
              Page <b>{page}</b> of <b>{totalPages}</b>
            </span>

            <button
              className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Popup */}
      {popupItem && (
        <TransactionPopup item={popupItem} onClose={() => setPopupItem(null)} />
      )}
    </div>
  );
}
