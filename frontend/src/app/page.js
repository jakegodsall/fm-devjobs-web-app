import FilterBar from "./components/FilterBar/FilterBar";
import JoblistingList from "./components/JobListingList/JobListingList";

import FilterModal from "./components/FilterModal/FilterModal";

export default function Home() {
  return (
    <div>
      <FilterBar />
      <JoblistingList />
      <FilterModal />
    </div>
  );
}
