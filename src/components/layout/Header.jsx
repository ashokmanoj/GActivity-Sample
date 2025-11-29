import React from "react";
import { FiFileText, FiChevronDown } from "react-icons/fi";

export default function Header() {
  return (
    <header className="bg-white border-b shadow-sm px-6 py-3 flex items-center justify-between">

      {/* LEFT — Distance */}
      <div className="text-gray-500 text-sm">
        Distance
      </div>

      {/* CENTER — Reports dropdown */}
      <div className="flex items-center gap-1 cursor-pointer select-none text-gray-700 text-sm">
        <FiFileText size={14} />
        <span>Reports</span>
        <FiChevronDown size={14} />
      </div>

      {/* RIGHT — Role + Viewer + Profile Icon */}
      <div className="flex items-center gap-6">

        {/* Role */}
        <p className="text-gray-500 text-sm">
          <span className="font-semibold text-gray-700">Role :</span> Admin_View
        </p>

        {/* Viewer label */}
        <p className="text-gray-700 text-sm font-medium">
          Viewer
        </p>

        {/* Profile icon */}
        <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
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
