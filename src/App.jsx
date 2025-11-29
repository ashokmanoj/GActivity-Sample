import React, { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import TaskList from "./components/tasks/TaskList";

export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="h-screen flex bg-gray-100">

      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto p-6">
          <TaskList />
        </main>
      </div>
    </div>
  );
}
