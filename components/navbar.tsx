import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar: NextPage = () => {
  return (

<menu className={styles.menu}>
        <Link href="/home">About Us </Link>
        <Link href="/gallery">Gallery </Link>
        <Link href="/contact">Contact </Link>
      </menu>
  )}

  export default Navbar;