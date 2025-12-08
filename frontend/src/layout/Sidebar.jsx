import React from "react";
import {
  FiGrid,
  FiFileText,
  FiList,
  FiMapPin,
  FiUsers,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
  FiMap,
} from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { usePageTitle } from "../context/PageTitleContext";
import { useTheme } from "../context/ThemeContext";

const modules = [
  { name: "Dashboard", path: "/dashboard", icon: <FiGrid size={20} /> },
  { name: "Distance", path: "/distance", icon: <FiMapPin size={20} /> },
  { name: "Expenses List", path: "/expenses", icon: <FiFileText size={20} /> },
  { name: "Task List", path: "/tasks", icon: <FiList size={20} /> },
  { name: "Activity", path: "/activity", icon: <FiMapPin size={20} /> },
  {
    name: "Technical Executive Day Summary",
    path: "/tech-summary",
    icon: <FiHelpCircle size={20} />,
  },
  {
    name: "New Asset Transaction List",
    path: "/asset-transactions",
    icon: <FiUsers size={20} />,
  },
  {
    name: "User Active & De-Active",
    path: "/user-status",
    icon: <FiSettings size={20} />,
  },
  {
    name: "Class Run Status",
    path: "/class-status",
    icon: <FiHelpCircle size={20} />,
  },
  {
    name: "User Route Map",
    path: "/user-route-map",
    icon: <FiMap size={20} />,
  },
];

export default function Sidebar({ collapsed, setCollapsed }) {
  const { setPageTitle } = usePageTitle();
  const { theme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  return (
    <aside
      className={`
        fixed top-0 left-0 h-full
        ${collapsed ? "w-16" : "w-64"}
        bg-white dark:bg-gray-900 dark:text-gray-200 
        border-r dark:border-gray-700 
        shadow-xl transition-all duration-300 z-50
      `}
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
    >
      {/* Logo Section */}
      <div className="p-4 border-b dark:border-gray-700 flex items-center justify-center">
        {!collapsed ? (
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">
            GActivity
          </h2>
        ) : (
          <div className="w-9 h-9 bg-blue-600 text-white flex items-center justify-center rounded-full font-bold">
            GA
          </div>
        )}
      </div>

      {/* Navigation Menu */}
      <nav className="sidebar-scroll flex-1 p-3 space-y-1 overflow-y-auto">
        {modules.map((item, idx) => {
          const isActive = location.pathname === item.path;

          return (
            <div key={idx} className="relative group">
              <Link
                to={item.path}
                onClick={() => setPageTitle(item.name)}
                className={`
                  w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all
                  ${
                    isActive
                      ? "bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 font-semibold"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }
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
                    bg-black/80 dark:bg-gray-700 text-white 
                    text-xs px-2 py-1 rounded shadow opacity-0 
                    group-hover:opacity-100 transition ml-2 whitespace-nowrap z-[999]
                  "
                >
                  {item.name}
                </span>
              )}
            </div>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-3 border-t dark:border-gray-700 flex justify-center">
        <button
          onClick={handleLogout}
          className="
            flex items-center gap-2 p-2 rounded 
            hover:bg-gray-100 dark:hover:bg-gray-800 
            transition text-sm text-red-600 dark:text-red-400
          "
        >
          <FiLogOut size={20} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
