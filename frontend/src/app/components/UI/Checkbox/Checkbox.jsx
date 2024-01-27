"use client";

import React, { useState } from "react";
import Image from "next/image";
import checkIcon from "@public/assets/desktop/icon-check.svg";
import styles from "./Checkbox.module.css";

export default function Checkbox({ name, id }) {
  const [isChecked, setIsChecked] = useState(false);

  function toggleCheckbox() {
    setIsChecked((prevState) => !prevState);
  }

  return (
    <>
      <div className={styles.checkbox}>
        <input
          className={styles.checkbox__original}
          type="checkbox"
          name={name}
          id={id}
          onChange={toggleCheckbox}
        />
        <div className={styles.checkbox__custom}>
          <Image
            className={`${styles.checkbox__tick} ${
              isChecked ? styles.checked : ""
            }`}
            src={checkIcon}
            alt="Checkbox tick"
          />
        </div>
      </div>
    </>
  );
}
