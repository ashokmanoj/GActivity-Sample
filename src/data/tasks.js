export const tasks = Array.from({ length: 50 }, (_, index) => {
  const i = index + 1;

  return {
    id: i,
    name: `Maintenance Task ${i}`,
    institution: "GANDHI MES : 18220501002 | KARIMGANJ",
    status: i % 3 === 0 ? "Completed" : i % 3 === 1 ? "In Progress" : "Pending",
    submittedAt: "29 Nov 2025 11:00 AM",
    details: {
      "Activity ID": `10${String(i).padStart(4, "0")}`,
      "Program Name": "APECR",
      Category: "Maintenance",
      "Sub Category": i % 2 === 0 ? "Hardware" : "Other",
      "Assign Start Date": "25 Oct 2025",
      "Start Time": "29 Nov 2025 08:59 AM",
      "End Time": "29 Nov 2025 11:00 AM",
      "Last Visited": "29 Nov 2025 11:00 AM",
      Comment: i % 2 === 0 ? "Now class running" : "Projector issue observed",
      "Technical Executive": "Kaliprasanna Das : 6901093195",
    },
    images: [
      `https://picsum.photos/seed/task-${i}-1/400/300`,
      `https://picsum.photos/seed/task-${i}-2/400/300`,
    ],
    distance: 0,
    mapUrl: "https://maps.google.com",
  };
});
