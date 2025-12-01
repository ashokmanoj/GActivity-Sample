// src/components/asset/TableRow.jsx

import React from "react";

export default function TableRow({ row, onTransactionClick }) {
  return (
    <tr className="even:bg-gray-50 hover:bg-gray-100 text-xs">
      <td className="border px-2 py-2">{row.type}</td>
      <td className="border px-2 py-2">
        {new Date(row.tranDate).toLocaleDateString("en-GB")}
      </td>

      {/* CLICKABLE TRANSACTION NO */}
      <td
        className="border px-2 py-2 text-blue-600 underline cursor-pointer"
        onClick={onTransactionClick}
      >
        {row.transactionNo}
      </td>

      <td className="border px-2 py-2">{row.assetDesc}</td>
      <td className="border px-2 py-2 text-center">{row.qty}</td>
      <td className="border px-2 py-2">{row.project}</td>
      <td className="border px-2 py-2">{row.executive}</td>
      <td className="border px-2 py-2">{row.location}</td>
      <td className="border px-2 py-2">{row.status}</td>
      <td className="border px-2 py-2">{row.institute}</td>
      <td className="border px-2 py-2">{row.serialNo}</td>
      <td className="border px-2 py-2">{row.transactionNote}</td>
      <td className="border px-2 py-2">{row.ticketId}</td>
      <td className="border px-2 py-2">{row.reqTranNo}</td>
      <td className="border px-2 py-2">{row.isReturn}</td>
      <td className="border px-2 py-2">{row.issue}</td>
      <td className="border px-2 py-2">{row.chkn}</td>
    </tr>
  );
}
