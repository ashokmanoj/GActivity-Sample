import React, { useState, useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { FiFileText, FiChevronDown } from "react-icons/fi";
import { moduleStatus } from "../../data/moduleStatus";

// Map routes to title
const pageTitles = {
  "/": "Task List",
  "/distance": "Distance",
  "/expenses": "Expenses List",
  "/tasks": "Task List",
  "/activity": "Activity",
  "/tech-summary": "Technical Executive Day Summary",
  "/asset-transactions": "New Asset Transaction List",
  "/user-status": "User Active & De-Active",
  "/class-status": "Class Run Status",
};

export default function Header() {
  const location = useLocation();
  const currentPage = pageTitles[location.pathname] || "GActivity";

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white border-b shadow-sm px-6 py-3 flex items-center justify-between">

      {/* LEFT — Active Page Name */}
      <div className="text-gray-700 text-sm font-medium">
        {currentPage}
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-6">

        {/* Reports Dropdown (CLICK to open) */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 text-gray-700 text-sm cursor-pointer"
          >
            <FiFileText size={14} />
            <span>Reports</span>
            <FiChevronDown size={14} className={`${open ? "rotate-180" : ""} transition`} />
          </button>

          {/* Dropdown Menu */}
          {open && (
            <div className="absolute right-0 mt-2 w-56 bg-white border rounded shadow-md z-50 py-1">

              {moduleStatus.map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              ))}

            </div>
          )}
        </div>

        {/* Role */}
        <p className="text-gray-500 text-sm">
          <span className="font-semibold text-gray-700">Role :</span> Admin_View
        </p>

        {/* Viewer */}
        <p className="text-gray-700 text-sm font-medium">Viewer</p>

        {/* Profile Icon */}
        <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M5.121 17.804A9 9 0 1118.364 4.561 9 9 0 015.12 17.804z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M12 12a5 5 0 10-5-5 5 5 0 005 5zm0 0c3.866 0 7 3.582 7 8H5c0-4.418 3.134-8 7-8z" />
          </svg>
        </div>

      </div>
    </header>
  );
}
