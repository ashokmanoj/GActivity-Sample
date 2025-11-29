import React, { useState } from "react";
import { tasks } from "../../data/tasks";
import TaskCard from "./TaskCard";
import ImageModal from "./ImageModal";

const PER_PAGE = 10;

export default function TaskList() {
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const totalPages = Math.ceil(tasks.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const currentTasks = tasks.slice(start, start + PER_PAGE);

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Maintenance Tasks</h2>
        <span className="text-gray-500 text-sm">
          Showing {start + 1}-{Math.min(start + PER_PAGE, tasks.length)} of {tasks.length}
        </span>
      </div>

      {/* Cards Grid - keeping your style */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {currentTasks.map((task) => (
          <TaskCard key={task.id} task={task} onImageClick={setSelectedImage} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4">
        <button
          className="px-4 py-2 border rounded disabled:opacity-40"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>

        <span className="font-semibold">
          Page {page} of {totalPages}
        </span>

        <button
          className="px-4 py-2 border rounded disabled:opacity-40"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>

      {/* Image Popup */}
      <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}
