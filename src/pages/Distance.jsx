import React, { useState } from "react";
import {
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight
} from "react-icons/fi";
import { FaFileExcel } from "react-icons/fa";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

export default function Distance() {
  // Dropdown states
  const [project, setProject] = useState("All Project");
  const [rm, setRM] = useState("All RM");
  const [designation, setDesignation] = useState("Designation");
  const [executive, setExecutive] = useState("Technical Executive");

  // Calendar states
  const [dateMenuOpen, setDateMenuOpen] = useState(false);
  const [selectStep, setSelectStep] = useState(0);  // <-- NEW
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(2025, 10, 29),
      endDate: new Date(2025, 10, 29),
      key: "selection"
    }
  ]);

  const formattedDate = `${format(dateRange[0].startDate, "dd MMM yyyy")} - ${format(
    dateRange[0].endDate,
    "dd MMM yyyy"
  )}`;

  // When selecting date range
  const handleDateChange = (item) => {
    const newSelection = item.selection;
    setDateRange([newSelection]);

    if (selectStep === 0) {
      setSelectStep(1); // first date selected
    } else {
      setSelectStep(0);
      setDateMenuOpen(false); // close after second date selection
    }
  };

  return (
    <div className="w-full">

      {/* FILTER BAR */}
      <div className="bg-[#f4f8f9] p-4 rounded-lg shadow-sm flex flex-wrap items-center justify-between gap-4">

        {/* LEFT FILTER GROUP */}
        <div className="flex flex-wrap items-center gap-4">

          <Dropdown width="w-60" value={project} onChange={setProject} options={["All Project", "Project A", "Project B"]} />
          <Dropdown width="w-52" value={rm} onChange={setRM} options={["All RM", "RM 1", "RM 2"]} />
          <Dropdown width="w-52" value={designation} onChange={setDesignation} options={["Designation", "Manager", "Supervisor"]} />
          <Dropdown width="w-56" value={executive} onChange={setExecutive} options={["Technical Executive", "Executive A", "Executive B"]} />

          {/* Date Range Picker */}
          <div className="relative">
            <div
              onClick={() => { setDateMenuOpen(!dateMenuOpen); setSelectStep(0); }}
              className="flex items-center bg-white px-4 py-2 rounded-full border w-72 shadow-sm gap-2 cursor-pointer"
            >
              <FiChevronLeft className="cursor-pointer text-gray-600" />
              <span className="flex-1">{formattedDate}</span>
              <FiChevronRight className="cursor-pointer text-gray-600" />
            </div>

            {/* Calendar */}
            {dateMenuOpen && (
              <div className="absolute mt-2 bg-white border shadow-lg rounded-xl z-50">
                <DateRange
                  ranges={dateRange}
                  onChange={handleDateChange}
                  moveRangeOnFirstSelection={false}
                  rangeColors={["#4f46e5"]}
                />
              </div>
            )}
          </div>

          {/* SEARCH BUTTON */}
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md shadow hover:bg-blue-700 transition">
            Search
          </button>

          {/* EXCEL EXPORT BUTTON */}
          <button className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 shadow hover:bg-green-700 transition">
            <FaFileExcel className="text-white" />
            Export Excel
          </button>
        </div>

        {/* RIGHT SIDE — Expand All Images */}
        <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600 transition whitespace-nowrap">
          Expand All Image
        </button>

      </div>

      {/* PAGE CONTENT */}
      <div className="mt-8 text-center">
        <h2 className="text-lg font-semibold text-gray-700">Distance Summary</h2>
        <p className="text-gray-500 text-sm mt-1">
          Display filtered distance records here...
        </p>
      </div>

    </div>
  );
}

/* COMPONENT: Dropdown */
function Dropdown({ value, onChange, options, width }) {
  return (
    <div className={`relative ${width}`}>
      <select
        className="appearance-none bg-white px-4 py-2 rounded-full border outline-none shadow-sm w-full cursor-pointer"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt, idx) => (
          <option key={idx}>{opt}</option>
        ))}
      </select>
      <FiChevronDown className="absolute right-4 top-3 text-gray-500" />
    </div>
  );
}
