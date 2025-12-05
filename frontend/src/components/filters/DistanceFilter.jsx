import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaFileExcel } from "react-icons/fa";
import Dropdown from "../common/Dropdown";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

export default function DistanceFilter() {
  const [project, setProject] = useState("All Project");
  const [rm, setRM] = useState("All RM");
  const [designation, setDesignation] = useState("Designation");
  const [executive, setExecutive] = useState("Technical Executive");

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

      {/* LEFT SIDE FILTERS */}
      <div className="flex flex-wrap items-center gap-4">
        <Dropdown width="w-60" value={project} onChange={setProject} options={["All Project", "Project A", "Project B"]} />
        <Dropdown width="w-52" value={rm} onChange={setRM} options={["All RM", "RM 1", "RM 2"]} />
        <Dropdown width="w-52" value={designation} onChange={setDesignation} options={["Designation", "Manager"]} />
        <Dropdown width="w-56" value={executive} onChange={setExecutive} options={["Technical Executive", "Executive A"]} />

        {/* DATE RANGE */}
        <div className="relative">
          <div
            onClick={() => { setDateMenuOpen(!dateMenuOpen); setSelectStep(0); }}
            className="flex items-center bg-white px-4 py-2 rounded-full border w-72 shadow-sm gap-2 cursor-pointer"
          >
            <FiChevronLeft />
            <span className="flex-1">{formattedDate}</span>
            <FiChevronRight />
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

        {/* SEARCH */}
        <button className="bg-blue-600 text-white px-5 py-2 rounded-md shadow hover:bg-blue-700">
          Search
        </button>

        {/* EXCEL */}
        <button className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 shadow hover:bg-green-700">
          <FaFileExcel />
        </button>
      </div>

      
    </div>
  );
}
