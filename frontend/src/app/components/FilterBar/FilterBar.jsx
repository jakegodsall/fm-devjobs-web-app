"use client";

import Image from "next/image";

import searchIcon from "@public/assets/desktop/icon-search.svg";
import filterIcon from "@public/assets/mobile/icon-filter.svg";

import styles from "./FilterBar.module.css";

import Button from "../UI/FormComponents/Button/Button";
import TextInput from "../UI/FormComponents/TextInput/TextInput";
import Checkbox from "../UI/FormComponents/Checkbox/Checkbox";

export default function FilterBar({ onFilterSubmit }) {
  const handleOnSubmit = (event) => {
    // Prevent default HTTP POST behaviour
    event.preventDefault();
    // Get FormData of filters
    constformData = new FormData(event.target);
    // Convert to an object
    const filters = Object.fromEntries(formData.entries());
    // Pass back to the parent component
    onFilterSubmit(filters);
  };

  return (
    <form onSubmit={handleOnSubmit} className={styles.filterBar}>
      <div className={styles.filterBar__titleSection}>
        <Image
          className={styles.filterBar__searchIconDesktop}
          src={searchIcon}
          alt="magnifying glass"
        />
        <TextInput id="filterBar" placeholder="Filter by title..." />
        <div className={styles.filterBar__mobileButtons}>
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
        </div>
      </div>
      <div className={styles.filterBar__locationSection}>
        <Image
          className={styles.filterBar__filterIcon}
          src={filterIcon}
          alt="filter"
        />
        <TextInput id="filterBar" placeholder="Filter by location..." />
      </div>
      <div className={styles.filterBar__contractSection}>
        <div className={styles.filterBar__contractCheckboxContainer}>
          <Checkbox name="" id="full-time-only" />
          <label
            className={styles.filterBar__fullTimeLabel}
            htmlFor="full-time-only"
          >
            Full Time
          </label>
        </div>
        <div className={styles.filterBar__contactButton}>
          <Button>Search</Button>
        </div>
      </div>
    </form>
  );
}
