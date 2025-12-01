import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Dropdown from "../common/Dropdown";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { FaFileExcel } from "react-icons/fa";

export default function TaskListFilter() {
  const [project, setProject] = useState("All Project");
  const [rm, setRM] = useState("All RM");
  const [designation, setDesignation] = useState("All Designation");
  const [executive, setExecutive] = useState("All Executive");
  const [status, setStatus] = useState("All Status");

  // Date picker
  const [dateMenuOpen, setDateMenuOpen] = useState(false);
  const [selectStep, setSelectStep] = useState(0);
  const [dateRange, setDateRange] = useState([
    { startDate: new Date(), endDate: new Date(), key: "selection" }
  ]);

  const formattedDate = `${format(dateRange[0].startDate, "dd MMM yyyy")} - ${format(
    dateRange[0].endDate,
    "dd MMM yyyy"
  )}`;

  const handleDateChange = (item) => {
    setDateRange([item.selection]);

    if (selectStep === 0) setSelectStep(1);
    else {
      setSelectStep(0);
      setDateMenuOpen(false);
    }
  };

  return (
    <div className="bg-[#f4f8f9] p-4 rounded-lg shadow-sm flex flex-wrap items-center justify-between gap-4">

      {/* LEFT FILTER SECTION */}
      <div className="flex flex-wrap gap-4 items-center">

        <Dropdown
          width="w-60"
          value={project}
          onChange={setProject}
          options={["All Project", "Project A", "Project B"]}
        />

        <Dropdown
          width="w-48"
          value={rm}
          onChange={setRM}
          options={["All RM", "RM 1", "RM 2"]}
        />

        <Dropdown
          width="w-56"
          value={designation}
          onChange={setDesignation}
          options={["All Designation", "Manager", "Supervisor"]}
        />

        <Dropdown
          width="w-56"
          value={executive}
          onChange={setExecutive}
          options={["All Executive", "Executive A", "Executive B"]}
        />

        <Dropdown
          width="w-56"
          value={status}
          onChange={setStatus}
          options={["All Status", "Completed", "Pending", "In Progress"]}
        />

        {/* DATE RANGE INPUT */}
        <div className="relative">
          <div
            onClick={() => { setDateMenuOpen(!dateMenuOpen); setSelectStep(0); }}
            className="flex items-center bg-white px-4 py-2 rounded-full border w-72 shadow-sm gap-2 cursor-pointer"
          >
            <FiChevronLeft className="text-gray-600" />
            <span className="flex-1">{formattedDate}</span>
            <FiChevronRight className="text-gray-600" />
          </div>

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
        <button className="bg-blue-600 text-white px-5 py-2 rounded-md shadow hover:bg-blue-700">
          Search
        </button>

      </div>

      {/* RIGHT EXPORT BUTTON */}
      <button className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 shadow hover:bg-green-700">
        <FaFileExcel />
      </button>

    </div>
  );
}
