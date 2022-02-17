import Footer from "../components/footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import type { NextPage } from "next";
import React from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>BlogJurczakit</title>
        <meta name="description" content="Home Page of BlogJurczakit" />
        <link rel="icon" href="/favicon_jurczak_it.ico" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <>Home Page JurczakIt</>
        </h1>
      </header>

        <Navbar/>
      <main className={styles.main}>
        <div className={styles.maininfo}>
          Commodo ea officia minim et id id ex exercitation ut. Deserunt commodo
          eiusmod ea magna Lorem aute sunt labore voluptate laboris. Duis
          officia laboris laborum cupidatat aliquip officia esse quis ad cillum
          eiusmod pariatur. Proident mollit do aliquip nostrud ullamco eiusmod
          non deserunt id. Do sint ipsum dolor sunt est et. Cillum minim
          proident excepteur velit eiusmod. Quis excepteur amet fugiat velit
          anim nulla laborum laborum eu incididunt amet.
          <Image
            src="/employee_photo.png"
            height={600}
            width={400}
            alt="Image of our employers"
          ></Image>
        </div>

        <div className={styles.opportunities}>
          <figure>
            <Image
              src="/rocket.gif"
              height={100}
              width={100}
              alt="rocket"
            ></Image>
            <figcaption>
              We create your projects as fast as it is possible on the market
            </figcaption>
          </figure>
          <figure>
            <Image
              src="/social-care.gif"
              height={100}
              width={100}
              alt="social care"
            ></Image>
            <figcaption>We care about our clients and their needs</figcaption>
          </figure>
          <figure>
            <Image
              src="/presentation.gif"
              height={100}
              width={100}
              alt="presentation"
            ></Image>
            <figcaption>With us your company can only rise up</figcaption>
          </figure>
        </div>

        <div className={styles.services}>
        <h2>In our company we offer for you:</h2>
          <figure>
            <Image
              src="/shopping-cart.gif"
              height={100}
              width={100}
              alt="shopping cart"
            ></Image>
            <figcaption>We can create your own shop</figcaption>
          </figure>

          <figure>
            <Image
              src="/pencil.gif"
              height={100}
              width={100}
              alt="pencil"
            ></Image>
            <figcaption>You can have your blog</figcaption>
          </figure>

          <figure>
            <Image
              src="/id.gif"
              height={100}
              width={100}
              alt="id"
            ></Image>
            <figcaption>We can make your portfolio website</figcaption>
          </figure>

          <figure>
            <Image
              src="/smartphone.gif"
              height={100}
              width={100}
              alt="smartphone"
            ></Image>
            <figcaption>We are making mobile apps</figcaption>
          </figure>
        </div>
      </main>
        <Footer/>
    </div>
  );
};

export default Home;
