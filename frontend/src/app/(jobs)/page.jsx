"use client";

import React, { useState, useEffect, useContext } from "react";

import FilterBar from "../components/FilterBar/FilterBar";
import JoblistingList from "./_components/JobListingList/JobListingList";
import { JobContext } from "../context/JobContext";

export default function JobListingPage() {
  const { jobs } = useContext(JobContext);
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [filters, setFilters] = useState({
    title: "",
    location: "",
    isFullTimeOnly: false,
  });
  const [filtersAreApplied, setFiltersAreApplied] = useState(false);

  console.log(jobs);

  // useEffect hook to synchronise filtersAreApplied state
  useEffect(() => {
    if (
      filters.title === "" &&
      filters.location === "" &&
      filters.isFullTimeOnly === false
    ) {
      setFilteredJobs(jobs);
    }
  }, [filters]);

  // handle the change of individual form inputs
  const handleInputChange = (name, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    setFiltersAreApplied(true);
  };

  // reset all filters by clicking on reset button
  const resetFilters = () => {
    setFilters({
      title: "",
      location: "",
      isFullTimeOnly: false,
    });
    setFiltersAreApplied(false);
    setFilteredJobs(jobs);
  };

  const filterForTitle = (job, title) => {
    const formattedJobPosition = job.position.trim().toLowerCase();
    return formattedJobPosition.includes(title.toLowerCase());
  };

  const filterForLocation = (job, location) => {
    const formattedLocation = job.location.trim().toLowerCase();
    return formattedLocation.includes(location.toLowerCase());
  };

  const filterForIsFullTime = (job) => {
    return job.contract.trim().toLowerCase() === "full time";
  };

  const handleFilterSubmit = (filters) => {
    setFilters(filters);

    const newFilteredJobs = jobs.filter((job) => {
      const titleMatch = filters.title
        ? filterForTitle(job, filters.title)
        : true;
      const locationMatch = filters.location
        ? filterForLocation(job, filters.location)
        : true;
      const isFullTimeOnlyMatch =
        filters.isFullTimeOnly === "on" ? filterForIsFullTime(job) : true;

      return titleMatch && locationMatch && isFullTimeOnlyMatch;
    });

    setFilteredJobs(newFilteredJobs);
  };

  return (
    <div>
      <FilterBar
        filters={filters}
        onSubmit={handleFilterSubmit}
        handleInputChange={handleInputChange}
        resetFilters={resetFilters}
        filtersAreApplied={filtersAreApplied}
      />
      <JoblistingList filteredJobs={filteredJobs} />
    </div>
  );
}
