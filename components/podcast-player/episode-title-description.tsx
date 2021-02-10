import React, { useEffect, useRef, useState } from "react";
import Typing from "react-typing-animation";
import styles from "./episode_title_desc.module.scss";

const MyCursor = () => <h5>⬜️</h5>;

function EpisodeTitleDescription({ title, description, show }) {
  // const [aud, setAud] = useState(null);
  // const [playing, setPlaying] = useState(false);
  // const playAudio = () => {
  //   aud.play();
  // };
  console.log("show? ", show);
  return (
    <div
      className={`${styles.podcast_player__episodeTitleDescription} ${
        show ? styles.showInfo : styles.hideInfo
      } `}
    >
      <h4>{title}</h4>
      <Typing
        speed={0}
        startDelay={1000}
        cursor={<MyCursor />}
        hideCursor={false}
      >
        <h5>{description}</h5>
      </Typing>
    </div>
  );
}

export default EpisodeTitleDescription;
