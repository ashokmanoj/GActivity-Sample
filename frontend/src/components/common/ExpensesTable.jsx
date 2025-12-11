import React from "react";
import { dummyExpenses } from "../../data/dummyExpenses";

export default function ExpensesTable({ onBillDateClick }) {
  const data = dummyExpenses;
  return (
    <div className="bg-white rounded-lg shadow-sm border">

      {/* ---------------- DESKTOP TABLE VIEW ---------------- */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left">SL No.</th>
              <th className="px-4 py-3 text-left">Billdate</th>
              <th className="px-4 py-3 text-left">Executive Name</th>
              <th className="px-4 py-3 text-center">NoOfBill</th>
              <th className="px-4 py-3 text-center">Req.Amt</th>
              <th className="px-4 py-3 text-center">RM Amt</th>
              <th className="px-4 py-3 text-center">RMH Amt</th>
              <th className="px-4 py-3 text-center">Total Amt</th>
              <th className="px-4 py-3 text-center">Status</th>
              <th className="px-4 py-3 text-center">Images</th>
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="9" className="py-6 text-center text-gray-400">
                  No records found
                </td>
              </tr>
            ) : (
              data.map((row, idx) => (
                <tr
                  key={row.id}
                  className={`border-t ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <td className="px-4 py-3">{row.id}</td>

                  <td
                    className="px-4 py-3 text-blue-600 cursor-pointer hover:underline"
                    onClick={() => onBillDateClick(row)}
                  >
                    {new Date(row.billdate).toLocaleDateString()}
                  </td>

                  <td className="px-4 py-3">
                    <span className="font-medium">{row.executive_name}</span>
                    <span className="text-gray-500"> ({row.mobile})</span>
                  </td>

                  <td className="px-4 py-3 text-center">{row.no_of_bill}</td>
                  <td className="px-4 py-3 text-center">{row.req_amount}</td>
                  <td className="px-4 py-3 text-center">{row.rm_amount}</td>
                  <td className="px-4 py-3 text-center">{row.rmh_amount}</td>
                  <td className="px-4 py-3 text-center">{row.account}</td>

                  <td className="px-4 py-3 text-center">
                    <span className="text-blue-600 cursor-pointer">{row.status}</span>
                  </td>

                  {/* IMAGES */}
                  <td className="px-4 py-3 text-center">
                    <div className="flex gap-2 justify-center">
                      {row.images?.slice(0, 4).map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          className="w-10 h-10 rounded-md object-cover border"
                        />
                      ))}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ---------------- MOBILE CARD VIEW ---------------- */}
      <div className="md:hidden p-2 space-y-3">
        {data.length === 0 ? (
          <p className="text-center text-gray-400 py-4">No records found</p>
        ) : (
          data.map((row) => (
            <div
              key={row.id}
              className="border rounded-lg p-3 bg-white shadow-sm space-y-2"
            >
              {/* TOP ROW */}
              <div className="flex justify-between text-sm">
                <span className="font-bold text-gray-800">#{row.id}</span>
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => onBillDateClick(row)}
                >
                  {new Date(row.billdate).toLocaleDateString()}
                </span>
              </div>

              {/* EXECUTIVE */}
              <div className="text-sm">
                <span className="font-semibold">{row.executive_name}</span>
                <span className="text-gray-500"> ({row.mobile})</span>
              </div>

              {/* INFO GRID */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <Info label="Bills" value={row.no_of_bill} />
                <Info label="Req Amt" value={row.req_amount} />
                <Info label="RM Amt" value={row.rm_amount} />
                <Info label="RMH Amt" value={row.rmh_amount} />
                <Info label="Total Amt" value={row.account} />
                <Info label="Status" value={row.status} valueClass="text-blue-600" />
              </div>

              {/* IMAGES */}
              <div className="flex gap-2 overflow-x-auto py-1">
                {row.images?.slice(0, 4).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="w-14 h-14 rounded-md border object-cover"
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

/* MOBILE INFO ITEM */
function Info({ label, value, valueClass }) {
  return (
    <div className="flex justify-between bg-gray-50 px-2 py-1 rounded">
      <span className="text-gray-500">{label}</span>
      <span className={`font-semibold ${valueClass}`}>{value}</span>
    </div>
  );
}
