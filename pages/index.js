import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import { NavButton } from "../components/navbutton/NavButton";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nutshell</title>
        <meta name="description" content="Nutshell website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.navbar}>
          <img src="/logo_full.svg" className={styles.full_logo} />
          <div className={styles.navlinks_container}>
            <Link href="/">
              <a className={styles.nav_link}>Home</a>
            </Link>
            <Link href="/">
              <a className={styles.nav_link}>Apply</a>
            </Link>
            <Link href="/">
              <a className={styles.nav_link}>Contact</a>
            </Link>
            <NavButton />
          </div>
        </nav>
        <div className={styles.section_1}></div>
        <div className={styles.section_2}></div>
      </main>

      <footer className={styles.footer}>
        <a></a>
      </footer>
    </div>
  );
}
