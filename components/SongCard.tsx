import React from "react";
import styles from "../styles/SongCard.module.scss";
import { Song } from "../types";

const SongCard = ({
  id,
  name,
  explicit,
  href,
  duration,
  uri,
  artist,
  album,
  images,
}: Song) => {
  return (
    <div id={id} className={styles.songCard}>
      <div>
        <h3>{name}</h3>
        <p></p>
      </div>

      {/* <div>
        {artist ? (
          <p key={id}>Artists: {artist.join(", ")}</p>
        ) : (
          <p key={id}>No Artist information available</p>
        )}
      </div> */}
    </div>
  );
};

export default SongCard;
