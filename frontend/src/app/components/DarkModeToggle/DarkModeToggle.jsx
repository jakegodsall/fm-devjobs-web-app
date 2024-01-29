"use client";

import { useState, useContext } from "react";

import Image from "next/image";

import Toggle from "@components/UI/Toggle/Toggle";

import MoonIcon from "@public/assets/desktop/icon-moon.svg";
import SunIcon from "@public/assets/desktop/icon-sun.svg";

import styles from "./DarkModeToggle.module.css";
import { ThemeContext } from "@/app/context/ThemeContext";

export default function DarkModeToggle() {
  const { toggleTheme } = useContext(ThemeContext);
  const [toggleDark, setToggleDark] = useState(false);

  function handleToggle() {
    setToggleDark((prevState) => !prevState);
    toggleTheme();
  }

  return (
    <div className={styles.darkModeToggle}>
      <Image
        className={styles.darkModeToggle__sunIcon}
        src={SunIcon}
        alt="Sun icon"
      />
      <Toggle isToggled={toggleDark} toggle={handleToggle} />
      <Image
        className={styles.darkModeToggle__moonIcon}
        src={MoonIcon}
        alt="Moon icon"
      />
    </div>
  );
}
