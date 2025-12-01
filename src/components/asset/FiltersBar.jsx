// src/components/asset/FiltersBar.jsx

import React from "react";

export default function FiltersBar({
  options,
  filters,
  setFilters,
  onSearch,
}) {
  const handleChange = (field) => (e) => {
    setFilters((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="bg-white rounded-xl shadow border p-4 flex flex-wrap gap-3 items-center">

      {/* Project */}
      <select
        className="border rounded-lg px-3 py-2 min-w-[180px]"
        value={filters.project}
        onChange={handleChange("project")}
      >
        <option value="">All Project</option>
        {options.projects.map((p) => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>

      {/* RM */}
      <select
        className="border rounded-lg px-3 py-2 min-w-[160px]"
        value={filters.rm}
        onChange={handleChange("rm")}
      >
        <option value="">All RM</option>
        {options.rms.map((p) => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>

      {/* Bee Friend */}
      <select
        className="border rounded-lg px-3 py-2 min-w-[160px]"
        value={filters.beeFriend}
        onChange={handleChange("beeFriend")}
      >
        <option value="">Bee friend</option>
        {options.beeFriends.map((p) => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>

      {/* Executive */}
      <select
        className="border rounded-lg px-3 py-2 min-w-[190px]"
        value={filters.executive}
        onChange={handleChange("executive")}
      >
        <option value="">All Executive</option>
        {options.executives.map((p) => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>

      {/* Material */}
      <select
        className="border rounded-lg px-3 py-2 min-w-[160px]"
        value={filters.material}
        onChange={handleChange("material")}
      >
        <option value="">All Material</option>
        {options.materials.map((p) => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>

      {/* Location */}
      <select
        className="border rounded-lg px-3 py-2 min-w-[160px]"
        value={filters.location}
        onChange={handleChange("location")}
      >
        <option value="">All Location</option>
        {options.locations.map((p) => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>

      {/* Status */}
      <select
        className="border rounded-lg px-3 py-2 min-w-[160px]"
        value={filters.status}
        onChange={handleChange("status")}
      >
        <option value="">All Status</option>
        {options.statuses.map((p) => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>

      {/* Ticket No */}
      <input
        type="text"
        className="border rounded-lg px-3 py-2 min-w-[180px]"
        placeholder="Ticket No"
        value={filters.ticketNo}
        onChange={handleChange("ticketNo")}
      />

      {/* Date range */}
      <div className="flex items-center gap-2 ml-auto">
        <input
          type="date"
          className="border rounded-lg px-3 py-2"
          value={filters.fromDate}
          onChange={handleChange("fromDate")}
        />
        <span className="text-gray-500 text-sm">to</span>
        <input
          type="date"
          className="border rounded-lg px-3 py-2"
          value={filters.toDate}
          onChange={handleChange("toDate")}
        />
        <button
          onClick={onSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Search
        </button>
      </div>
    </div>
  );
}
