import React, { useEffect } from "react";
import { setToken } from "../../utils";
import styles from "../../styles/Index.module.scss";

import MainCard from "../../components/MainCard";
import Head from "next/head";

const Discover = () => {
  const spotify = require("spotify-web-api-js");
  const s = new spotify();

  useEffect(() => {
    let url = window.location.href;
    setToken(url, s);
    document.location.hash = "welcome";
  }, []);
  return (
    <div className={styles.cardBackground}>
      <Head>
        <title>spotinco</title>
        <meta name="description" content="spotinco" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <MainCard />
    </div>
  );
};

export default Discover;
