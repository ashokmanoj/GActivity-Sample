import React, { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import { Routes, Route } from "react-router-dom";

import Distance from "./pages/Distance";
import Expenses from "./pages/Expenses";
import TaskList from "./components/tasks/TaskList";
import Activity from "./pages/Activity";
import TechSummary from "./pages/TechSummary";
import AssetTransactions from "./pages/AssetTransactions";
import UserStatus from "./pages/UserStatus";
import ClassStatus from "./pages/ClassStatus";

export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="h-screen flex bg-gray-100">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 overflow-auto p-6">
          <Routes>
            {/* 👇 Default page when app opens */}
            <Route path="/" element={<TaskList />} />

            <Route path="/distance" element={<Distance />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/tech-summary" element={<TechSummary />} />
            <Route path="/asset-transactions" element={<AssetTransactions />} />
            <Route path="/user-status" element={<UserStatus />} />
            <Route path="/class-status" element={<ClassStatus />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
