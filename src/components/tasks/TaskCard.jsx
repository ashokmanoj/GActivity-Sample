import React, { useState } from "react";
import {
  FiX,
  FiZoomIn,
  FiZoomOut,
  FiRotateCw,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

export default function TaskCard({ task }) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupIndex, setPopupIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [rotate, setRotate] = useState(0);

  const openPopup = (index) => {
    setPopupIndex(index);
    setZoom(1);
    setRotate(0);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setZoom(1);
    setRotate(0);
  };

  const nextImage = () => {
    setPopupIndex((prev) => (prev + 1) % task.images.length);
    setZoom(1);
    setRotate(0);
  };

  const prevImage = () => {
    setPopupIndex((prev) =>
      prev === 0 ? task.images.length - 1 : prev - 1
    );
    setZoom(1);
    setRotate(0);
  };

  return (
    <>
      {/* ==== TASK CARD ==== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-white rounded-xl shadow border p-6">
        
        {/* LEFT SECTION */}
        <div className="lg:col-span-2">
          <div className="flex justify-between">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border rounded-full flex items-center justify-center font-bold">
                {task.id}
              </div>

              <div>
                <h1 className="text-xl font-bold">{task.name}</h1>
                <p className="text-gray-500 text-sm">{task.institution}</p>
              </div>
            </div>

            <div className="text-right">
              <span
                className={`px-3 py-1 rounded-full text-sm border ${
                  task.status === "Completed"
                    ? "text-green-700 border-green-400 bg-green-100"
                    : "text-orange-700 border-orange-400 bg-orange-100"
                }`}
              >
                {task.status}
              </span>
              <p className="text-xs text-gray-500 mt-1">Task Submitted DOC</p>
              <p className="text-sm font-semibold">{task.submittedAt}</p>
            </div>
          </div>

          <hr className="my-4" />

          {/* DETAILS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(task.details).map(([label, value]) => (
              <div key={label}>
                <p className="text-gray-500 text-xs">{label}</p>
                <p className="font-semibold">{value}</p>
              </div>
            ))}
          </div>

          {task.comment && (
            <p className="mt-4 text-sm text-gray-700">
              <span className="font-semibold">Comment: </span>
              {task.comment}
            </p>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h2 className="font-semibold mb-2">Audio</h2>
          {task.audio ? (
            <audio controls src={task.audio} className="w-full mb-4" />
          ) : (
            <p className="text-gray-500">No audio</p>
          )}

          <h2 className="font-semibold mb-2">Images</h2>
          <div className="flex gap-3">
            {task.images.slice(0, 2).map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => openPopup(i)}
                className="w-[260px] h-[150px] rounded-xl border shadow-sm cursor-pointer object-cover hover:scale-[1.03] transition"
              />
            ))}
          </div>

          <a
            href={task.map}
            target="_blank"
            className="text-blue-600 text-sm block mt-4"
          >
            {task.distance} M Map
          </a>
        </div>
      </div>

      {/* ==== BEAUTIFUL POPUP VIEWER ==== */}
{showPopup && (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">

    {/* Close Button — FIXED & ALWAYS VISIBLE */}
    <button
      onClick={closePopup}
      className="fixed top-6 right-6 bg-white/90 backdrop-blur p-3 rounded-full shadow-xl hover:bg-white transition z-[999]"
    >
      <FiX size={22} />
    </button>

    {/* LEFT ARROW — MOVED TO SCREEN EDGE */}
    <button
      onClick={prevImage}
      className="fixed left-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-3 rounded-full shadow-xl hover:bg-white transition z-[999]"
    >
      <FiChevronLeft size={22} />
    </button>

    {/* RIGHT ARROW — MOVED TO SCREEN EDGE */}
    <button
      onClick={nextImage}
      className="fixed right-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-3 rounded-full shadow-xl hover:bg-white transition z-[999]"
    >
      <FiChevronRight size={22} />
    </button>

    {/* MAIN ZOOM AREA */}
    <div className="max-w-[95%] max-h-[90%] flex flex-col items-center">

      {/* IMAGE */}
      <img
        src={task.images[popupIndex]}
        style={{ transform: `scale(${zoom}) rotate(${rotate}deg)` }}
        className="max-w-[100%] max-h-[80vh] rounded-xl shadow-lg transition-transform duration-200"
      />

      {/* CONTROL BAR — MOVED DOWN & CLEAN */}
      <div className="flex gap-5 mt-6 bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-lg z-[900]">
        <button onClick={() => setZoom(zoom + 0.2)}>
          <FiZoomIn size={22} />
        </button>

        <button onClick={() => setZoom(Math.max(0.4, zoom - 0.2))}>
          <FiZoomOut size={22} />
        </button>

        <button onClick={() => setRotate(rotate + 90)}>
          <FiRotateCw size={22} />
        </button>

        <button onClick={() => { setZoom(1); setRotate(0); }}>
          <FiX size={16} />
        </button>
      </div>

    </div>
  </div>
)}

    </>
  );
}
