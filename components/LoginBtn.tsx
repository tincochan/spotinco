import React from "react";
import styles from "../styles/LoginBtn.module.scss";
import Image from "next/image";
import { CLIENT_ID, BASE_URL, generateRandomString } from "../utils";

const LoginBtn = () => {
  const login = () => {
    const state = generateRandomString(16);
    const scope = "user-read-private user-read-email";
    const url = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${BASE_URL}&scope=${scope}&state=${state}`;
    window.location.href = url;
  };

  return (
    <div className={styles.triangle}>
      <div className={styles.btnWrapper}>
        <button type="button" className={styles.loginBtn} onClick={login}>
          <Image
            src="/assets/spotify-white.png"
            alt="Spotify Logo"
            width="32"
            height="32"
          />
          <span>Connect with your Spotify account</span>
        </button>
        <h4>
          Pick a genre, turn up the volume, and get ready to explore new music!
        </h4>
      </div>
    </div>
  );
};

export default LoginBtn;
