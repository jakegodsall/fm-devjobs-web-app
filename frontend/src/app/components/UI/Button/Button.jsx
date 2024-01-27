"use client";

import styles from "./Button.module.css";

export default function Button({ children }) {
  function onClickHandler(event) {
    event.preventDefault();
  }

  return (
    <button onClick={() => onClickHandler} className={styles.button}>
      {children}
    </button>
  );
}
