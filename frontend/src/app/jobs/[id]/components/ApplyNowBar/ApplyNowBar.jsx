import Button from "@/app/components/UI/FormComponents/Button/Button";

import styles from "./ApplyNowBar.module.css";

export default function ApplyNowBar({ position, company }) {
  return (
    <div className={styles.applyNowBar}>
      <div className={styles.applyNowBar__content}>
        <div className={styles.applyNowBar__companyInformation}>
          <p className={styles.applyNowBar__position}>{position}</p>
          <p className={styles.applyNowBar__company}>{company}</p>
        </div>
        <div className={styles.applyNowBar__buttonContainer}>
          <Button>Apply Now</Button>
        </div>
      </div>
    </div>
  );
}
