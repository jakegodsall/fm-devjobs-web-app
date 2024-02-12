"use client";

import { useContext } from "react";

import Button from "@/app/components/UI/FormComponents/Button/Button";

import JobDetailsInfo from "./components/JobDetailsInfo/JobDetailsInfo";
import JobItemHeader from "./components/JobItemCompanyInfo/JobItemCompanyInfo";

import styles from "./page.module.css";
import ApplyNowBar from "./components/ApplyNowBar/ApplyNowBar";
import { JobContext } from "@/app/context/JobContext";

const job = {
  id: 1,
  company: "Scoot",
  logo: "/assets/logos/scoot.svg",
  logoBackground: "hsl(36, 87%, 49%)",
  position: "Senior Software Engineer",
  postedAt: "5h ago",
  contract: "Full Time",
  location: "United Kingdom",
  website: "https://example.com/scoot",
  apply: "https://example.com/scoot/apply",
  description:
    "Scoot is looking for a Senior Software Engineer passionate about building approachable, innovative and user-first experiences to join our small but growing Engineering team. You will be responsible for building and maintaining front end functionality across all of Scoot’s applications, fostering a growing team of software engineers, and helping drive and maintain best software patterns and practices in our codebase.",
  requirements: {
    content:
      "The ideal candidate is as passionate about solving challenges through technology. They are well-versed in building proof of concepts from scratch and taking these POCs to production and scale. The right fit will have the engineering experience to build and iterate quickly and is comfortable working with product and design to set the technical strategy and roadmap.",
    items: [
      "5+ years of industry experience in a software engineering role, preferably building a SaaS product. You can demonstrate significant impact that your work has had on the product and/or the team.",
      "Experience with scalable distributed systems, both built from scratch as well as on AWS primitives.",
      "Extremely data-driven.",
      "Ability to debug complex systems.",
    ],
  },
  role: {
    content:
      "We are looking for a Senior Software Engineer to join as one of our first hires. As we iterate on our MVP, you will have the opportunity to drive the vision and own the build behind our digital experience. You’ll have the support of an experienced technical advisor, a Head of Product, and an external team to work with.",
    items: [
      "This role is for someone who is excited about the early stage - you’ll be responsible for turning the platform vision into reality through smart, efficient building and testing.",
      "Translate the product roadmap into engineering requirements and own the engineering roadmap",
      "Work with limited resources to test and learn as efficiently as possible, while laying the framework to build a more scalable product over time.",
      "Collaborate with product, design, and external engineering teammates as needed.",
    ],
  },
};

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
