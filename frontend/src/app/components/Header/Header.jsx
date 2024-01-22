import Image from "next/image";

import Logo from "@public/assets/desktop/logo.svg";

import styles from "@components/Header/Header.module.css";
import DarkModeToggle from "@components/DarkModeToggle/DarkModeToggle";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image className={styles.header__logo} src={Logo} alt="devjobs logo" />
      <DarkModeToggle />
    </header>
  );
}
