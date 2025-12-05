import React from "react";
// import usePagination from "../../utils/usePagination";

export default function ClassRunStatusSection({ summary }) {
  const { page, totalPages, currentData, goNext, goPrev } = usePagination(
    summary.classRunStatus,
    10
  );

  return (
    <div className="bg-white shadow rounded-xl border mt-4">
      <div className="bg-red-50 border-b p-3 font-semibold">
        Class Run Status
      </div>

      {summary.classRunStatus.length === 0 ? (
        <p className="p-4 text-center text-gray-500">
          No class run data available.
        </p>
      ) : (
        <>
          <div className="overflow-auto max-h-[55vh]">
            <table className="min-w-full text-xs">
              <thead className="bg-gray-100 sticky top-0 z-10">
                <tr>
                  <th className="border p-2">SL</th>
                  <th className="border p-2">Institution</th>
                  <th className="border p-2">Last Visit</th>
                  <th className="border p-2">Session</th>
                  <th className="border p-2">Volunteer</th>
                  <th className="border p-2">Tickets</th>
                  <th className="border p-2">SLC (5 Days)</th>
                  <th className="border p-2">Last RAC</th>
                </tr>
              </thead>

              <tbody>
                {currentData.map((row) => (
                  <tr key={row.sl} className="even:bg-gray-50">
                    <td className="border p-2">{row.sl}</td>
                    <td className="border p-2">{row.institution}</td>
                    <td className="border p-2">{row.lastVisit}</td>
                    <td className="border p-2">{row.sessionRun}</td>
                    <td className="border p-2">{row.volunteerPresence}</td>
                    <td className="border p-2">{row.tickets}</td>
                    <td className="border p-2">
                      {row.slcStatusDays.join(" ")}
                    </td>
                    <td className="border p-2">{row.lastRACRun}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center p-3">
            <button
              onClick={goPrev}
              disabled={page === 1}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Previous
            </button>

            <span className="text-sm text-gray-600">
              Page {page} of {totalPages}
            </span>

            <button
              onClick={goNext}
              disabled={page === totalPages}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
