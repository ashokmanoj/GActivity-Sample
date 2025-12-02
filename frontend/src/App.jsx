import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Distance from "./pages/Distance";
import Expenses from "./pages/Expenses";
import Tasks from "./pages/TaskList";
import Activity from "./pages/Activity";
import TechSummary from "./pages/TechSummary";
import NewAsset from "./pages/AssetTransactions";
import UserActive from "./pages/UserStatus";
import ClassStatus from "./pages/ClassStatus";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // Auto-login if token exists
  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  }, []);

  return (
    <Routes>
      {/* LOGIN PAGE */}
      <Route path="/" element={<Login onLogin={() => setLoggedIn(true)} />} />

      {/* PROTECTED ROUTES */}
      <Route
        element={
          loggedIn ? <DashboardLayout /> : <Navigate to="/" replace />
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/distance" element={<Distance />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/tech-summary" element={<TechSummary />} />
        <Route path="/asset-transactions" element={<NewAsset />} />
        <Route path="/user-status" element={<UserActive />} />
        <Route path="/class-status" element={<ClassStatus />} />
      </Route>

      {/* CATCH ALL */}
      <Route
        path="*"
        element={<Navigate to={loggedIn ? "/dashboard" : "/"} />}
      />
    </Routes>
  );
}
