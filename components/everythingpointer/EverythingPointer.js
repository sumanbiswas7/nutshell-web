import styles from "./EverythingPointer.module.scss";

export function EverythingPointer() {
  return (
    <div className={styles.container}>
      <img src="/components/arrow.svg" className={styles.container__arrow} />
      <p className={styles.container__text}>Everything you need to know</p>
    </div>
  );
}
