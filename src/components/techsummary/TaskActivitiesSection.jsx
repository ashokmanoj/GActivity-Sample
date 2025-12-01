import React from "react";
import usePagination from "../../utils/usePagination";
import TaskActivitiesPhoto from "./TaskActivitiesPhoto";

export default function TaskActivitiesSection({ summary }) {
  const {
    page,
    totalPages,
    currentData,
    goNext,
    goPrev,
  } = usePagination(summary.taskActivities, 10);

  return (
    <div className="w-full bg-white rounded-xl shadow border p-0">

      {/* HEADER */}
      <div className="p-3 bg-red-50 border-b font-semibold">
        Task Activities ({summary.taskActivities.length})
      </div>

      <div className="flex">

        {/* 65% TABLE SECTION */}
        <div className="w-[65%] border-r">
          
          {summary.taskActivities.length === 0 ? (
            <p className="p-4 text-gray-500 text-center">No activities found.</p>
          ) : (
            <>
              <div className="overflow-auto max-h-[55vh]">
                <table className="min-w-full text-xs">
                  <thead className="bg-gray-100 sticky top-0 z-10">
                    <tr>
                      <th className="border p-2">SL</th>
                      <th className="border p-2">Time</th>
                      <th className="border p-2">Institution</th>
                      <th className="border p-2">Task</th>
                      <th className="border p-2">Category</th>
                      <th className="border p-2">Outcome</th>
                      <th className="border p-2">TimeSpent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.map((row) => (
                      <tr key={row.sl} className="even:bg-gray-50">
                        <td className="border p-2">{row.sl}</td>
                        <td className="border p-2">{row.time}</td>
                        <td className="border p-2">{row.institution}</td>
                        <td className="border p-2">{row.task}</td>
                        <td className="border p-2">{row.categorySub}</td>
                        <td className="border p-2">{row.outcome}</td>
                        <td className="border p-2">{row.timespent}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* PAGINATION */}
              <div className="flex justify-between items-center p-3">
                <button
                  className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                  onClick={goPrev}
                  disabled={page === 1}
                >
                  Previous
                </button>

                <span>Page {page} of {totalPages}</span>

                <button
                  className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                  onClick={goNext}
                  disabled={page === totalPages}
                >
                  Next
                </button>
              </div>

            </>
          )}
        </div>

        {/* 35% PHOTO SECTION */}
        <div className="w-[35%]">
          <TaskActivitiesPhoto activities={summary.taskActivities} />
        </div>

      </div>
    </div>
  );
}
