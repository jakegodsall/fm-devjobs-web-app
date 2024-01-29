import FilterBar from "./components/FilterBar/FilterBar";
import JoblistingList from "./components/JobListingList/JobListingList";

export default function Home() {
  return (
    <div>
      <FilterBar />
      <JoblistingList />
      {/* <FilterModal /> */}
    </div>
  );
}
