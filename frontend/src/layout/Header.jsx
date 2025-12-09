// Header.jsx
import React, { useState, useEffect } from "react";
import {
  FiChevronDown,
  FiFileText,
  FiUser,
  FiLogOut,
  FiSun,
  FiMoon,
  FiMenu,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { usePageTitle } from "../context/PageTitleContext";
import { useTheme } from "../context/ThemeContext";

export default function Header({ setMobileOpen }) {
  const { pageTitle } = usePageTitle();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const [openReports, setOpenReports] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  // Detect mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <header
      className="
      h-16 bg-white dark:bg-gray-900 dark:text-white 
      flex items-center justify-between 
      px-4 lg:px-6 border-b dark:border-gray-700 
      transition
    "
    >
      {/* MOBILE MENU BUTTON */}
      <button
        className="lg:hidden mr-2 text-gray-700 dark:text-gray-200"
        onClick={() => setMobileOpen(true)}
      >
        <FiMenu size={22} />
      </button>

      {/* PAGE TITLE (STATIC ON MOBILE) */}
      <h1 className="text-lg font-semibold">
        {isMobile ? "GActivity" : pageTitle}
      </h1>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">
        {/* THEME TOGGLE */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700"
        >
          {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>

        {/* REPORTS DROPDOWN (DESKTOP ONLY) */}
        <div className="relative hidden lg:block">
          <button
            onClick={() => setOpenReports(!openReports)}
            className="flex items-center gap-1 px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <FiFileText />
            Reports
            <FiChevronDown size={14} />
          </button>

          {openReports && (
            <div
              className="
              absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 
              rounded-xl shadow-lg border dark:border-gray-700 overflow-hidden
            "
            >
              {[
                "Institution Location",
                "Visit Reports",
                "Sub-Meter Reports",
                "Documentation Reports",
              ].map((txt, i) => (
                <button
                  key={i}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {txt}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* USER MENU */}
        <div className="relative">
          <button
            className="
              w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 
              flex items-center justify-center
            "
            onClick={() => setOpenUserMenu(!openUserMenu)}
          >
            <FiUser size={18} />
          </button>

          {openUserMenu && (
            <div
              className="
               right-0 mt-2 w-44 bg-white dark:bg-gray-800 
              rounded-xl border dark:border-gray-700 shadow-lg overflow-hidden
            "
            >
              <button
                onClick={toggleTheme}
                className="
                  w-full px-4 py-2 text-left hover:bg-gray-100 
                  dark:hover:bg-gray-700 flex items-center gap-2
                "
              >
                {theme === "dark" ? <FiSun /> : <FiMoon />}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>

              <button
                className="
                w-full px-4 py-2 text-left hover:bg-gray-100 
                dark:hover:bg-gray-700 flex items-center gap-2
              "
              >
                <FiUser size={16} /> Profile
              </button>

              <button
                onClick={logout}
                className="
                  w-full px-4 py-2 text-left text-red-600 
                  hover:bg-red-50 dark:hover:bg-red-900/20 
                  flex items-center gap-2
                "
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
