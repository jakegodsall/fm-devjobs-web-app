"use client";

import React, { useState } from "react";

import styles from "./TextInput.module.css";

export default function TextInput({ name, id, placeholder }) {

  
  return (
    <input
      className={styles.textInput}
      name={name}
      id={id}
      type="text"
      placeholder={placeholder}
    />
  );
}
