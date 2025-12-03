import React from "react";

export default function ExpensesTable({ data = [], onBillDateClick }) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-sm border">
      <table className="w-full text-sm">
        {/* HEADER */}
        <thead className="bg-[#f1f5f9] text-gray-700">
          <tr>
            <th className="px-4 py-3 text-left">SL No.</th>
            <th className="px-4 py-3 text-left">Billdate</th>
            <th className="px-4 py-3 text-left">Executive Name</th>
            <th className="px-4 py-3 text-center">NoOfBill</th>
            <th className="px-4 py-3 text-center">RM.App Count</th>
            <th className="px-4 py-3 text-center">Req.Amt</th>
            <th className="px-4 py-3 text-center">RM Amount</th>
            <th className="px-4 py-3 text-center">RMH Amt</th>
            <th className="px-4 py-3 text-center">Account</th>
            <th className="px-4 py-3 text-center">Status</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan="10"
                className="py-6 text-center text-gray-400"
              >
                No records found
              </td>
            </tr>
          ) : (
            data.map((row, idx) => (
              <tr
                key={row.id}
                className={`border-t ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                {/* SL NO */}
                <td className="px-4 py-3">{row.id}</td>

                {/* Bill Date clickable */}
                <td
                  onClick={() => onBillDateClick && onBillDateClick(row)}
                  className="px-4 py-3 text-blue-600 cursor-pointer hover:underline"
                >
                  {new Date(row.billdate).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </td>

                {/* Executive Name */}
                <td className="px-4 py-3">
                  <span className="font-medium text-gray-800">{row.executive_name}</span>
                  <span className="text-gray-500"> : {row.mobile}</span>
                </td>

                {/* Number columns */}
                <td className="px-4 py-3 text-center">{row.no_of_bill}</td>
                <td className="px-4 py-3 text-center">{row.rm_app_count}</td>
                <td className="px-4 py-3 text-center">{row.req_amount}</td>
                <td className="px-4 py-3 text-center">{row.rm_amount}</td>
                <td className="px-4 py-3 text-center">{row.rmh_amount}</td>
                <td className="px-4 py-3 text-center">{row.account}</td>

                {/* Status */}
                <td className="px-4 py-3 text-center">
                  <span className="text-blue-600 cursor-pointer hover:underline">
                    {row.status}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
