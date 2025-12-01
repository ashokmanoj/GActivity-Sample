// src/pages/AssetTransaction.jsx

import React, { useMemo, useState } from "react";
import FiltersBar from "../components/asset/FiltersBar";
import SummaryCards from "../components/asset/SummaryCards";
import AssetTable from "../components/asset/AssetTable";
import ExcelExportButton from "../components/asset/ExcelExportButton";
import {
  assetTransactions,
  getAssetFilterOptions,
} from "../data/assetTransactions";

export default function AssetTransaction() {
  const options = useMemo(() => getAssetFilterOptions(), []);
  const [filters, setFilters] = useState({
    project: "",
    rm: "",
    beeFriend: "",
    executive: "",
    material: "",
    location: "",
    status: "",
    ticketNo: "",
    fromDate: "",
    toDate: "",
  });

  const [filteredRows, setFilteredRows] = useState(assetTransactions);

  const handleSearch = () => {
    let rows = assetTransactions;

    if (filters.project) {
      rows = rows.filter((r) => r.project === filters.project);
    }
    if (filters.rm) {
      rows = rows.filter((r) => r.rm === filters.rm);
    }
    if (filters.beeFriend) {
      rows = rows.filter((r) => r.beeFriend === filters.beeFriend);
    }
    if (filters.executive) {
      rows = rows.filter((r) => r.executive === filters.executive);
    }
    if (filters.material) {
      rows = rows.filter((r) => r.material === filters.material);
    }
    if (filters.location) {
      rows = rows.filter((r) => r.location === filters.location);
    }
    if (filters.status) {
      rows = rows.filter((r) => r.status === filters.status);
    }
    if (filters.ticketNo) {
      const t = filters.ticketNo.toLowerCase();
      rows = rows.filter((r) => r.ticketId.toLowerCase().includes(t));
    }
    if (filters.fromDate) {
      rows = rows.filter((r) => r.tranDate >= filters.fromDate);
    }
    if (filters.toDate) {
      rows = rows.filter((r) => r.tranDate <= filters.toDate);
    }

    setFilteredRows(rows);
  };

  // summary card counts
  const cardCounts = useMemo(() => {
    const counts = {
      "To Store": 0,
      "From Store": 0,
      "In Hand": 0,
      Institution: 0,
      Vendor: 0,
    };

    filteredRows.forEach((row) => {
      if (counts[row.bucket] !== undefined) {
        counts[row.bucket] += 1;
      }
    });

    return counts;
  }, [filteredRows]);

  return (
    <div className="p-4 space-y-4">
      <FiltersBar
        options={options}
        filters={filters}
        setFilters={setFilters}
        onSearch={handleSearch}
      />

      <SummaryCards counts={cardCounts} />

      <AssetTable rows={filteredRows} />

      {/* floating excel button */}
      <ExcelExportButton rows={filteredRows} />
    </div>
  );
}
