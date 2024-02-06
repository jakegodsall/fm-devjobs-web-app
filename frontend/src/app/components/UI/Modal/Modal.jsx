"use client";

import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

export default function Modal({ isOpen, onClose, children, closeModal }) {
  const handleCloseModal = (e) => {
    closeModal();
  };

  return (
    <div className={styles.modalBackdrop} onClick={handleCloseModal}>
      {children}
    </div>
  );
}
