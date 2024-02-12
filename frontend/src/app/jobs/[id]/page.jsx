"use client";

import { useContext } from "react";

import Button from "@/app/components/UI/FormComponents/Button/Button";

import JobDetailsInfo from "./components/JobDetailsInfo/JobDetailsInfo";
import JobItemHeader from "./components/JobItemCompanyInfo/JobItemCompanyInfo";

import styles from "./page.module.css";
import ApplyNowBar from "./components/ApplyNowBar/ApplyNowBar";
import { JobContext } from "@/app/context/JobContext";

export default function JobItemPage({ params }) {
  const id = params.id;

  const { jobs } = useContext(JobContext);
  const job = jobs.find((job) => job.id.toString() === id);

  return (
    <section className={styles.jobItem__page}>
      <JobItemHeader
        logo={job.logo}
        logoBackground={job.logoBackground}
        company={job.company}
        website={job.website}
      />
      <JobDetailsInfo
        postedAt={job.postedAt}
        contract={job.contract}
        position={job.position}
        location={job.location}
        apply={job.apply}
        description={job.description}
        requirements={job.requirements}
        role={job.role}
      />

      <ApplyNowBar position={job.position} company={job.company} />
    </section>
  );
}
