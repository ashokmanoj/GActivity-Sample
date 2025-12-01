// src/data/techSummaryData.js

// One place where we keep all dummy data used by Tech Summary page

export const rms = ["DEEP", "NORTH"];

export const designations = ["Installation Interns", "Technical Executive"];

export const executives = [
  {
    id: "exec1",
    name: "Anupam Dutta : 9613705280",
    shortName: "Anupam Dutta",
    rm: "DEEP",
    designation: "Installation Interns",
  },
  {
    id: "exec2",
    name: "Rohit Sharma : 9876543210",
    shortName: "Rohit Sharma",
    rm: "NORTH",
    designation: "Technical Executive",
  },
];

// Day-wise summary for each executive
export const daySummaries = [
  {
    date: "2025-11-27",
    executiveId: "exec1",

    attendance: { present: 1, total: 1 },
    visitsCount: 9,
    taskActivitiesCount: 9,
    photosUploaded: 17,
    distanceKm: 315,
    scoreRemarks: "Good",
    startVisitTime: "9:31 AM",
    endVisitTime: "11:47 AM",
    expenseClaimed: 0,
    expenseApproved: 0,

    tickets: {
      technical: {
        H: 1,
        M: 1,
        L: 1,
        open12: 1,
        open12Plus: 1,
        open36Plus: 1,
        closed: 1,
      },
      connectivity: {
        H: 1,
        M: 1,
        L: 1,
        open12: 1,
        open12Plus: 1,
        open36Plus: 1,
        closed: 1,
      },
      school: {
        H: 1,
        M: 1,
        L: 1,
        open12: 1,
        open12Plus: 1,
        open36Plus: 1,
        closed: 1,
      },
    },

    attendanceRows: [
      {
        sl: 1,
        executiveName: "Anupam Dutta : 9613705280",
        designation: "Installation Interns",
        rmName: "DEEP : 9402794427",
        fvIn: "09:31:33 AM",
        lvOut: "11:47:09 AM",
        duration: "02:15:36",
        status: "CN",
        rmStatus: "",
        rmComments: "",
        hrIn: "",
        hrOut: "",
        hrStatus: "CN",
        hrComments: "",
      },
    ],

    taskActivities: [
      {
        sl: 1,
        time: "Nov 27 2025 9:31AM",
        institution: "GOVT BEZBARUAH HS SCHOOL 18180211305",
        task: "Class run",
        categorySub: "Regular Maintenance",
        outcome: "Maintenance and class run",
        timespent: "36.00",
      },
      {
        sl: 2,
        time: "Nov 27 2025 9:41AM",
        institution: "GOVT BEZBARUAH HS SCHOOL 18180211305",
        task: "Class run",
        categorySub: "Regular Maintenance",
        outcome: "Class run",
        timespent: "36.00",
      },
    ],

    classRunStatus: [
      {
        sl: 1,
        institution: "18180100301 RUNGAGORA B B TALUKDAR MES",
        lastVisit: "04 Sep 2025",
        sessionRun: "4/4",
        volunteerPresence: "Yes",
        tickets: "Multiple RAFTs not working",
        slcStatusDays: ["R", "I", "R", "R", "R"],
        lastRACRun: "27 Nov 2025",
      },
      {
        sl: 2,
        institution: "18180102502 BORKATHANI MES",
        lastVisit: "25 Sep 2025",
        sessionRun: "4/4",
        volunteerPresence: "Yes",
        tickets: "Modem power adaptor not working",
        slcStatusDays: ["R", "N", "R", "R", "N"],
        lastRACRun: "26 Nov 2025",
      },
    ],
  },

  // Another dummy day for second executive (to prove it is dynamic)
  {
    date: "2025-11-27",
    executiveId: "exec2",
    attendance: { present: 0, total: 1 },
    visitsCount: 3,
    taskActivitiesCount: 3,
    photosUploaded: 5,
    distanceKm: 80,
    scoreRemarks: "Average",
    startVisitTime: "10:10 AM",
    endVisitTime: "01:30 PM",
    expenseClaimed: 120,
    expenseApproved: 80,
    tickets: {
      technical: {
        H: 0,
        M: 1,
        L: 0,
        open12: 1,
        open12Plus: 0,
        open36Plus: 0,
        closed: 0,
      },
      connectivity: {
        H: 0,
        M: 0,
        L: 0,
        open12: 0,
        open12Plus: 0,
        open36Plus: 0,
        closed: 0,
      },
      school: {
        H: 0,
        M: 0,
        L: 0,
        open12: 0,
        open12Plus: 0,
        open36Plus: 0,
        closed: 0,
      },
    },
    attendanceRows: [],
    taskActivities: [],
    classRunStatus: [],
  },
];
