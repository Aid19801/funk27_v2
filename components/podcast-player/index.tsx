import React, { useEffect, useRef, useState } from "react";

//@ts-ignore
import AudioLevels from "./audio-levels";
import TitleDescription from "./title-description";
import EpisodeTitleDescription from "./episode-title-description";
import styles from "./podcast_player.module.scss";
import Socials from "./socials";
import AudioControls from "./audio-controls";

export interface PodcastPlayerProps {
  episodeTitle: string;
  podcastDescription: string;
  episodeDescription: string;
  podcastTitle: string;
  directUrl: string;
  episodeAudio: string;
}

export function PodcastPlayer({
  episodeTitle,
  podcastDescription,
  episodeDescription,
  podcastTitle,
  directUrl,
  episodeAudio,
}) {
  const [aud, setAud] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [showingInfoPanes, setInfoPanes] = useState(false);
  const playAudio = () => {
    aud.play();
    setPlaying(true);
  };
  const pauseAudio = () => {
    aud.pause();
    setPlaying(false);
  };
  const skipFwd = () => {
    // console.log("skip fwd");
    if (aud.HAVE_FUTURE_DATA === 3) {
      aud.currentTime = aud.currentTime + 10;
    }
    // console.log("FWD | aud current time is now ", aud.currentTime);
  };

  const skipBack = () => {
    if (aud.HAVE_FUTURE_DATA === 3) {
      aud.currentTime = aud.currentTime - 10;
    }
  };

  const handleMouseOver = () => {
    setInfoPanes(true);
  };
  const handleMouseLeave = () => {
    setInfoPanes(false);
  };

  useEffect(() => {
    setAud(new Audio(episodeAudio));
  }, []);

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className={styles.podcast_player__box_shadow}
    >
      <div className={styles.podcast_player__container}>
        <div className={styles.podcast_player__skewedBox}></div>
        <div className={styles.podcast_player__mainBox}>
          <div className={styles.podcast_player__content_container}>
            <TitleDescription
              title={podcastTitle}
              description={podcastDescription}
              show={showingInfoPanes}
            />
            {playing && <AudioLevels />}
            <AudioControls
              playAudio={playAudio}
              skipBack={skipBack}
              skipFwd={skipFwd}
              pauseAudio={pauseAudio}
            />

            <EpisodeTitleDescription
              title={episodeTitle}
              description={episodeDescription}
              show={showingInfoPanes}
            />
          </div>
          <div className={styles.podcast_player__wavBackgroundImg}></div>
          <div className={styles.podcast_player__bottomSocialsContainer}>
            <Socials directUrl={directUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PodcastPlayer;
