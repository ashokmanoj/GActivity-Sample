import React from "react";
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

import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <Routes>

      {/* LOGIN (Public) */}
      <Route path="/" element={<Login />} />

      {/* PROTECTED SECTION */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
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

      {/* HANDLE UNKNOWN ROUTES */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />

    </Routes>
  );
}
