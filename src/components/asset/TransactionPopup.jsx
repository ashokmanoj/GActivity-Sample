// src/components/asset/TransactionPopup.jsx

import React from "react";
import { FiX } from "react-icons/fi";

export default function TransactionPopup({ item, onClose }) {
  // safe fallbacks so nothing is "undefined"
  const institutionName = item.institutionName || item.institute || "--";
  const institutionCode = item.institutionCode || item.instituteCode || "--";
  const transactionDate = item.tranDate
    ? new Date(item.tranDate).toLocaleDateString("en-GB")
    : "--";

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999] p-4">
      {/* POPUP CONTAINER */}
      <div className="bg-white w-full max-w-6xl rounded-xl shadow-2xl overflow-hidden">
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 bg-gray-100 border-b">
          <h1 className="text-2xl font-bold">
            {item.assetDesc || "Asset Details"}
          </h1>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 max-h-[80vh] overflow-y-auto">
          {/* LEFT - FORM STYLE INFO */}
          <div className="space-y-5">
            {/* Top row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ReadOnlyField label="Project" value={item.project} />
              <ReadOnlyField label="Institution" value={institutionName} />
              <ReadOnlyField label="Location" value={item.location} />
            </div>

            {/* Model + Serial */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ReadOnlyField label="Make / Model" value={item.assetDesc} />
              <ReadOnlyField label="Serial No" value={item.serialNo || "--"} />
            </div>

            {/* Qty + file */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ReadOnlyField label="No. of Qty" value={item.qty} />
              <FileField label="Files" />
            </div>

            {/* Transaction note */}
            <div>
              <p className="text-gray-500 mb-1">Transaction Note</p>
              <textarea
                disabled
                value={item.transactionNote}
                className="w-full h-24 border rounded-lg bg-gray-100 px-3 py-2 text-sm"
              />
            </div>

            {/* Checkin info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <StatusField label="Checkin Status" value="Checkin Pending" />
              <StatusField label="Checkin Remarks" value="--" />
            </div>
          </div>

          {/* RIGHT - DETAILS CARD */}
          <div className="rounded-xl border shadow p-6 bg-gray-50 space-y-4">
            <h3 className="text-lg font-semibold pb-2 border-b">
              Previous Position Details
            </h3>

            <Detail label="Project" value={item.project} />
            <Detail label="Transaction No" value={item.transactionNo} />
            <Detail label="Institution Code" value={institutionCode} />
            <Detail label="Location" value={item.location} />
            <Detail label="Make / Model" value={item.assetDesc} />
            <Detail label="No Of Unit" value={item.qty} />
            <Detail label="Return Reason" value={item.returnReason || "--"} />
            <Detail label="Ticket No" value={item.ticketId} />
            <Detail label="Transaction Date" value={transactionDate} />
            <Detail label="Institution Name" value={institutionName} />
            <Detail label="Status" value={item.status} />
            <Detail label="Serial No" value={item.serialNo || "--"} />
            <Detail label="Returnable" value={item.isReturn} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- small helper components ---------- */

function ReadOnlyField({ label, value }) {
  return (
    <div>
      <p className="text-gray-500 mb-1 text-xs">{label}</p>
      <input
        disabled
        value={value ?? "--"}
        className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-sm"
      />
    </div>
  );
}

function FileField({ label }) {
  return (
    <div>
      <p className="text-gray-500 mb-1 text-xs">{label}</p>
      <input type="file" disabled className="w-full text-sm" />
    </div>
  );
}

function StatusField({ label, value }) {
  return (
    <div>
      <p className="text-gray-500 text-xs">{label}</p>
      <p className="text-base font-semibold mt-1">{value}</p>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <p className="text-gray-500 text-xs">{label}</p>
      <p className="font-semibold text-sm">{value ?? "--"}</p>
    </div>
  );
}
