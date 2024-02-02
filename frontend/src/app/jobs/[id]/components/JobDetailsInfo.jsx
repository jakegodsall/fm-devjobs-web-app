import Button from "@/app/components/UI/FormComponents/Button/Button";
import styles from "./JobDetailsInfo.module.css";

export default function JobDetailsInfo({
  postedAt,
  contract,
  position,
  location,
  apply,
  description,
  requirements,
  role,
}) {
  return (
    <div className={styles.jobDetailsInfo}>
      <div className={styles.jobDetailsInfo__header}>
        <div className={styles.jobDetailsInfo__headerTop}>
          <p>{postedAt}</p>
          <p>{contract}</p>
        </div>
        <p className={styles.jobDetailsInfo__headerTitle}>{position}</p>
        <p className={styles.jobDetailsInfo__headerLocation}>{location}</p>
      </div>

      <Button>Apply Now</Button>
      <p>{description}</p>
      <div>
        <p>Requirements</p>
        {requirements.content}
      </div>
    </div>
  );
}
