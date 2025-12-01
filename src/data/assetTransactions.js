// src/data/assetTransactions.js

// NOTE: All dates are ISO (YYYY-MM-DD) so filtering is easy.

export const assetTransactions = [
  {
    id: 1,
    type: "Request",
    tranDate: "2025-12-01",
    transactionNo: "251201000053176",
    assetDesc: "BUC | Nelco",
    qty: 1,
    project: "APECR",
    rm: "DEEP",
    beeFriend: "Bee friend",
    executive: "Dhiren Prasad : 9395309832",
    material: "BUC",
    location: "Store",
    status: "Working",
    institute: "18140207803 PURBANCHAL MES",
    serialNo: "SN-1001",
    transactionNote: "BUC faulty",
    ticketId: "TINS20251201001151",
    reqTranNo: "251201000053176",
    isReturn: "Yes",
    issue: "BUC not working",
    chkn: "CinP",
    bucket: "To Store",
  },
  {
    id: 2,
    type: "Request",
    tranDate: "2025-12-01",
    transactionNo: "251201000053175",
    assetDesc: "Amplifier | Edutel",
    qty: 1,
    project: "APECR",
    rm: "DEEP",
    beeFriend: "Bee friend",
    executive: "NABAJIT SARMA : 7002293515",
    material: "Amplifier",
    location: "Installed at school",
    status: "Working",
    institute: "181012039102 MAKRJIHORA ME SCHOOL",
    serialNo: "SN-1002",
    transactionNote: "Dispatched done, Dat",
    ticketId: "KOKR20251108000777",
    reqTranNo: "2511080000501103",
    isReturn: "Yes",
    issue: "Amplifier Not Switching ON",
    chkn: "CinP",
    bucket: "Institution",
  },
  {
    id: 3,
    type: "Request",
    tranDate: "2025-12-01",
    transactionNo: "251201000053174",
    assetDesc: "Patch Cord 1 Mtr | Nelco",
    qty: 1,
    project: "APECR",
    rm: "DEEP",
    beeFriend: "Bee friend",
    executive: "RAJIBUL ALI : 9957797132",
    material: "Patch Cord",
    location: "Installed at school",
    status: "Working",
    institute: "18050600612 DESHBHAKTA GIRLS HIGH SCHOOL",
    serialNo: "SN-1003",
    transactionNote: "Dispatched done, Dat",
    ticketId: "BARP20250918001648",
    reqTranNo: "250918000048656",
    isReturn: "Yes",
    issue: "Lan cable rat bite",
    chkn: "CinP",
    bucket: "In Hand",
  },
  {
    id: 4,
    type: "Request",
    tranDate: "2025-12-01",
    transactionNo: "251201000053173",
    assetDesc: "Dish Cable RG 6 | Nelco",
    qty: "10mtr",
    project: "APECR",
    rm: "DEEP",
    beeFriend: "Bee friend",
    executive: "RAJIBUL ALI : 9957797132",
    material: "Dish Cable",
    location: "Installed at school",
    status: "Working",
    institute: "18050600612 DESHBHAKTA GIRLS HIGH SCHOOL",
    serialNo: "SN-1004",
    transactionNote: "Dispatched done, Dat",
    ticketId: "BARP20250918001646",
    reqTranNo: "250918000048655",
    isReturn: "No",
    issue: "IFL Cable/s not working",
    chkn: "CinP",
    bucket: "From Store",
  },
  {
    id: 5,
    type: "Request",
    tranDate: "2025-12-01",
    transactionNo: "251201000053172",
    assetDesc: "Cell | Peak Power | 9V Battery",
    qty: 2,
    project: "APECR",
    rm: "NORTH",
    beeFriend: "Bee friend",
    executive: "RAJIBUL ALI : 9957797132",
    material: "Battery",
    location: "Installed at school",
    status: "Working",
    institute: "181005505805 HATEMA HIGH SCHOOL",
    serialNo: "SN-1005",
    transactionNote: "Dispatched done, Dat",
    ticketId: "BARP202511030001704",
    reqTranNo: "251103000050509",
    isReturn: "No",
    issue: "MIC batteries to be replaced",
    chkn: "CinP",
    bucket: "Vendor",
  },
  // add more dummy rows:
];


// Helper to get unique filter options from data
export const getAssetFilterOptions = () => {
  const projects = new Set();
  const rms = new Set();
  const beeFriends = new Set();
  const executives = new Set();
  const materials = new Set();
  const locations = new Set();
  const statuses = new Set();

  assetTransactions.forEach((row) => {
    projects.add(row.project);
    rms.add(row.rm);
    beeFriends.add(row.beeFriend);
    executives.add(row.executive);
    materials.add(row.material);
    locations.add(row.location);
    statuses.add(row.status);
  });

  return {
    projects: Array.from(projects),
    rms: Array.from(rms),
    beeFriends: Array.from(beeFriends),
    executives: Array.from(executives),
    materials: Array.from(materials),
    locations: Array.from(locations),
    statuses: Array.from(statuses),
  };
};
