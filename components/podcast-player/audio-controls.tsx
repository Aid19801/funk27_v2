import React, { useState } from "react";
//@ts-ignore
import PlayButton from "./play.svg";
//@ts-ignore
import PauseButton from "./pause.svg";
//@ts-ignore
import SkipBack from "./back.svg";
//@ts-ignore
import SkipFwd from "./fwd.svg";

import styles from "./controls.module.scss";

// Audio Controls for Podcast Player //
function AudioControls({ skipBack, skipFwd, pauseAudio, playAudio }) {
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    playing ? pauseAudio() : playAudio();
    setPlaying(!playing);
  };

  const handleSkipBack = () => {
    skipBack();
  };

  const handleSkipFwd = () => {
    skipFwd();
  };
  return (
    <div className={styles.podcast_player__buttons_container}>
      <div onClick={handleSkipBack} className={styles.podcast_player__skipBack}>
        <SkipBack />
      </div>

      <div
        onClick={togglePlay}
        className={styles.podcast_player__playContainer}
      >
        {playing ? <PauseButton /> : <PlayButton />}
      </div>

      <div onClick={handleSkipFwd} className={styles.podcast_player__skipFwd}>
        <SkipFwd />
      </div>
    </div>
  );
}

export default AudioControls;
