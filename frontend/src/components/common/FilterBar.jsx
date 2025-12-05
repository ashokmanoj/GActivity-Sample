import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiChevronDown } from "react-icons/fi";
import { DateRange, Calendar } from "react-date-range";
import { format } from "date-fns";
import { FaFileExcel } from "react-icons/fa";
import { tr } from "date-fns/locale";

export default function TaskListFilter({
  filters = [],
  enableDateRange = true,
  singleDate = false,       // NEW FEATURE
  enableExport = true,
  onSearch,
}) {
  const [values, setValues] = useState({});
  const [dateOpen, setDateOpen] = useState(false);
  const [step, setStep] = useState(0);

  const [dateRange, setDateRange] = useState([
    { startDate: new Date(), endDate: new Date(), key: "selection" }
  ]);

  const formattedDate = singleDate
    ? format(dateRange[0].startDate, "dd MMM yyyy")
    : `${format(dateRange[0].startDate, "dd MMM yyyy")} - ${format(
        dateRange[0].endDate, "dd MMM yyyy"
      )}`;

  /* --------------------- Dropdown Change --------------------- */
  const updateValue = (key, value) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  /* --------------------- Date Selection ---------------------- */
  const handleDateChange = (item) => {
    setDateRange([item.selection]);

    if (singleDate) {
      // Close immediately for single date select
      setDateOpen(false);
      return;
    }

    setStep(step + 1);

    if (step === 1) {
      setDateOpen(false);
      setStep(0);
    }
  };

  /* --------------------- Search ------------------------------ */
  const handleSearch = () => {
    onSearch?.({
      ...values,
      from: dateRange[0].startDate,
      to: singleDate ? dateRange[0].startDate : dateRange[0].endDate,
    });
  };

  return (
    <div className="bg-[#f4f8f9] p-4 rounded-lg shadow-sm flex flex-wrap items-center justify-between gap-4">

      {/* LEFT SECTION */}
      <div className="flex flex-wrap gap-4 items-center">

        {/* ---------- YOUR ORIGINAL DROPDOWNS (IMPROVED UI) ---------- */}
        {filters.map((f, i) => (
          <div key={i} className="relative">
            <select
              className="
                w-full px-4 py-2 text-center rounded-full border bg-white shadow-sm
                text-sm appearance-none pr-8
              "
              onChange={(e) => updateValue(f.key, e.target.value)}
            >
              {f.options.map((o, j) => (
                <option key={j}>{o}</option>
              ))}
            </select>

            {/* FIXED: Arrow no longer touches border */}
            <FiChevronDown className="absolute right-3 top-3 text-gray-500" />
          </div>
        ))}

        {/* ---------- DATE RANGE SELECTOR ---------- */}
        {(enableDateRange || singleDate) && (
          <div className="relative">

            <div
              onClick={() => { setDateOpen(!dateOpen); setStep(0); }}
              className="
                flex items-center text-center bg-white px-4 py-2 rounded-full border
                w-72 shadow-sm gap-2 cursor-pointer hover:bg-gray-100
              "
            >
              <FiChevronLeft className="text-gray-600" />
              <span className="flex-1 text-sm">{formattedDate}</span>
              <FiChevronRight className="text-gray-600" />
            </div>

            {/* POPUP CALENDAR */}
            {dateOpen && (
              <div className="absolute mt-2 bg-white shadow-xl border rounded-xl p-2 z-50">

                {!singleDate ? (
                  <DateRange
                    ranges={dateRange}
                    onChange={handleDateChange}
                    moveRangeOnFirstSelection={false}
                    rangeColors={["#2563eb"]}
                  />
                ) : (
                  <Calendar
                    date={dateRange[0].startDate}
                    onChange={(d) =>
                      handleDateChange({
                        selection: { startDate: d, endDate: d }
                      })
                    }
                    color="#2563eb"
                  />
                )}

              </div>
            )}
          </div>
        )}

        {/* SEARCH BUTTON */}
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-5 py-2 rounded-md shadow hover:bg-blue-700"
        >
          Search
        </button>

      </div>

      {/* ---------- EXCEL EXPORT BUTTON ---------- */}
      {enableExport && (
        <button className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 shadow hover:bg-green-700">
          <FaFileExcel />
        </button>
      )}
    </div>
  );
}
