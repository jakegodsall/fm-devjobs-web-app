import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";

import styles from "./FilterModal.module.css";

export default function FilterModal() {
  return (
    <Modal>
      <div className={styles.filterModal}>
        <Button>Search</Button>
      </div>
    </Modal>
  );
}
