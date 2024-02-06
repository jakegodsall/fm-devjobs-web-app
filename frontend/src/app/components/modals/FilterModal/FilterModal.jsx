import locationIcon from "@public/assets/desktop/icon-location.svg";

import Button from "../../UI/FormComponents/Button/Button";
import Checkbox from "../../UI/FormComponents/Checkbox/Checkbox";
import TextInput from "../../UI/FormComponents/TextInput/TextInput";
import Modal from "../../UI/Modal/Modal";

import styles from "./FilterModal.module.css";
import Image from "next/image";

export default function FilterModal({ closeModal }) {
  const handleClickModalContent = (e) => {
    e.stopPropagation();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className={styles.filterModal} onClick={handleClickModalContent}>
        <div className={styles.filterModal__topLine}>
          <Image src={locationIcon} alt="location" height="24" width="17" />
          <TextInput
            placeholder="Filter by location..."
            id="location-filter"
            name="location"
          />
        </div>
        <hr className={styles.filterModal__separator} />
        <div className={styles.filterModal__content}>
          <div className={styles.filterModal__fullTimeSection}>
            <Checkbox name="isFullTimeOnly" id="full-time-only" />
            <label
              className={styles.filterModal_fullTimeLabel}
              htmlFor="full-time-only"
            >
              Full Time Only
            </label>
          </div>
          <Button>Search</Button>
        </div>
      </div>
    </Modal>
  );
}
