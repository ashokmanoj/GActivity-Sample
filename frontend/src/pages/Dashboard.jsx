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
    <div className="space-y-6 text-gray-900 px-3 sm:px-4 md:px-6 lg:px-0">

      {/* ---------- TOP CARDS ---------- */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pr-6 sm:pr-0">
        <DashboardCard icon={<FiList size={22} />} title="Total Tasks" value="1,248" trend="+12%" color="blue" />
        <DashboardCard icon={<FiUsers size={22} />} title="Active Executives" value="562" trend="+8%" color="green" />
        <DashboardCard icon={<FiMapPin size={22} />} title="Visited Locations" value="8,431" trend="+15%" color="purple" />
        <DashboardCard icon={<FiTrendingUp size={22} />} title="Completed Today" value="142" trend="+5%" color="orange" />
      </section>

      {/* ---------- MAIN GRID ---------- */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          <RecentActivity />
          <QuickLinks />
        </div>

        <div className="space-y-4 sm:space-y-6">
          <RecentTasks />
        </div>
      </section>

    </div>
  );
}

/* ============================================================
   DASHBOARD CARD — Fully Responsive
============================================================ */
function DashboardCard({ icon, title, value, trend, color }) {
  const colorMap = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
  };

  return (
    <div className="bg-white border border-gray-200 p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-4">

        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white ${colorMap[color]}`}>
          {icon}
        </div>

        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">{value}</h2>
          <p className="text-xs text-green-600 font-semibold">{trend} this week</p>
        </div>

      </div>
    </div>
  );
}

/* ============================================================
   RECENT ACTIVITY — Mobile Responsive
============================================================ */
function RecentActivity() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 sm:p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Recent Activity</h2>

      <ul className="space-y-3 sm:space-y-4">
        {[
          "Executive John completed Task #1892",
          "GPS data received from Institution 202",
          "New Asset Transaction added by Ramesh",
          "Distance summary updated for Team Zone 4",
        ].map((text, i) => (
          <li key={i} className="flex items-center gap-2 sm:gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="text-gray-700 text-sm sm:text-base">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ============================================================
   QUICK LINKS — Fully Responsive Grid
============================================================ */
function QuickLinks() {
  const links = [
    { label: "Task List", path: "/tasks" },
    { label: "Activity Reports", path: "/activity" },
    { label: "Distance Summary", path: "/distance" },
    { label: "Asset Transactions", path: "/asset-transactions" },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 sm:p-6">

      <h2 className="text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Quick Links</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className="
              flex items-center justify-between 
              px-4 py-3 rounded-lg border bg-gray-100 hover:bg-gray-200 
              border-gray-300 transition
            "
          >
            <span className="text-gray-800 text-sm sm:text-base">{link.label}</span>
            <FiArrowRight className="text-gray-500" />
          </a>
        ))}
      </div>

    </div>
  );
}

/* ============================================================
   RECENT TASKS — Mobile Ready
============================================================ */
function RecentTasks() {
  const tasks = [
    { id: 2012, name: "Meter Checking", status: "Completed" },
    { id: 1995, name: "Visit Report Upload", status: "Pending" },
    { id: 1874, name: "Documentation", status: "Completed" },
    { id: 1866, name: "Sub-Meter Reading", status: "In Progress" },
  ];

  const statusStyles = {
    Completed: "bg-green-500 text-white",
    Pending: "bg-red-500 text-white",
    "In Progress": "bg-yellow-500 text-white",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 sm:p-6">

      <h2 className="text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Recent Tasks</h2>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="
              flex items-center justify-between 
              px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg
            "
          >
            <span className="text-gray-800 text-sm sm:text-base">{task.name}</span>

            <span className={`px-2 py-1 rounded-full text-xs sm:text-sm font-semibold ${statusStyles[task.status]}`}>
              {task.status}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}
