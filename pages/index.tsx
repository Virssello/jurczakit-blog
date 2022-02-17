import Footer from "../components/footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import styles from "../styles/Welcome.module.css";

const Welcome: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>BlogJurczakit</title>
        <meta name="description" content="Welcome Page of BlogJurczakit" />
        <link rel="icon" href="/favicon_jurczak_it.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <>Welcome to Jurczakit Blog!</>
        </h1>
        <div className={styles.explore}>
          <h2>
            <Link href="/home">Check it out!</Link>
          </h2>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Welcome;
