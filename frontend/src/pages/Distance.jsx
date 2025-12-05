import FilterBar from "../components/common/FilterBar";
import DistanceFilter from "../components/filters/DistanceFilter";

const fields = [];

export default function Distance() {

  const allProjects = [
    "All Project", "project1", "project2", "project3", "project4", "project5"
  ];

  const projectOptions = ["BIKSHA"];
  const rmOptions = [
    "All Designation",
    "Technical Executive",
    "Installation Interns",
    "Computer Operator",
  ];
  const statusOptions = [
    "Technical Executives",
    "ABHIJIT SAHARIA: 9864872116",
    "Akib Anjan Akhtar: 8638885717",
    "AMARENDRA LARA: 7099582257",
    "Amrit Sharma: 7099126807",
    "ANKUR SARKAR: 6001416778",
    "ARJU ASLAM: 7002203183",
    "Azizur Rahman: 8638043670",
    "BHAGYA JYOTI: 9101061330",
    "BHASKARJYOTI SARMA: 9101581475",
    "BHASKARYA GOSWAMI: 8486205897",
    "BIJOY: 7002673066",
    "BIJOY KUMAR: 6001456829",
    "BIKI DEBNATH: 8135098647",
    "BIKRAM DAS: 8822635818",
    "Biplab Rajkhowa: 8638410045",
    "Bishal Roy: 6003885945",
    "BISWAJIT SINGH: 8486176034",
    "Debkumar Barman: 7002400446",
    "DHIREN BHARALI: 6001263640",
    "Pending",
    "In Progress",
  ];

  const handleSearch = (filters) => {
    console.log("FILTER APPLIED =>", filters);
    // API CALL HERE
  };

  return (
    <div>
      {/* <DistanceFilter /> */}
      <FilterBar
        filters={[
          { label: "Project", key: "project", options: allProjects },
          { label: "Project", key: "project", options: projectOptions },
          { label: "RM", key: "rm", options: rmOptions },
          { label: "Status", key: "status", options: statusOptions },
        ]}
        enableDateRange={true}
        enableExportExcel={true}
        onSearch={handleSearch}
        singleDate={false}
      />

      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold">Distance Summary</h2>
        <span>Distance Summary data show here..........</span>
      </div>
    </div>
  );
}
