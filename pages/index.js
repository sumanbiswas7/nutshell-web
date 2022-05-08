import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import { NavButton } from "../components/navbutton/NavButton";
import { HiOutlineDownload } from "react-icons/hi";

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
        <div className={styles.section_1}>
          <a
            href="/"
            target={"_blank"}
            rel={"noreferrer"}
            className={styles.download_section}
          >
            <p>
              We have created a dummy app, you can download it here your overall
              app will look like this. But please remember that most of the
              things like themes, logos, fonts are customizable. And depending
              on the demand we will work on new templates as well.
            </p>
          </a>
        </div>
        <div className={styles.section_2}>
          <img
            src="/home/top_right_shape.svg"
            className={styles.section_2__top_right_shape}
          />
          <img
            src="/home/bottom_right_shape.svg"
            className={styles.section_2__bottom_right_shape}
          />
          <img src="/home/phone_mockup.webp" className={styles.mockup} />
          <a
            href="/"
            target={"_blank"}
            rel="noreferrer"
            className={styles.download_btn}
          >
            <HiOutlineDownload color="#FFF" size={30} />
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a></a>
      </footer>
    </div>
  );
}
