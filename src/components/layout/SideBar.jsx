import React from "react";
import {
  FiGrid,
  FiFileText,
  FiList,
  FiMapPin,
  FiUsers,
  FiSettings,
  FiHelpCircle,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { usePageTitle } from "../../context/PageTitleContext";

const modules = [
  { name: "Distance", path: "/distance", icon: <FiGrid size={20} /> },
  { name: "Expenses List", path: "/expenses", icon: <FiFileText size={20} /> },
  { name: "Task List", path: "/tasks", icon: <FiList size={20} /> },
  { name: "Activity", path: "/activity", icon: <FiMapPin size={20} /> },
  {
    name: "Technical Executive Day Summary",
    path: "/tech-summary",
    icon: <FiMapPin size={20} />,
  },
  {
    name: "GActivity : New Asset Transaction List",
    path: "/newasset",
    icon: <FiUsers size={20} />,
  },
  { name: "User Active & De-Active", path: "/useractive", icon: <FiSettings size={20} /> },
  { name: "Class Run Status", path: "/class-status", icon: <FiHelpCircle size={20} /> },
];

export default function Sidebar({ collapsed, setCollapsed }) {
  const { setPageTitle } = usePageTitle();
  const location = useLocation();

  return (
    <aside
      className={`
        ${collapsed ? "w-16" : "w-64"}
        bg-white border-r shadow-sm h-full flex flex-col transition-all duration-300 relative
      `}
    >
      {/* Logo Section */}
      <div className="p-4 border-b flex items-center justify-center">
        {!collapsed ? (
          <h2 className="text-lg font-bold text-gray-800">GActivity</h2>
        ) : (
          <div className="w-9 h-9 bg-blue-600 text-white flex items-center justify-center rounded-full font-bold">
            G
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1">
        {modules.map((item, idx) => {
          const isActive = location.pathname === item.path;

          return (
            <div key={idx} className="relative group">
              <Link
                to={item.path}
                onClick={() => setPageTitle(item.name)}
                className={`
                  w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm
                  transition-all
                  ${isActive ? "bg-blue-100 text-blue-700 font-semibold" : "hover:bg-gray-100"}
                `}
              >
                {item.icon}
                {!collapsed && <span>{item.name}</span>}
              </Link>

              {/* Tooltip when collapsed */}
              {collapsed && (
                <span
                  className="
                    absolute left-14 top-1/2 -translate-y-1/2
                    bg-black text-white text-xs px-2 py-1 rounded shadow opacity-0 
                    group-hover:opacity-100 transition ml-2 whitespace-nowrap z-50
                  "
                >
                  {item.name}
                </span>
              )}
            </div>
          );
        })}
      </nav>

      {/* Collapse Button */}
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
