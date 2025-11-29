import React, { useState } from "react";

export default function TaskCard({ task }) {
  const [popupImage, setPopupImage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = (img) => {
    setPopupImage(img);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupImage("");
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-white rounded-xl shadow border p-6">

        {/* LEFT SECTION (same as your old design) */}
        <div className="lg:col-span-2">

          {/* Header */}
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
              <span
                className={`px-3 py-1 rounded-full text-sm border 
                ${
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

          {/* COMMENT */}
          {task.comment && (
            <p className="mt-4 text-sm text-gray-700">
              <span className="font-semibold">Comment:</span> {task.comment}
            </p>
          )}
        </div>

        {/* RIGHT SECTION (AUDIO + IMAGES + MAP) */}
        <div>

          {/* Audio */}
          <h2 className="font-semibold mb-2">Audio</h2>
          {task.audio ? (
            <audio controls src={task.audio} className="w-full mb-4" />
          ) : (
            <p className="text-gray-500 text-sm mb-4">No audio</p>
          )}

          {/* IMAGES */}
          <h2 className="font-semibold mb-2">Images</h2>
          <div className="grid grid-cols-2 gap-2">
            {task.images?.slice(0, 2).map((img, i) => (
              <img
                key={i}
                onClick={() => openPopup(img)}
                src={img}
                className="w-full h-28 object-cover rounded border cursor-pointer hover:scale-105 transition"
                alt=""
              />
            ))}
          </div>

          {/* MAP LINK */}
          <a
            href={task.map}
            target="_blank"
            className="text-blue-600 text-sm block mt-4"
          >
            {task.distance} M Map
          </a>
        </div>
      </div>

      {/* POPUP IMAGE VIEWER */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <img
            src={popupImage}
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg"
            alt="Preview"
          />
        </div>
      )}
    </>
  );
}
