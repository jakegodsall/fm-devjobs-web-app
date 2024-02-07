"use client";

import React, { useState } from "react";

import styles from "./TextInput.module.css";

export default function TextInput({ name, id, placeholder, value, onChange }) {
  return (
    <input
      className={styles.textInput}
      name={name}
      id={id}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
    />
  );
}
