import React from "react";

export default function RouteSidebar({ segments }) {
  return (
    <aside className="w-64 bg-gray-50 border-l p-4 overflow-y-auto">
      <h3 className="font-bold text-lg mb-3">Route Segments</h3>
      <ul className="space-y-3">
        {segments.map((seg, i) => (
          <li key={i} className="border rounded p-3 bg-white shadow-sm">
            <p className="font-semibold text-sm">{seg.name}</p>
            <p className="text-xs text-gray-600">{seg.description}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
