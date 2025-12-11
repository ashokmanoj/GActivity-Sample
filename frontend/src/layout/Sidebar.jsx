import React, { useEffect, useState } from "react";
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
  // {
  //   name: "User Route Map",
  //   path: "/UserRouteMapPage",
  //   icon: <FiMap size={20} />,
  // },
];

export default function Sidebar({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}) {
  const { setPageTitle } = usePageTitle();
  const location = useLocation();
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      {/* MOBILE OVERLAY */}
      {isMobile && mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full z-50
          bg-white dark:bg-gray-900 dark:text-gray-200
          border-r dark:border-gray-700 shadow-xl
          transition-all duration-300

          /* Desktop Behavior (Hover Collapse) */
          ${!isMobile ? (collapsed ? "w-16" : "w-64") : "w-64"}

          /* Mobile Drawer Slide */
          ${
            isMobile ? (mobileOpen ? "translate-x-0" : "-translate-x-full") : ""
          }
        `}
        onMouseEnter={() => !isMobile && setCollapsed(false)}
        onMouseLeave={() => !isMobile && setCollapsed(true)}
      >
        {/* LOGO SECTION */}
        <div className="p-4 border-b dark:border-gray-700 flex items-center gap-3">
          {/* On Desktop collapsed version show GA only */}
          {!isMobile && collapsed ? (
            <div className="w-9 h-9 bg-blue-600 text-white flex items-center justify-center rounded-full font-bold">
              GA
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-blue-600 text-white flex items-center justify-center rounded-full font-bold">
                GA
              </div>
              <div className="flex flex-col">
                <h2 className="text-lg font-bold">GActivity</h2>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Admin Panel
                </span>
              </div>
            </div>
          )}
        </div>
        {/* MOBILE CLOSE BUTTON */}
        {isMobile && (
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            ✕
          </button>
        )}

        {/* MENU */}
        <nav className="flex-1 p-3 overflow-y-auto space-y-1">
          {modules.map((item, idx) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={idx}
                to={item.path}
                onClick={() => {
                  setPageTitle(item.name);
                  if (isMobile) setMobileOpen(false);
                }}
                className={`
                  flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all
                  ${
                    isActive
                      ? "bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 font-semibold"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }
                `}
              >
                {item.icon}
                {/* Hide text only in desktop collapsed mode, never hide on mobile */}
                {(!collapsed || isMobile) && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* LOGOUT */}
        <div className="p-3 border-t dark:border-gray-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-red-600 dark:text-red-400 w-full text-left"
          >
            <FiLogOut size={20} />
            {(!collapsed || isMobile) && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
