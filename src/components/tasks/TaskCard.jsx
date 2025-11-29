import React from "react";

export default function TaskCard({ task, onImageClick }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow border w-full">

      {/* Header (same style as your original) */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 border rounded-full flex items-center justify-center font-bold text-lg">
            {task.id}
          </div>
          <div>
            <h1 className="text-xl font-bold">{task.name}</h1>
            <p className="text-gray-500 text-sm">{task.institution}</p>
          </div>
        </div>

        <div className="text-right">
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
            {task.status}
          </span>
          <p className="text-xs text-gray-500 mt-1">Submitted</p>
          <p className="text-sm font-semibold">{task.submittedAt}</p>
        </div>
      </div>

      <hr className="my-4" />

      {/* Compact Data Grid — still your style */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(task.details)
          .slice(0, 4) // take only 4 items for list card
          .map(([label, value]) => (
            <div key={label}>
              <p className="text-gray-500 text-sm">{label}</p>
              <p className="font-semibold">{value}</p>
            </div>
          ))}
      </div>

      {/* Images (same style) */}
      <h2 className="font-semibold mt-6 mb-2">Images</h2>
      <div className="grid grid-cols-2 gap-2">
        {task.images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-full h-20 object-cover rounded border cursor-pointer hover:opacity-75 transition"
            onClick={() => onImageClick(img)}
          />
        ))}
      </div>

      {/* Map Link */}
      <a
        href={task.mapUrl}
        target="_blank"
        className="text-blue-600 text-sm block mt-4"
      >
        {task.distance} M Map
      </a>
    </div>
  );
}
