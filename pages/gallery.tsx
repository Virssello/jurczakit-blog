import Footer from "../components/footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import type { NextPage } from "next";
import React from "react";
import styles from "../styles/Gallery.module.css";

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
          <>Gallery JurczakIt</>
        </h1>
      </header>
      <Navbar />
      <main className={styles.main}>
        <h2>Projects we have completed</h2>
        <div className={styles.photos}>
          <figure>
            <Image
              src="/website1.png"
              height={300}
              width={600}
              alt="website1"
            ></Image>
          </figure>
          <figure>
            <Image
              src="/website2.jpg"
              height={300}
              width={600}
              alt="website2"
            ></Image>
          </figure>
          <figure>
            <Image
              src="/website3.jpg"
              height={300}
              width={600}
              alt="website3"
            ></Image>
          </figure>
          <figure>
            <Image
              src="/website4.jpg"
              height={300}
              width={600}
              alt="website4"
            ></Image>
          </figure>
          <figure>
            <Image
              src="/website5.png"
              height={300}
              width={600}
              alt="website5"
            ></Image>
          </figure>
          <figure>
            <Image
              src="/website6.jpg"
              height={300}
              width={600}
              alt="website6"
            ></Image>
          </figure>
          <figure>
            <Image
              src="/website7.jpg"
              height={300}
              width={600}
              alt="website7"
            ></Image>
          </figure>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
