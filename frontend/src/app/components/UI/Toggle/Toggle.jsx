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
      <label className={styles.toggle__label} htmlFor="toggle"></label>
    </div>
  );
}
