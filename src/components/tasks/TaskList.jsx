import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);

  const perPage = 5; // show 5 per page

  useEffect(() => {
    fetch("/tasklist.json")
      .then((res) => res.json())
      .then((data) => setTasks(Array.isArray(data) ? data : []))
      .catch(() => setTasks([]));
  }, []);

  const start = (page - 1) * perPage;
  const pageData = tasks.slice(start, start + perPage);

  return (
    <div className="space-y-6">

      {/* Cards */}
      {pageData.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: Math.ceil(tasks.length / perPage) }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 rounded-md ${
              page === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

    </div>
  );
}
