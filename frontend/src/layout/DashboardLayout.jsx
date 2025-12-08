import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden pl-14 dark:bg-[#0f172a] bg-gray-50">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div className="flex-1 flex flex-col">
        <Header />

        <main
          className="
            p-6 pl-7 overflow-y-auto flex-1
            bg-gray-50            /* light mode */
            dark:bg-[#0f172a]     /* dark mode background */
            dark:text-gray-200    /* text color in dark mode */
          "
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
