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
  console.log(requirements);
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
      <p className={styles.jobDetailsInfo__mainDescription}>{description}</p>
      <section className={styles.requirementsSection}>
        <p className={styles.requirementsSection__title}>Requirements</p>
        <p className={styles.requirementsSection__description}>
          {requirements.content}
        </p>
        <ul>
          {requirements.items.map((item, idx) => {
            return <li key={idx}>{item}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}
