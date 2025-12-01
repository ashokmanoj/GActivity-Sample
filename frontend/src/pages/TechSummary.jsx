import React, { useState, useMemo } from "react";

import {
  rms,
  designations,
  executives,
  daySummaries,
} from "../data/techSummaryData";

import FilterBar from "../components/techsummary/FilterBar";
import SummaryCards from "../components/techsummary/SummaryCards";
import TaskActivitiesSection from "../components/techsummary/TaskActivitiesSection";
import ClassRunStatusSection from "../components/techsummary/ClassRunStatusSection";
import AttendanceDetail from "../components/techsummary/AttendanceDetail";

export default function TechSummary() {
  const [selectedRm, setSelectedRm] = useState(rms[0]);
  const [selectedDesignation, setSelectedDesignation] = useState(
    designations[0]
  );
  const [selectedExecId, setSelectedExecId] = useState(executives[0].id);
  const [selectedDate, setSelectedDate] = useState("2025-11-27");
  const [mode, setMode] = useState("day");
  const [showAttendanceDetail, setShowAttendanceDetail] = useState(false);

  /* Filter executives dynamically */
  const filteredExecutives = useMemo(
    () =>
      executives.filter(
        (e) => e.rm === selectedRm && e.designation === selectedDesignation
      ),
    [selectedRm, selectedDesignation]
  );

  // Set valid executive
  React.useEffect(() => {
    if (!filteredExecutives.find((e) => e.id === selectedExecId)) {
      setSelectedExecId(filteredExecutives[0]?.id);
    }
  }, [filteredExecutives]);

  /* Get summary dynamically */
  const currentSummary = useMemo(() => {
    if (mode === "day") {
      return daySummaries.find(
        (d) => d.executiveId === selectedExecId && d.date === selectedDate
      );
    }

    // Month aggregation
    const all = daySummaries.filter((d) => d.executiveId === selectedExecId);
    if (!all.length) return null;

    return {
      ...all[0],
      attendance: {
        present: all.reduce((s, d) => s + d.attendance.present, 0),
        total: all.reduce((s, d) => s + d.attendance.total, 0),
      },
      visitsCount: all.reduce((s, d) => s + d.visitsCount, 0),
      taskActivitiesCount: all.reduce((s, d) => s + d.taskActivitiesCount, 0),
      photosUploaded: all.reduce((s, d) => s + d.photosUploaded, 0),
      distanceKm: all.reduce((s, d) => s + d.distanceKm, 0),
      expenseClaimed: all.reduce((s, d) => s + d.expenseClaimed, 0),
      expenseApproved: all.reduce((s, d) => s + d.expenseApproved, 0),
    };
  }, [selectedExecId, mode, selectedDate]);

  const exec = executives.find((e) => e.id === selectedExecId);

  return (
    <div className="p-4 space-y-6">
      {/* FILTER BAR */}
      <FilterBar
        selectedRm={selectedRm}
        setSelectedRm={setSelectedRm}
        selectedDesignation={selectedDesignation}
        setSelectedDesignation={setSelectedDesignation}
        selectedExecId={selectedExecId}
        setSelectedExecId={setSelectedExecId}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        mode={mode}
        setMode={setMode}
        filteredExecutives={filteredExecutives}
      />

      {/* MAIN CONTENT */}
      {!currentSummary ? (
        <div className="bg-white p-6 rounded-xl shadow text-center text-gray-500">
          No summary available for this selection.
        </div>
      ) : (
        <>
          <SummaryCards
            summary={currentSummary}
            onAttendanceClick={() => setShowAttendanceDetail(true)}
          />

          <TaskActivitiesSection summary={currentSummary} exec={exec} />
          <ClassRunStatusSection summary={currentSummary} />
        </>
      )}

      {/* Attendance Popup */}
      {showAttendanceDetail && currentSummary && (
        <AttendanceDetail
          summary={currentSummary}
          exec={exec}
          onClose={() => setShowAttendanceDetail(false)}
        />
      )}
    </div>
  );
}
