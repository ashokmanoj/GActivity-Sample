import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden pl-14">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="p-6 pl-7 overflow-y-auto bg-gray-50 flex-1">
          <Outlet /> {/* All pages load here */}
        </main>
      </div>
    </div>
  );
}
