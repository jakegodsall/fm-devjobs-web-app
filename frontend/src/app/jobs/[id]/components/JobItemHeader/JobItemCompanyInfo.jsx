import CompanyLogo from "@/app/components/CompanyLogo/CompanyLogo";
import Button from "@/app/components/UI/FormComponents/Button/Button";

import styles from "./JobItemCompanyInfo.module.css";

export default function JobItemCompanyInfo({
  logo,
  logoBackground,
  company,
  website,
}) {
  return (
    <div className={styles.jobItemCompanyInfo}>
      <CompanyLogo
        src={logo}
        logoBackground={logoBackground}
        alt={`${company} logo`}
      />
      <p className={styles.jobItemCompanyInfo__title}>{company}</p>
      <p className={styles.jobItemCompanyInfo__website}>{website}</p>
      <div className={styles.jobItemCompanyInfo__buttonContainer}>
        <Button>Company Site</Button>
      </div>
    </div>
  );
}
