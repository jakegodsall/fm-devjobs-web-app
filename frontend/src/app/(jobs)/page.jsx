import FilterBar from "../components/FilterBar/FilterBar";
import JoblistingList from "./_components/JobListingList/JobListingList";

export default function JobListingPage() {
  return (
    <div>
      <FilterBar />
      <JoblistingList />
    </div>
  );
}
