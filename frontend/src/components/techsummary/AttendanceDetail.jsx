import React from "react";
import usePagination from "../../utils/usePagination";

export default function AttendanceDetail({ summary, exec, onClose }) {
  const { page, totalPages, currentData, goNext, goPrev } = usePagination(
    summary.attendanceRows,
    10
  );

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-[95%] max-w-6xl p-6 rounded-xl shadow-xl relative">
        {/* CLOSE BUTTON */}
        <button
          className="absolute top-4 right-4 text-xl font-bold"
          onClick={onClose}
        >
          ✖
        </button>

        <h3 className="font-semibold text-lg mb-4">
          Attendance Details – {exec?.name}
        </h3>

        {/* EMPTY STATE */}
        {summary.attendanceRows.length === 0 ? (
          <p className="text-center text-gray-500 py-4">
            No attendance records available.
          </p>
        ) : (
          <>
            {/* TABLE */}
            <div className="overflow-auto max-h-[60vh] border rounded-xl">
              <table className="min-w-full text-xs">
                <thead className="bg-gray-100 sticky top-0 z-10">
                  <tr>
                    {[
                      "SL",
                      "Executive",
                      "Designation",
                      "RM",
                      "FV IN",
                      "LV OUT",
                      "Duration",
                      "Status",
                      "RM Status",
                      "RM Comments",
                      "HR IN",
                      "HR OUT",
                      "HR Status",
                      "HR Comments",
                    ].map((head) => (
                      <th key={head} className="border p-2 text-left">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((row) => (
                    <tr key={row.sl} className="even:bg-gray-50">
                      {Object.values(row).map((cell, i) => (
                        <td key={i} className="border p-2">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* PAGINATION */}
            <div className="flex justify-between items-center mt-4">
              <button
                className={`px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 ${
                  page === 1 && "opacity-50 cursor-not-allowed"
                }`}
                onClick={goPrev}
                disabled={page === 1}
              >
                Previous
              </button>

              <span className="text-gray-600 text-sm">
                Page <strong>{page}</strong> of <strong>{totalPages}</strong>
              </span>

              <button
                className={`px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 ${
                  page === totalPages && "opacity-50 cursor-not-allowed"
                }`}
                onClick={goNext}
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
