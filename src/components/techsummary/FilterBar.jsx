import React from "react";

export default function FilterBar({
  selectedRm,
  setSelectedRm,
  selectedDesignation,
  setSelectedDesignation,
  selectedExecId,
  setSelectedExecId,
  selectedDate,
  setSelectedDate,
  mode,
  setMode,
  filteredExecutives,
}) {
  return (
    <div className="bg-white rounded-xl shadow border p-4 flex flex-wrap gap-4 items-center">
      <input
        type="date"
        className="border px-3 py-2 rounded-lg"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      <select
        className="border px-3 py-2 rounded-lg"
        value={selectedRm}
        onChange={(e) => setSelectedRm(e.target.value)}
      >
        {["DEEP", "NORTH"].map((rm) => (
          <option key={rm}>{rm}</option>
        ))}
      </select>

      <select
        className="border px-3 py-2 rounded-lg"
        value={selectedDesignation}
        onChange={(e) => setSelectedDesignation(e.target.value)}
      >
        {["Installation Interns", "Technical Executive"].map((d) => (
          <option key={d}>{d}</option>
        ))}
      </select>

      <select
        className="border px-3 py-2 rounded-lg min-w-[260px]"
        value={selectedExecId}
        onChange={(e) => setSelectedExecId(e.target.value)}
      >
        {filteredExecutives.map((e) => (
          <option key={e.id} value={e.id}>
            {e.name}
          </option>
        ))}
      </select>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        Search
      </button>

      <div className="ml-auto flex border rounded-lg overflow-hidden">
        <button
          className={`px-4 py-2 ${
            mode === "day" ? "bg-red-600 text-white" : "bg-white"
          }`}
          onClick={() => setMode("day")}
        >
          Day
        </button>
        <button
          className={`px-4 py-2 ${
            mode === "month" ? "bg-black text-white" : "bg-white"
          }`}
          onClick={() => setMode("month")}
        >
          Month
        </button>
      </div>
    </div>
  );
}
