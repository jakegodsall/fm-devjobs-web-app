import Image from "next/image";

import styles from "./CompanyLogo.module.css";

export default function CompanyLogo({ src, alt, logoBackground }) {
  const style = {
    backgroundColor: logoBackground,
    border: `0.5rem solid ${logoBackground}`,
  };

  return (
    <div className={styles.companyLogoContainer} style={style}>
      <Image src={src} alt={alt} fill style={{ objectFit: "contain" }} />
    </div>
  );
}
