import React, { useEffect } from "react";
import { usePageTitle } from "../context/PageTitleContext";
import {
  FiUsers,
  FiList,
  FiMapPin,
  FiTrendingUp,
  FiArrowRight,
} from "react-icons/fi";

export default function Dashboard() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle("Dashboard");
  }, []);

  return (
    <div className="space-y-6 transition-colors duration-300 
        text-slate-900 dark:text-slate-100">

      {/* TOP CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard icon={<FiList size={22} />} title="Total Tasks" value="1,248" trend="+12%" color="blue" />
        <DashboardCard icon={<FiUsers size={22} />} title="Active Executives" value="562" trend="+8%" color="green" />
        <DashboardCard icon={<FiMapPin size={22} />} title="Visited Locations" value="8,431" trend="+15%" color="purple" />
        <DashboardCard icon={<FiTrendingUp size={22} />} title="Completed Today" value="142" trend="+5%" color="orange" />
      </section>

      {/* MAIN GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <RecentActivity />
          <QuickLinks />
        </div>
        <div className="space-y-6">
          <RecentTasks />
        </div>
      </section>

    </div>
  );
}

/* ============================================================
   DASHBOARD CARD (Light + Dark Mode Perfect)
============================================================ */
function DashboardCard({ icon, title, value, trend, color }) {
  const colorMap = {
    blue: "bg-blue-600",
    green: "bg-green-600",
    purple: "bg-purple-600",
    orange: "bg-orange-600",
  };

  return (
    <div
      className="
        bg-white dark:bg-slate-800 
        border border-slate-200 dark:border-slate-700 
        p-5 rounded-xl shadow-sm hover:shadow-md 
        transition-colors duration-300"
    >
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${colorMap[color]}`}>
          {icon}
        </div>

        <div>
          <p className="text-slate-600 dark:text-slate-300 text-sm">{title}</p>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">{value}</h2>
          <p className="text-xs text-green-600 dark:text-green-400 font-semibold">{trend} this week</p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   RECENT ACTIVITY
============================================================ */
function RecentActivity() {
  return (
    <div className="
      bg-white dark:bg-slate-800 
      border border-slate-200 dark:border-slate-700 
      rounded-xl shadow-sm p-6 transition">
      
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Recent Activity</h2>

      <ul className="space-y-4">
        {[
          "Executive John completed Task #1892",
          "GPS data received from Institution 202",
          "New Asset Transaction added by Ramesh",
          "Distance summary updated for Team Zone 4"
        ].map((txt, i) => (
          <li key={i} className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
            <span className="text-slate-700 dark:text-slate-300">{txt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ============================================================
   QUICK LINKS
============================================================ */
function QuickLinks() {
  const links = [
    { label: "Task List", path: "/tasks" },
    { label: "Activity Reports", path: "/activity" },
    { label: "Distance Summary", path: "/distance" },
    { label: "Asset Transactions", path: "/asset-transactions" },
  ];

  return (
    <div className="
      bg-white dark:bg-slate-800 
      border border-slate-200 dark:border-slate-700 
      rounded-xl shadow-sm p-6 transition">

      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Quick Links</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className="
              flex items-center justify-between 
              px-4 py-3 rounded-lg border 
              bg-slate-100 hover:bg-slate-200 
              dark:bg-slate-700 dark:hover:bg-slate-600
              border-slate-200 dark:border-slate-600
              transition"
          >
            <span className="text-slate-800 dark:text-slate-200">{link.label}</span>
            <FiArrowRight className="text-slate-500 dark:text-slate-300" />
          </a>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   RECENT TASKS
============================================================ */
function RecentTasks() {
  const tasks = [
    { id: 2012, name: "Meter Checking", status: "Completed" },
    { id: 1995, name: "Visit Report Upload", status: "Pending" },
    { id: 1874, name: "Documentation", status: "Completed" },
    { id: 1866, name: "Sub-Meter Reading", status: "In Progress" },
  ];

  const statusStyles = {
    Completed: "bg-green-600 text-white",
    Pending: "bg-red-600 text-white",
    "In Progress": "bg-yellow-500 text-white",
  };

  return (
    <div className="
      bg-white dark:bg-slate-800 
      border border-slate-200 dark:border-slate-700 
      rounded-xl shadow-sm p-6 transition">

      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Recent Tasks</h2>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="
              flex items-center justify-between 
              px-4 py-2 rounded-lg border 
              bg-slate-100 dark:bg-slate-700 
              border-slate-200 dark:border-slate-600"
          >
            <span className="text-slate-800 dark:text-slate-200">{task.name}</span>

            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusStyles[task.status]}`}>
              {task.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
