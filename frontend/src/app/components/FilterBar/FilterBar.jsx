"use client";

import React, { useState } from "react";
import Image from "next/image";

import searchIcon from "@public/assets/desktop/icon-search.svg";
import filterIcon from "@public/assets/mobile/icon-filter.svg";

import styles from "./FilterBar.module.css";

import Button from "../UI/FormComponents/Button/Button";
import TextInput from "../UI/FormComponents/TextInput/TextInput";
import Checkbox from "../UI/FormComponents/Checkbox/Checkbox";
import FilterModal from "../modals/FilterModal/FilterModal";

export default function FilterBar({ onFilterSubmit }) {
  const [filterModalOpen, setFilterModalOpen] = useState(false);

  const setCloseModal = () => {
    setFilterModalOpen(false);
  };

  const handleOnSubmit = (event) => {
    // Prevent default HTTP POST behaviour
    event.preventDefault();
    // Get FormData of filters
    const formData = new FormData(event.target);
    // Convert to an object
    const filters = Object.fromEntries(formData.entries());
    console.log(filters);
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
        <TextInput
          id="filterBar"
          placeholder="Filter by title..."
          name="title"
        />
        <div className={styles.filterBar__mobileButtons}>
          <Image
            className={styles.filterBar__filterIcon}
            src={filterIcon}
            alt="filter"
            onClick={() => setFilterModalOpen((prevState) => !prevState)}
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
        <TextInput
          id="filterBar"
          placeholder="Filter by location..."
          name="location"
        />
      </div>
      <div className={styles.filterBar__contractSection}>
        <div className={styles.filterBar__contractCheckboxContainer}>
          <Checkbox name="isFullTimeOnly" id="full-time-only" />
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
      {filterModalOpen && <FilterModal closeModal={setCloseModal} />}
    </form>
  );
}
