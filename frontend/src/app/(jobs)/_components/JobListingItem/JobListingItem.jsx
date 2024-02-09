import Link from "next/link";

import styles from "./JobListingItem.module.css";
import CompanyLogo from "@/app/components/CompanyLogo/CompanyLogo";

export default function JobListingItem({
  id,
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
      <div>
        <div className={styles.jobListingItem__companyLogoContainer}>
          <CompanyLogo
            src={logo}
            logoBackground={logoBackground}
            alt={`${company} logo`}
          />
        </div>
        <div className={styles.jobListingItem__mainContent}>
          <div className={styles.jobListingItem__topRow}>
            <p>{postedAt}</p>
            <p>{contract}</p>
          </div>
          <Link
            className={styles.jobListingItem__position}
            href={`/jobs/${id}`}
          >
            {position}
          </Link>
          <p className={styles.jobListingItem__company}>{company}</p>
        </div>
      </div>
      <p className={styles.jobListingItem__location}>{location}</p>
    </div>
  );
}
