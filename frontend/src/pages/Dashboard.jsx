import React, { useEffect } from "react";
import { usePageTitle } from "../context/PageTitleContext";
import {
  FiUsers,
  FiList,
  FiMapPin,
  FiTrendingUp,
  FiArrowRight,
  FiHardDrive,
  FiHome,
  FiCast,
  FiCrosshair,
  FiCheck,
} from "react-icons/fi";

export default function Dashboard() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle("Dashboard");
  }, []);

  function TicketsTable() {
    const tickets = [
      {
        category: "Technical",
        short: "📡",
        H: 1,
        M: 2,
        L: 4,
        h12: 1,
        h12plus: 2,
        h36plus: 4,
        closed: 4,
      },
      {
        category: "Connectivity",
        short: "🔗 ",
        H: 1,
        M: 0,
        L: 3,
        h12: 1,
        h12plus: 0,
        h36plus: 3,
        closed: 3,
      },
      {
        category: "School",
        short: "🏫",
        H: 0,
        M: 2,
        L: 1,
        h12: 0,
        h12plus: 2,
        h36plus: 1,
        closed: 1,
      },
    ];

    return (
      <div
        className="
        bg-white dark:bg-gray-800 
        border border-gray-200 dark:border-gray-700 
        rounded-md shadow-sm 
        p-4 mt-6
      "
      >
        <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
          Tickets - Open
        </h2>

        {/* HEADER */}
        <div className="grid grid-cols-8 text-xs text-gray-500 dark:text-gray-400 font-medium mb-2">
          <div></div>
          <div className="text-center text-red-500">H</div>
          <div className="text-center text-yellow-500">M</div>
          <div className="text-center text-blue-500">L</div>
          <div className="text-center">12h -</div>
          <div className="text-center">12h+</div>
          <div className="text-center">36h+</div>
          <div className="text-center font-semibold">End</div>
        </div>

        {/* ROWS */}
        {tickets.map((t, i) => (
          <div
            key={i}
            className="grid grid-cols-8 py-2 border-t border-gray-200 dark:border-gray-700 text-sm"
          >
            {/* CATEGORY NAME — Full on desktop, short on mobile */}
            <div className="font-medium text-gray-700 dark:text-gray-200">
              <span className="hidden sm:inline">{t.category}</span>
              <span className="inline sm:hidden">{t.short}</span>
            </div>

            <div className="text-center">{t.H}</div>
            <div className="text-center">{t.M}</div>
            <div className="text-center">{t.L}</div>
            <div className="text-center">{t.h12}</div>
            <div className="text-center">{t.h12plus}</div>
            <div className="text-center">{t.h36plus}</div>

            <div className="text-center font-semibold">{t.closed}</div>
          </div>
        ))}
      </div>
    );
  }

  function MetricCard({ title, value, icon, iconColor = "text-gray-400" }) {
    return (
      <div
        className="
      bg-white dark:bg-gray-800 
      rounded-md 
      border border-gray-200 dark:border-gray-700 
      px-3 py-3 
      shadow-sm
    "
      >
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">{title}</p>
          <span className={`text-lg ${iconColor}`}>{icon}</span>
        </div>

        <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
          {value}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 text-gray-900 px-4 sm:px-4 md:px-6 lg:px-0">
      {/* ---------- TOP CARDS ---------- */}
      {/* <div className="space-y-6 px-4 sm:px-6"> */}
      {/* KPI SECTION */}
      <section
        className="
        grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 
        gap-3 sm:gap-4
      "
      >
        <MetricCard
          title="Attendance"
          value="40/37"
          icon="✔"
          iconColor="text-green-500"
        />
        <MetricCard title="No of visits" value="6" icon="📍" />
        <MetricCard title="No of task activities" value="8" icon="🧾" />
        <MetricCard title="Start visit time" value="10:25 AM" icon="🕒" />
        <MetricCard title="End visit time" value="7:15 PM" icon="🕒" />
        <MetricCard title="Photos uploaded" value="28" icon="🖼️" />
        <MetricCard title="Distance traveled" value="25 KM" icon="🚶‍♂️" />
        <MetricCard title="Score & remarks" value="4.5" icon="💬" />
      </section>

      {/* TICKETS TABLE */}
      <div className="overflow-x-auto">
        <TicketsTable />
      </div>
      {/* </div> */}

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
        <div
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white ${colorMap[color]}`}
        >
          {icon}
        </div>

        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            {value}
          </h2>
          <p className="text-xs text-green-600 font-semibold">
            {trend} this week
          </p>
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
      <h2 className="text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
        Recent Activity
      </h2>

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
      <h2 className="text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
        Quick Links
      </h2>

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
            <span className="text-gray-800 text-sm sm:text-base">
              {link.label}
            </span>
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
    { id: 1866, name: "Sub-Meter Reading", status: "In Progress", short: "p" },
  ];

  const statusStyles = {
    Completed: "bg-green-500 text-white",
    Pending: "bg-red-500 text-white",
    "In Progress": "bg-yellow-500 text-white",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 sm:p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
        Recent Tasks
      </h2>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="
              flex items-center justify-between 
              px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg
            "
          >
            <span className="text-gray-800 text-sm sm:text-base">
              {task.name}
            </span>

            <span
              className={`px-2 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                statusStyles[task.status]
              }`}
            >
              {task.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
