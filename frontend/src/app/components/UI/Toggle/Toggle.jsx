import styles from "./Toggle.module.css";

export default function Toggle({ isToggled, toggle }) {
  return (
    <div className={styles.toggle}>
      <input
        type="checkbox"
        id="toggle"
        className={styles.toggle__input}
        onClick={toggle}
        value={isToggled}
      />
      <label className={styles.toggle__label} htmlFor="toggle"></label>
    </div>
  );
}
