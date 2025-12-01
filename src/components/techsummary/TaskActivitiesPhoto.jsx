import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function TaskActivitiesPhoto({ activities }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!activities || activities.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center text-gray-500">
        No activity photos available.
      </div>
    );
  }

  const activity = activities[activeIndex];

  const goNext = () => {
    if (activeIndex < activities.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const goPrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="h-full flex flex-col p-3 bg-white rounded-xl shadow border">

      {/* HEADER */}
      <div className="text-sm font-semibold mb-2 border-b pb-2 text-gray-700 flex justify-between">
        <span>Task Activities Photo</span>
        <span className="text-xs text-gray-500">
          {activeIndex + 1} / {activities.length}
        </span>
      </div>

      {/* IMAGE VIEWER */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">

        {/* LEFT ARROW */}
        <button
          onClick={goPrev}
          disabled={activeIndex === 0}
          className="absolute left-2 top-1/2 -translate-y-1/2 
          bg-white/90 p-2 rounded-full shadow disabled:opacity-40"
        >
          <FiChevronLeft size={22} />
        </button>

        {/* IMAGE */}
        <img
          src={activity.photo}
          alt="activity"
          className="max-h-[60vh] rounded-lg shadow object-contain"
        />

        {/* RIGHT ARROW */}
        <button
          onClick={goNext}
          disabled={activeIndex === activities.length - 1}
          className="absolute right-2 top-1/2 -translate-y-1/2 
          bg-white/90 p-2 rounded-full shadow disabled:opacity-40"
        >
          <FiChevronRight size={22} />
        </button>
      </div>

      {/* DETAILS */}
      <div className="mt-4 text-xs space-y-1">
        <p><strong>Activity Date:</strong> {activity.date}</p>
        <p><strong>Executive:</strong> {activity.executive}</p>
        <p><strong>Outcome:</strong> {activity.outcome}</p>
        <p><strong>Status:</strong> {activity.status}</p>
        <p><strong>Achievement:</strong> {activity.achievement}</p>
      </div>

      {/* DOT INDICATORS */}
      <div className="flex justify-center mt-3 gap-1">
        {activities.map((_, i) => (
          <div
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              i === activeIndex ? "bg-blue-600" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
