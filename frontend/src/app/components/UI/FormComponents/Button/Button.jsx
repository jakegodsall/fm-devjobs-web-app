"use client";

import clsx from "clsx";
import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary",
  type = "submit",
}) {
  function onClickHandler(event) {
    event.preventDefault();
  }

  return (
    <button
      type={type}
      onClick={() => onClickHandler}
      className={clsx(
        styles.button,
        variant === "primary" && styles.button___primary,
        variant === "secondary" && styles.button___secondary
      )}
    >
      {children}
    </button>
  );
}
