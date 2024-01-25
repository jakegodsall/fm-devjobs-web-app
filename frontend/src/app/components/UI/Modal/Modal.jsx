"use client";

import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

export default function Modal({ isOpen, onClose, children }) {
  return <div className={styles.modalBackdrop}>{children}</div>;
}
