import React from "react";

export default function SummaryCards({ summary, onAttendanceClick }) {
  const cards = [
    {
      title: "Attendance",
      value: `${summary.attendance.present}/${summary.attendance.total}`,
      clickable: true,
      onClick: onAttendanceClick,
    },
    { title: "No. of visits", value: summary.visitsCount },
    { title: "No of task activities", value: summary.taskActivitiesCount },
    { title: "Start visit time", value: summary.startVisitTime },
    { title: "End visit time", value: summary.endVisitTime },
    { title: "Photos uploaded", value: summary.photosUploaded },
    { title: "Distance travelled", value: summary.distanceKm + " KM" },
    { title: "Score and remarks", value: summary.scoreRemarks },
    { title: "Expense claimed", value: "₹ " + summary.expenseClaimed },
    { title: "Expense approved", value: "₹ " + summary.expenseApproved },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {cards.map((c, i) => (
        <div
          key={i}
          onClick={c.onClick}
          className={`bg-white p-4 shadow rounded-xl border cursor-pointer`}
        >
          <p className="text-xs text-gray-500">{c.title}</p>
          <p className="text-lg font-semibold">{c.value}</p>
        </div>
      ))}
    </div>
  );
}
