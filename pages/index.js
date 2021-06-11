import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="Ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
          deserunt obcaecati officiis nihil provident commodi saepe sed
          dignissimos ad natus atque animi, quibusdam rerum quis sint molestias
          laudantium dolorum facere.
        </p>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          modi iure ex veniam, delectus nemo quam pariatur voluptatem vel beatae
          dolore tempora quia accusantium maxime magni odio? Maiores, illo quo!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
