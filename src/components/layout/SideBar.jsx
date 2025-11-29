import React from "react";
import {
  FiMapPin,
  FiFileText,
  FiList,
  FiGrid,
  FiUsers,
  FiSettings,
  FiHelpCircle,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const modules = [
  { name: "Distance", icon: <FiMapPin size={20} />, path: "/distance" },
  { name: "Expenses List", icon: <FiFileText size={20} />, path: "/expenses" },
  { name: "Task List", icon: <FiList size={20} />, path: "/tasks" },
  { name: "Activity", icon: <FiGrid size={20} />, path: "/activity" },
  { name: "Technical Executive Day Summary", icon: <FiUsers size={20} />, path: "/tech-summary" },
  { name: "GActivity : New Asset Transaction List", icon: <FiSettings size={20} />, path: "/asset-transactions" },
  { name: "User Active & De-Active", icon: <FiUsers size={20} />, path: "/user-status" },
  { name: "Class run status", icon: <FiHelpCircle size={20} />, path: "/class-status" },
];

export default function Sidebar({ collapsed, setCollapsed }) {
  return (
    <aside
      className={`
        ${collapsed ? "w-16" : "w-64"}
        bg-white border-r shadow-sm h-full flex flex-col transition-all duration-300 relative
      `}
    >
      {/* Logo */}
      <div className="p-4 border-b flex items-center justify-center">
        {!collapsed ? (
          <h2 className="text-lg font-bold text-gray-800">GActivity</h2>
        ) : (
          <div className="w-9 h-9 bg-blue-600 text-white flex items-center justify-center rounded-full font-bold">
            G
          </div>
        )}
      </div>

      {/* Modules Navigation */}
      <nav className="flex-1 p-3 space-y-1">
        {modules.map((item, idx) => (
          <div key={idx} className="relative group">
            <Link
              to={item.path}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-gray-100 transition"
            >
              {item.icon}
              {!collapsed && <span>{item.name}</span>}
            </Link>

            {/* Tooltip when collapsed */}
            {collapsed && (
              <span
                className="
                  absolute left-14 top-1/2 -translate-y-1/2
                  bg-black text-white text-xs px-2 py-1 rounded shadow 
                  opacity-0 group-hover:opacity-100 transition ml-2 whitespace-nowrap z-50
                "
              >
                {item.name}
              </span>
            )}
          </div>
        ))}
      </nav>

      {/* Collapse / Expand Button */}
      <div className="p-3 border-t flex justify-center">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded hover:bg-gray-100 transition"
        >
          {collapsed ? <FiChevronRight size={20} /> : <FiChevronLeft size={20} />}
        </button>
      </div>
    </aside>
  );
}
