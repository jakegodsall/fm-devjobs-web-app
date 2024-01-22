import Image from "next/image";

import Toggle from "@components/UI/Toggle/Toggle";

import MoonIcon from "@public/assets/desktop/icon-moon.svg";
import SunIcon from "@public/assets/desktop/icon-sun.svg";

import styles from "./DarkModeToggle.module.css";

export default function DarkModeToggle() {
  return (
    <div className={styles.darkModeToggle}>
      <Image
        className={styles.darkModeToggle__sunIcon}
        src={SunIcon}
        alt="Sun icon"
      />
      <Toggle />
      <Image
        className={styles.darkModeToggle__moonIcon}
        src={MoonIcon}
        alt="Moon icon"
      />
    </div>
  );
}
