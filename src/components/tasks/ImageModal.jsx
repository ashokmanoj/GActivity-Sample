import React from "react";

export default function ImageModal({ src, onClose }) {
  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-40 bg-black/60 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl overflow-hidden shadow-xl max-w-3xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt="Preview" className="max-h-[90vh] object-contain" />
        <div className="p-2 text-right">
          <button
            className="px-3 py-1 text-xs rounded bg-gray-800 text-white"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
