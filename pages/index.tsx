import type { NextPage } from "next";
import { useEffect } from "react";
import { setToken } from "../utils";
import styles from "../styles/Index.module.scss";
import MainCard from "../components/MainCard";
import Head from "next/head";

const Home: NextPage = () => {
  const spotify = require("spotify-web-api-js");
  const s = new spotify();

  useEffect(() => {
    let url = window.location.href;
    setToken(url, s);
    document.location.hash = "welcome";
  }, []);
  return (
    <div className={styles.mainBackground}>
      <Head>
        <title>spotinco</title>
        <meta name="description" content="spotinco" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <div className={styles.fauxNav}>
        <h1>spotinco</h1>
      </div>
      <MainCard />
    </div>
  );
};

export default Home;
