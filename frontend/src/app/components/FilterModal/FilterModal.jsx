import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";

import styles from "./FilterModal.module.css";

export default function FilterModal() {
  return (
    <Modal>
      <form className={styles.filterModal}>
        <hr />
        <div className={styles.filterModal__content}>
          <div className={styles.filterModal__fullTimeSection}>
            <input type="checkbox" name="" id="full-time-only" />
            <label htmlFor="full-time-only">Full Time Only</label>
          </div>
          <Button>Search</Button>
        </div>
      </form>
    </Modal>
  );
}
