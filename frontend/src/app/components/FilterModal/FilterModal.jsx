import Button from "../UI/FormComponents/Button/Button";
import Checkbox from "../UI/FormComponents/Checkbox/Checkbox";
import TextInput from "../UI/FormComponents/TextInput/TextInput";
import Modal from "../UI/Modal/Modal";

import styles from "./FilterModal.module.css";

export default function FilterModal() {
  return (
    <Modal>
      <form className={styles.filterModal}>
        <div className={styles.filterModall__topLine}>
          <TextInput
            placeholder="Filter by location..."
            id="location-filter"
            name="location-filter"
          />
        </div>
        <hr className={styles.filterModal__separator} />
        <div className={styles.filterModal__content}>
          <div className={styles.filterModal__fullTimeSection}>
            <Checkbox name="" id="full-time-only" />
            <label
              className={styles.filterModal_fullTimeLabel}
              htmlFor="full-time-only"
            >
              Full Time Only
            </label>
          </div>
          <Button>Search</Button>
        </div>
      </form>
    </Modal>
  );
}
