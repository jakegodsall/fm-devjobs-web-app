"use client";

import Image from "next/image";

import searchIcon from "@public/assets/desktop/icon-search.svg";
import filterIcon from "@public/assets/mobile/icon-filter.svg";

import styles from "./FilterBar.module.css";
import TextInput from "../UI/FormComponents/TextInput/TextInput";

export default function FilterBar() {
  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleOnSubmit} className={styles.filterBar}>
      <TextInput id="filterBar" placeholder="Filter by title..." />
      <Image
        className={styles.filterBar__filterIcon}
        src={filterIcon}
        alt="filter"
      />
      <button className={styles.filterBar__searchIconBackground}>
        <Image
          className={styles.filterBar__searchIcon}
          src={searchIcon}
          alt="magnifying glass"
        />
      </button>
    </form>
  );
}
