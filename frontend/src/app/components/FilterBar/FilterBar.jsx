"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

import refreshIcon from "@public/assets/desktop/icon-refresh.svg";
import searchIcon from "@public/assets/desktop/icon-search.svg";
import filterIcon from "@public/assets/mobile/icon-filter.svg";

import styles from "./FilterBar.module.css";

import Button from "../UI/FormComponents/Button/Button";
import TextInput from "../UI/FormComponents/TextInput/TextInput";
import Checkbox from "../UI/FormComponents/Checkbox/Checkbox";
import FilterModal from "../modals/FilterModal/FilterModal";

const RefreshVariants = {
  initial: {
    opacity: 0,
    scale: 0.75,
    width: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    width: 25,
    transition: {
      opacity: { duration: 1, delay: 0.3 },
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    width: 0,
    margin: 0,
    transition: {
      opacity: { duration: 1 },
    },
  },
};

export default function FilterBar({
  filters,
  onSubmit,
  handleInputChange,
  resetFilters,
  filtersAreApplied,
}) {
  const formRef = useRef(null);
  const [refreshButtonVisible, setRefreshButtonVisible] = useState(false);
  const [filterModalOpen, setFilterModalOpen] = useState(false);

  const setCloseModal = () => {
    setFilterModalOpen(false);
  };

  const handleOnSubmit = (event) => {
    // Close modal if open
    if (filterModalOpen) {
      setCloseModal();
    }
    // Prevent default HTTP POST behaviour
    event.preventDefault();
    // Get FormData of filters
    const formData = new FormData(event.target);
    // Convert to an object
    const filters = Object.fromEntries(formData.entries());
    // Pass back to the parent component
    onSubmit(filters);
  };

  return (
    <form onSubmit={handleOnSubmit} className={styles.filterBar} ref={formRef}>
      <div
        className={clsx(
          styles.filterBar__titleSection,
          filtersAreApplied && styles.filterBar__titleSectionWithRefresh
        )}
      >
        <AnimatePresence>
          {filtersAreApplied && (
            <motion.img
              className={styles.filterBar__refreshIcon}
              src="./assets/desktop/icon-refresh.svg"
              alt="refresh"
              onClick={resetFilters}
              variants={RefreshVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              layout
            />
          )}
        </AnimatePresence>
        <Image
          className={styles.filterBar__searchIconDesktop}
          src={searchIcon}
          alt="magnifying glass"
        />
        <TextInput
          id="filterBar"
          placeholder="Filter by title..."
          name="title"
          value={filters.title}
          onChange={handleInputChange}
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
          value={filters.location}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.filterBar__contractSection}>
        <div className={styles.filterBar__contractCheckboxContainer}>
          <Checkbox
            name="isFullTimeOnly"
            id="full-time-only"
            value={filters.isFullTimeOnly}
            onChange={handleInputChange}
          />
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
      {filterModalOpen && (
        <FilterModal
          closeModal={setCloseModal}
          filters={filters}
          handleInputChange={handleInputChange}
        />
      )}
    </form>
  );
}
