import styles from "./apply.module.scss";
export default function ApplyScreen() {
  return (
    <div className={styles.screen}>
      <form className={styles.section_1}>
        <h4 className={styles.section_1__header}>APPLY FOR YOUR APP</h4>
        <input className={styles.section_1__input} placeholder="FULL NAME *" />
        <input
          className={styles.section_1__input}
          placeholder="EMAIL ADDRESS *"
        />
        <input
          className={styles.section_1__input}
          placeholder="WHATSAPP NUMBER"
        />
        <button className={styles.section_1__button}>SEND</button>
      </form>
      <div className={styles.section_2}></div>
    </div>
  );
}
