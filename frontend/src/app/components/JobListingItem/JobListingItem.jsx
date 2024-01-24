import Image from "next/image";

import styles from "./JobListingItem.module.css";

export default function JobListingItem({
  company,
  position,
  logo,
  logoBackground,
  contract,
  postedAt,
  location,
}) {
  return (
    <div className={styles.jobListingItem}>
      <Image
        className={styles.jobListingItem__image}
        src={logo}
        alt={`${company} logo`}
        layout="responsive"
      />
      <div className={styles.jobListingItem__mainContent}>
        <div className={styles.jobListingItem__topRow}>
          <p>{postedAt}</p>
          <p>{contract}</p>
        </div>
        <p className={styles.jobListingItem__position}>{position}</p>
        <p className={styles.jobListingItem__company}>{company}</p>
      </div>
      <p className={styles.jobListingItem__location}>{location}</p>
    </div>
  );
}
