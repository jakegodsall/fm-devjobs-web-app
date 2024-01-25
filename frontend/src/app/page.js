import FilterBar from "./components/FilterBar/FilterBar";
import JoblistingList from "./components/JobListingList/JobListingList";
import Modal from "./components/UI/Modal/Modal";

export default function Home() {
  return (
    <div>
      <FilterBar />
      <JoblistingList />
      <Modal />
    </div>
  );
}
