import Link from "next/link";
import styles from "./DownloadButton.module.scss";

export function DownloadButton() {
  return (
    <Link href={"/"}>
      <a target={"_blank"} rel="noreferrer" className={styles.button_container}>
        <p className={styles.button_container__text}>DOWNLOAD</p>
        <img
          src="/home/download_icon.svg"
          className={styles.button_container__img}
        />
      </a>
    </Link>
  );
}
