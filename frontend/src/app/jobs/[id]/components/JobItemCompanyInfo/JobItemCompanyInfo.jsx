import CompanyLogo from "@/app/components/CompanyLogo/CompanyLogo";
import Button from "@/app/components/UI/FormComponents/Button/Button";

import styles from "./JobItemCompanyInfo.module.css";

export default function JobItemCompanyInfo({
  logo,
  logoBackground,
  company,
  website,
}) {
  const parsedUrl = (url) => {
    return url.split("//")[1];
  };

  return (
    <div className={styles.jobItemCompanyInfo}>
      <div className={styles.jobItemCompanyInfo__logoContainer}>
        <CompanyLogo
          src={logo}
          logoBackground={logoBackground}
          alt={`${company} logo`}
        />
      </div>
      <div className={styles.jobItemCompanyInfo__content}>
        <div className={styles.jobItemCompanyInfo__textContent}>
          <p className={styles.jobItemCompanyInfo__title}>{company}</p>
          <a href="/" className={styles.jobItemCompanyInfo__website}>
            {parsedUrl(website)}
          </a>
        </div>
        <div className={styles.jobItemCompanyInfo__buttonContainer}>
          <Button variant="secondary">Company Site</Button>
        </div>
      </div>
    </div>
  );
}
