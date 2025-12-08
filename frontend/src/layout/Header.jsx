import React, { useState } from "react";
import {
  FiChevronDown,
  FiFileText,
  FiUser,
  FiLogOut,
  FiSun,
  FiMoon
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { usePageTitle } from "../context/PageTitleContext";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { pageTitle } = usePageTitle();
  const { theme, toggleTheme } = useTheme();

  const [openReports, setOpenReports] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="w-full h-16 bg-white dark:bg-gray-900 dark:text-white border-b shadow-sm flex items-center justify-between px-6 relative transition">

      {/* PAGE TITLE */}
      <h1 className="text-lg font-semibold">
        {pageTitle}
      </h1>
     <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-dark-bg dark:bg-dark-border text-dark-text"
        >
          {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">

        {/* REPORTS DROPDOWN */}
        <div className="relative">
        
          <button
            onClick={() => setOpenReports(!openReports)}
            className="flex items-center gap-1 px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <FiFileText />
            Reports
            <FiChevronDown size={14} />
          </button>

          {openReports && (
            <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 dark:text-white shadow-xl border dark:border-gray-700 rounded-xl py-2 z-50">
              <ReportItem text="Institution Location" />
              <ReportItem text="Visit Reports" />
              <ReportItem text="Sub-Meter Reports" />
              <ReportItem text="Documentation Reports" />
              <ReportItem text="GeoData Received" />
              <ReportItem text="All Users" />

              <hr className="my-2 border-gray-300 dark:border-gray-700" />

              <ReportItem text="Log Report" />
              <ReportItem text="Monthly Log Report" />
              <ReportItem text="Task GPS Log Reports" />
              <ReportItem text="Recent Visit Reports" />
              <ReportItem text="Task Status Reports" />
            </div>
          )}
        </div>

        {/* USER ICON DROPDOWN */}
        <div className="relative">
          <div
            onClick={() => setOpenUserMenu(!openUserMenu)}
            className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            <FiUser size={18} />
          </div>

          {openUserMenu && (
            <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 dark:text-white border dark:border-gray-700 shadow-xl rounded-xl py-2 z-50">

              {/* THEME TOGGLE BUTTON */}
              <button
                onClick={toggleTheme}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
              >
                {theme === "light" ? <FiMoon /> : <FiSun />} 
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </button>

              {/* PROFILE */}
              <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2">
                <FiUser size={16} /> Profile
              </button>

              {/* LOGOUT */}
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 flex items-center gap-2"
              >
                <FiLogOut size={16} /> Logout
              </button>

            </div>
          )}
        </div>

      </div>
    </header>
  );
}

function ReportItem({ text }) {
  return (
    <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
      {text}
    </button>
  );
}
