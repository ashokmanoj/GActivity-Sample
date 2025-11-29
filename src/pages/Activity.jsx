import React, { useEffect, useState } from "react";
import ActivityCard from "../components/card/ActivityCard";

export default function ActivityPage() {
  const [task, setTask] = useState(null);
  const [activityLogs, setActivityLogs] = useState([]);

  // Fetch dummy JSON
  useEffect(() => {
    fetch("/activity.json")
      .then((r) => r.json())
      .then((data) => {
        setTask(data.task);
        setActivityLogs(data.logs);
      });
  }, []);

  if (!task)
    return <p className="text-center mt-10 text-gray-500">Loading activity...</p>;

  return (
    <div className="p-4 space-y-6">

      {/* ---------------- FILTER SECTION (always visible) ---------------- */}
      <div className="bg-white rounded-xl shadow border p-4 grid grid-cols-2 md:grid-cols-6 gap-3">

        <select className="border rounded-lg px-3 py-2 w-full">
          <option>All Project</option>
        </select>

        <select className="border rounded-lg px-3 py-2 w-full">
          <option>All RM</option>
        </select>

        <select className="border rounded-lg px-3 py-2 w-full">
          <option>Designation</option>
        </select>

        <select className="border rounded-lg px-3 py-2 w-full">
          <option>Technical Executive</option>
        </select>

        <input
          type="text"
          placeholder="Task Activity Date"
          className="border rounded-lg px-3 py-2"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Search
        </button>
      </div>

      {/* ---------------- ACTIVITY CARD UI ---------------- */}
      <ActivityCard task={task} />

    </div>
  );
}
