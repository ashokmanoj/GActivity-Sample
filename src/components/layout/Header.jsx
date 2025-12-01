import React, { useState } from "react";
import {
  FiChevronDown,
  FiMapPin,
  FiUser,
  FiFileText,
  FiRefreshCcw,
  FiLayers,
  FiFlag,
} from "react-icons/fi";

export default function Header() {
  const [openReports, setOpenReports] = useState(false);

  return (
    <header className="w-full h-16 bg-white border-b shadow-sm flex items-center justify-between px-6">

      {/* LEFT — PAGE TITLE / MODULE NAME */}
      <div className="text-lg font-semibold text-gray-700">
        GActivity
      </div>

      {/* RIGHT AREA */}
      <div className="flex items-center gap-6">

        {/* REPORT DROPDOWN */}
        <div className="relative">
          <button
            onClick={() => setOpenReports(!openReports)}
            className="flex items-center gap-1 px-3 py-1 rounded hover:bg-gray-100 transition"
          >
            <FiFileText />
            Reports
            <FiChevronDown size={14} />
          </button>

          {openReports && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-xl border rounded-xl py-2 z-50">

              {/* --- Report Items --- */}
              <ReportItem icon={<FiFlag />} text="Institution Location" />
              <ReportItem icon={<FiRefreshCcw />} text="Visit Reports" />
              <ReportItem icon={<FiLayers />} text="Sub-Meter Reports" />
              <ReportItem icon={<FiFileText />} text="Documentation Reports" />
              <ReportItem icon={<FiMapPin />} text="GeoData Received" />
              <ReportItem icon={<FiUser />} text="All Users" />

              <hr className="my-2" />

              <ReportItem icon={<FiFileText />} text="Log Report" />
              <ReportItem icon={<FiFileText />} text="Monthly Log Report" />
              <ReportItem icon={<FiMapPin />} text="Task GPS Log Reports" />
              <ReportItem icon={<FiRefreshCcw />} text="Recent Visit Reports" />
              <ReportItem icon={<FiLayers />} text="Task Status Reports" />
            </div>
          )}
        </div>

        {/* USER ICON */}
        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
          <FiUser size={18} />
        </div>
      </div>
    </header>
  );
}

/* ------------------- REUSABLE ITEM COMPONENT ------------------- */
function ReportItem({ icon, text }) {
  return (
    <button
      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
    >
      <span className="text-gray-600">{icon}</span>
      {text}
    </button>
  );
}
