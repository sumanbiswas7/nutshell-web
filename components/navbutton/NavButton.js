import styles from "./NavButton.module.scss";
export function NavButton() {
  return (
    <div className={styles.nav_btn}>
      <div className={styles.nav_btn__line} id={styles.upper_line} />
      <div className={styles.nav_btn__line} id={styles.middle_line} />
      <div className={styles.nav_btn__line} id={styles.lower_line} />
    </div>
  );
}
