import React, { useState } from "react";
import {
  FiZoomIn,
  FiZoomOut,
  FiRotateCw,
  FiChevronLeft,
  FiChevronRight,
  FiX,
} from "react-icons/fi";

export default function ActivityCard({ task }) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupIndex, setPopupIndex] = useState(0);

  const [zoom, setZoom] = useState(1);
  const [rotate, setRotate] = useState(0);

  const openPopup = (i) => {
    setPopupIndex(i);
    setZoom(1);
    setRotate(0);
    setShowPopup(true);
  };

  const closePopup = () => setShowPopup(false);

  const nextImage = () => {
    setPopupIndex((popupIndex + 1) % task.images.length);
    setZoom(1);
    setRotate(0);
  };

  const prevImage = () => {
    setPopupIndex((popupIndex - 1 + task.images.length) % task.images.length);
    setZoom(1);
    setRotate(0);
  };

  return (
    <>
      {/* ---------------- CARD UI ---------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-white rounded-xl shadow border p-6">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border rounded-full flex items-center justify-center font-bold">
                {task.id}
              </div>
              <div>
                <h1 className="text-xl font-bold">{task.name}</h1>
                <p className="text-gray-500">{task.institution}</p>
              </div>
            </div>

            <div className="text-right">
              <span className="bg-green-100 text-green-700 border border-green-300 px-3 py-1 rounded-full text-sm">
                {task.status}
              </span>

              <p className="text-xs text-gray-400 mt-2">Task Submitted DOC</p>
              <p className="font-semibold">{task.submittedAt}</p>
            </div>
          </div>

          <hr className="my-4" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(task.details).map(([label, value]) => (
              <div key={label}>
                <p className="text-gray-500 text-xs">{label}</p>
                <p className="font-semibold">{value}</p>
              </div>
            ))}
          </div>

          {task.comment && (
            <p className="mt-4 text-sm">
              <strong>Comment: </strong> {task.comment}
            </p>
          )}
        </div>

        {/* RIGHT SIDE: AUDIO + IMAGES */}
        <div>
          <div className="flex justify-between mb-2">
            <h2 className="font-semibold">Audio</h2>
            <a href={task.map} className="text-blue-600 text-sm">
              Map
            </a>
          </div>

          {task.audio ? (
            <audio controls className="w-full" src={task.audio}></audio>
          ) : (
            <p className="text-gray-500 text-sm">No audio</p>
          )}

          <h2 className="font-semibold mt-4">Images</h2>

          <div className="grid grid-cols-2 gap-2 mt-2">
            {task.images.slice(0, 2).map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => openPopup(i)}
                className="w-full h-32 object-cover rounded border cursor-pointer hover:scale-105 transition"
              />
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- POPUP VIEWER ---------------- */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          {/* CLOSE BUTTON FIXED */}
          <button
            onClick={closePopup}
            className="fixed top-6 right-6 bg-white/90 backdrop-blur p-3 rounded-full shadow-xl hover:bg-white transition z-[999]"
          >
            <FiX size={22} />
          </button>

          {/* LEFT ARROW (SCREEN EDGE) */}
          <button
            onClick={prevImage}
            className="fixed left-6 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-xl hover:bg-white transition z-[999]"
          >
            <FiChevronLeft size={22} />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextImage}
            className="fixed right-6 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-xl hover:bg-white transition z-[999]"
          >
            <FiChevronRight size={22} />
          </button>

          {/* IMAGE AREA */}
          <div className="max-w-[95%] max-h-[90%] flex flex-col items-center">
            <img
              src={task.images[popupIndex]}
              style={{ transform: `scale(${zoom}) rotate(${rotate}deg)` }}
              className="max-w-[100%] max-h-[80vh] rounded-xl shadow-lg transition-transform duration-200"
            />

            {/* CONTROL BAR */}
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

              <button
                onClick={() => {
                  setZoom(1);
                  setRotate(0);
                }}
              >
                <FiX size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
