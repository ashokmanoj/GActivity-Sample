// src/context/ToastContext.jsx
import { createContext, useState, useCallback } from "react";

export const ToastContext = createContext(null);

export function ToastProvider({ children, position = "center" }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (type, message) => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, type, message }]);
      setTimeout(() => removeToast(id), 3000);
    },
    [removeToast]
  );

  const value = {
    success: (msg) => showToast("success", msg),
    error: (msg) => showToast("error", msg),
    warning: (msg) => showToast("warning", msg),
    info: (msg) => showToast("info", msg),
  };

  return (
    <ToastContext.Provider value={value}>
      {children}

      <div className={`fixed z-[9999] pointer-events-none ${toastPosition(position)}`}>
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} onClose={() => removeToast(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function toastPosition(pos) {
  return {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    center: "top-4 left-1/2 -translate-x-1/2 flex flex-col items-center",
  }[pos];
}

function ToastItem({ toast, onClose }) {
  const colors = {
    success: "bg-green-600 border-green-700",
    error: "bg-red-600 border-red-700",
    warning: "bg-yellow-500 border-yellow-600 text-black",
    info: "bg-blue-600 border-blue-700",
  };

  return (
    <div
      className={`w-[300px] px-4 py-3 mb-3 rounded-lg text-white shadow-lg border animate-toast-enter 
      flex items-center justify-between pointer-events-auto ${colors[toast.type]}`}
    >
      <span>{toast.message}</span>
      <button onClick={onClose}>✕</button>
    </div>
  );
}
