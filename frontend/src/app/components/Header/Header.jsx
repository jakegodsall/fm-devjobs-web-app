import Image from "next/image";

import Logo from "@public/assets/desktop/logo.svg";

import Toggle from "../UI/Toggle/Toggle";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image className={styles.header__logo} src={Logo} alt="devjobs logo" />
      <Toggle />
    </header>
  );
}
