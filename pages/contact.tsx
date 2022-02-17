import Footer from "../components/footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import type { NextPage } from "next";
import React from "react";
import styles from "../styles/Contact.module.css";

const Gallery: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>BlogJurczakit</title>
        <meta name="description" content="Gallery of BlogJurczakit" />
        <link rel="icon" href="/favicon_jurczak_it.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>
          <>Contact JurczakIt</>
        </h1>
      </header>
      <Navbar />
      <main className={styles.main}>
        <h2>You can contact us using:</h2>
        <Link href="mailto:sebastianjurczak.it">Mail: sebastian@jurczak.it</Link>
      </main>
      <Footer/>
    </div>
  );
};

export default Gallery;
