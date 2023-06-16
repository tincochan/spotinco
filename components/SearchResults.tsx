import React from "react";
import styles from "../styles/SearchResults.module.scss";
import { Song } from "../types";
import SongCard from "./SongCard";

const SearchResults = (props: Song[]) => {
  //ehhhh
  let searchResults = props;

  return (
    <div className={styles.searchResultsDiv}>
      <h3>Search Results</h3>
      {searchResults ? (
        searchResults.map((song: Song) => {
          return (
            <SongCard
              name={song.name}
              id={song.id}
              explicit={song.explicit}
              href={song.href}
              uri={song.uri}
              duration={song.duration}
              artist={song.artist}
              album={{
                name: "",
                total_tracks: 0,
                release_date: "",
                images: undefined,
              }}
            />
          );
        })
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
