import Button from "../UI/Button/Button";
import Checkbox from "../UI/Checkbox/Checkbox";
import Modal from "../UI/Modal/Modal";

import styles from "./FilterModal.module.css";

export default function FilterModal() {
  return (
    <Modal>
      <form className={styles.filterModal}>
        <hr className={styles.filterModal__separator} />
        <div className={styles.filterModal__content}>
          <div className={styles.filterModal__fullTimeSection}>
            <Checkbox name="" id="full-time-only" />
            <label
              class={styles.filterModal_fullTimeLabel}
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
