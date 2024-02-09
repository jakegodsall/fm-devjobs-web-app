import JobListingItem from "../JobListingItem/JobListingItem";
import styles from "./JobListingList.module.css";

export default function JoblistingList({ filteredJobs }) {
  return (
    <section className={styles.jobListingList}>
      <ul className={styles.jobListingList__list}>
        {filteredJobs.map((jobListing) => {
          return (
            <li className={styles.jobListingList__item} key={jobListing.id}>
              <JobListingItem
                id={jobListing.id}
                company={jobListing.company}
                position={jobListing.position}
                logo={jobListing.logo}
                logoBackground={jobListing.logoBackground}
                contract={jobListing.contract}
                postedAt={jobListing.postedAt}
                location={jobListing.location}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
