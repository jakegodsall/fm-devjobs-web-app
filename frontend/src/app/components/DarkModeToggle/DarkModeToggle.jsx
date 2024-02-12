"use client";

import { useState, useContext } from "react";

import Image from "next/image";

import Toggle from "@components/UI/Toggle/Toggle";

import MoonIcon from "@public/assets/desktop/icon-moon.svg";
import SunIcon from "@public/assets/desktop/icon-sun.svg";

import styles from "./DarkModeToggle.module.css";
import { ThemeContext } from "@/app/context/ThemeContext";

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isDarkMode = theme === "dark";

  function handleToggle() {
    toggleTheme();
  }

  return (
    <div className={styles.darkModeToggle}>
      <Image
        className={styles.darkModeToggle__sunIcon}
        src={SunIcon}
        alt="Sun icon"
      />
      <div>
        <Toggle isToggled={isDarkMode} toggle={handleToggle} />
      </div>
      <Image
        className={styles.darkModeToggle__moonIcon}
        src={MoonIcon}
        alt="Moon icon"
      />
    </div>
  );
}
