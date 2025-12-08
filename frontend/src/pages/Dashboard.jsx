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
    <div className="space-y-6 transition-colors duration-300">

      {/* ---------- TOP STATS CARDS ---------- */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          icon={<FiList size={22} />}
          title="Total Tasks"
          value="1,248"
          trend="+12%"
          color="blue"
        />

        <DashboardCard
          icon={<FiUsers size={22} />}
          title="Active Executives"
          value="562"
          trend="+8%"
          color="green"
        />

        <DashboardCard
          icon={<FiMapPin size={22} />}
          title="Visited Locations"
          value="8,431"
          trend="+15%"
          color="purple"
        />

        <DashboardCard
          icon={<FiTrendingUp size={22} />}
          title="Completed Today"
          value="142"
          trend="+5%"
          color="orange"
        />
      </section>

      {/* ---------- MAIN CONTENT GRID ---------- */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT 2/3 */}
        <div className="lg:col-span-2 space-y-6">
          <RecentActivity />
          <QuickLinks />
        </div>

        {/* RIGHT 1/3 */}
        <div className="space-y-6">
          <RecentTasks />
        </div>
      </section>
    </div>
  );
}

/* ============================================================
   DASHBOARD CARD (Dark / Light Ready)
   ============================================================ */
function DashboardCard({ icon, title, value, trend, color }) {
  const bgColor = {
    blue: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200",
    green: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200",
    purple:
      "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200",
    orange:
      "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-200",
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg border dark:border-gray-700 transition-all duration-200">
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center ${bgColor[color]}`}
        >
          {icon}
        </div>

        <div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{title}</p>
          <h2 className="text-xl font-bold dark:text-white">{value}</h2>
          <p className="text-xs text-green-600 dark:text-green-400 font-semibold mt-1">
            {trend} this week
          </p>
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
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow border dark:border-gray-700 p-6 transition">
      <h2 className="text-lg font-semibold dark:text-white mb-4">
        Recent Activity
      </h2>

      <ul className="space-y-4">
        {[
          "Executive John completed Task #1892",
          "GPS data received from Institution 202",
          "New Asset Transaction added by Ramesh",
          "Distance summary updated for Team Zone 4",
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-gray-700 dark:text-gray-300 text-sm">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ============================================================
   QUICK LINKS (Dark Mode Ready)
   ============================================================ */
function QuickLinks() {
  const links = [
    { label: "Task List", path: "/tasks" },
    { label: "Activity Reports", path: "/activity" },
    { label: "Distance Summary", path: "/distance" },
    { label: "Asset Transactions", path: "/asset-transactions" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow border dark:border-gray-700 p-6">
      <h2 className="text-lg font-semibold dark:text-white mb-4">
        Quick Links
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className="group flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border dark:border-gray-600 rounded-lg transition shadow-sm"
          >
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              {link.label}
            </span>
            <FiArrowRight className="text-gray-500 dark:text-gray-300 group-hover:text-gray-800" />
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

  const statusColor = {
    Completed:
      "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
    Pending: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
    "In Progress":
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow border dark:border-gray-700 p-6 transition">
      <h2 className="text-lg font-semibold dark:text-white mb-4">
        Recent Tasks
      </h2>

      <div className="space-y-3">
        {tasks.map((t) => (
          <div
            key={t.id}
            className="flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-gray-700 border dark:border-gray-600 rounded-lg"
          >
            <span className="font-medium text-gray-700 dark:text-gray-200">
              {t.name}
            </span>

            <span
              className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColor[t.status]}`}
            >
              {t.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
