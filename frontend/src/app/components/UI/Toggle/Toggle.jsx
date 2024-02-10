import { motion } from "framer-motion";

import styles from "./Toggle.module.css";

export default function Toggle({ isToggled, toggle, hasMounted }) {
  return (
    <div className={styles.toggle}>
      <input
        type="checkbox"
        id="toggle"
        className={styles.toggle__input}
        onChange={toggle}
        checked={isToggled}
      />
      <label
        className={styles.toggle__label}
        htmlFor="toggle"
        data-isOn={isToggled}
      >
        <motion.div
          className={styles.toggle__handle}
          layout
          transition={spring}
        ></motion.div>
      </label>
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
