// src/components/asset/SummaryCards.jsx

import React from "react";

const CARD_COLORS = {
  "To Store": "bg-slate-800",
  "From Store": "bg-orange-500",
  "In Hand": "bg-indigo-800",
  Institution: "bg-red-500",
  Vendor: "bg-amber-900",
};

export default function SummaryCards({ counts }) {
  const cards = ["To Store", "From Store", "In Hand", "Institution", "Vendor"];

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
      {cards.map((key) => (
        <div
          key={key}
          className={`${CARD_COLORS[key]} text-white rounded-xl shadow p-4 h-28 flex flex-col justify-between`}
        >
          <div className="text-sm font-semibold">{key}</div>
          <div className="text-2xl font-bold">{counts[key] ?? "--"}</div>
        </div>
      ))}
    </div>
  );
}
