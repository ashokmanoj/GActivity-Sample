import React, { useState } from "react";
import { FiChevronDown, FiFileText, FiUser } from "react-icons/fi";
import { usePageTitle } from "../context/PageTitleContext";  

export default function Header() {
  const { pageTitle } = usePageTitle();
  const [openReports, setOpenReports] = useState(false);

  return (
    <header className="w-full h-16 bg-white border-b shadow-sm flex items-center justify-between px-6 relative">

      {/* PAGE TITLE */}
      <h1 className="text-lg font-semibold text-gray-800">
        {pageTitle}
      </h1>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">

        {/* REPORTS DROPDOWN */}
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

              <ReportItem text="Institution Location" />
              <ReportItem text="Visit Reports" />
              <ReportItem text="Sub-Meter Reports" />
              <ReportItem text="Documentation Reports" />
              <ReportItem text="GeoData Received" />
              <ReportItem text="All Users" />

              <hr className="my-2" />

              <ReportItem text="Log Report" />
              <ReportItem text="Monthly Log Report" />
              <ReportItem text="Task GPS Log Reports" />
              <ReportItem text="Recent Visit Reports" />
              <ReportItem text="Task Status Reports" />
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

/* REPORT ITEM COMPONENT */
function ReportItem({ text }) {
  return (
    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
      {text}
    </button>
  );
}
