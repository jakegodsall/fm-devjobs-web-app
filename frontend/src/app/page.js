import FilterBar from "./components/FilterBar/FilterBar";
import FilterModal from "./components/FilterModal/FilterModal";
import JoblistingList from "./components/JobListingList/JobListingList";
import Modal from "./components/UI/Modal/Modal";

export default function Home() {
  return (
    <div>
      <FilterBar />
      <JoblistingList />
      <FilterModal />
    </div>
  );
}
