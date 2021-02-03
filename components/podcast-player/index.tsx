import React, { useEffect, useRef, useState } from "react";
import Typing from "react-typing-animation";
//@ts-ignore
import PlayButton from "./play.svg";
//@ts-ignore
import PauseButton from "./pause.svg";
//@ts-ignore
import FacebookSVG from "./facebook.svg";
//@ts-ignore
import TwitterSVG from "./twitter.svg";
//@ts-ignore
import LinkedInSVG from "./linkedin.svg";

//@ts-ignore
import SkipBack from "./back.svg";
//@ts-ignore
import SkipFwd from "./fwd.svg";

//@ts-ignore
import EmailSVG from "./email.svg";
import AudioLevels from "./audio-levels";

import styles from "./podcast_player.module.scss";

const MyCursor = () => <h5>⬜️</h5>;

function PodcastPlayer({
  episodeNumber,
  episodeGuest,
  episodeTitle,
  podcastDescription,
  episodeDescription,
  podcastTitle,
  directUrl,
  episodeAudio,
}) {
  const [playing, setPlaying] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [orangeLine, setOrangeLineToShow] = useState(false);
  const [sidePanel, showSidePanel] = useState(false);
  const [aud, setAud] = useState(null);

  const handlePlayAudio = () => {
    aud.play();
    setPlaying(true);
    showSidePanel(false);
    setOrangeLineToShow(true);
  };

  const handlePauseAudio = () => {
    aud.pause();
    console.log("aud", aud.currentTime);
    setPlaying(false);
    showSidePanel(true);
    setOrangeLineToShow(true);
  };

  const handleSkipFwd = () => {
    // console.log("skip fwd");
    if (aud.HAVE_FUTURE_DATA === 3) {
      aud.currentTime = aud.currentTime + 10;
    }
    // console.log("FWD | aud current time is now ", aud.currentTime);
  };

  const handleSkipBack = () => {
    // console.log("skip back");
    // aud.pause();
    if (aud.HAVE_FUTURE_DATA === 3) {
      aud.currentTime = aud.currentTime - 10;
    }
    // console.log("BACK | aud current time is now ", aud.currentTime);
  };

  const drawOrangeLine = () => {
    setOrangeLineToShow(true);
    showSidePanel(true);
  };
  const killOrangeLine = () => {
    setOrangeLineToShow(false);
    showSidePanel(false);
  };

  useEffect(() => {
    setAud(new Audio(episodeAudio)); // load in mp3 of episode
    setSpinner(true);
  }, []);

  return (
    <div
      onMouseOver={drawOrangeLine}
      onMouseLeave={killOrangeLine}
      className={styles.podcast_player__container}
    >
      <div className={styles.podcast_player__bg} />
      <div
        className={orangeLine ? styles.orangeLineTop : styles.noOrangeLineTop}
      />

      <div className={sidePanel ? styles.sidePanel : styles.noSidePanel}>
        <p>
          <strong>
            #{episodeNumber} // {episodeGuest}
          </strong>
        </p>
        <br />
        {sidePanel && (
          <>
            <Typing
              speed={0}
              startDelay={1000}
              cursor={<MyCursor />}
              hideCursor={false}
            >
              <p>{episodeDescription}</p>
            </Typing>
          </>
        )}
      </div>

      <div
        onClick={handlePlayAudio}
        className={`${styles.podcast_player__playContainer} ${
          playing ? styles.fadeOut : ""
        }`}
      >
        <PlayButton />
      </div>

      {playing && (
        <>
          <div
            className={styles.podcast_player__skipBack}
            onClick={handleSkipBack}
          >
            <SkipBack />
          </div>

          <div
            onClick={handlePauseAudio}
            className={styles.podcast_player__playContainer}
          >
            <PauseButton />
          </div>

          <div
            className={styles.podcast_player__skipFwd}
            onClick={handleSkipFwd}
          >
            <SkipFwd />
          </div>
        </>
      )}

      {playing && <AudioLevels audioUrl={episodeAudio} />}

      <div className={styles.podcast_player__podcastTitleContainer}>
        <p>{podcastTitle}</p>
        <h4>{podcastDescription}</h4>
      </div>
      <div className={styles.podcast_imageContainer}>
        <img
          className={styles.podcast_player__image}
          src="/me_large.jpg"
          alt="podcast artwork"
        />
      </div>

      <div className={styles.podcast_wavImageContainer}>
        <img
          className={styles.podcast_wavImage}
          src="https://image.freepik.com/free-vector/sound-wave-with-imitation-sound-audio-identification-technology_106065-64.jpg"
          alt="podcast sound waves"
        />
        <div className={styles.podcast_wavImageVignette}></div>
      </div>
      <div className={orangeLine ? styles.orangeLine : styles.noOrangeLine} />

      <div className={styles.socialsContainer}>
        <div>
          <a
            target="_blank"
            href={`http://www.facebook.com/share.php?u=${directUrl}`}
          >
            <FacebookSVG />
          </a>
        </div>
        <div>
          <a
            href={`https://twitter.com/intent/tweet?text=Loving%20this%20podcast...%20${directUrl}`}
          >
            <TwitterSVG />
          </a>
        </div>
        <div>
          <a
            target="_blank"
            className="linkedin-share-button"
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${directUrl}`}
          >
            <LinkedInSVG />
          </a>
        </div>
        <div>
          <a
            target="_blank"
            className="email-share-button"
            href={`mailto:mum?subject=check%20out%20this%20podcast&body=Oi%20Oi%20-%20Found%20this%20podcast%20you%20might%20like...%20${directUrl}`}
          >
            <EmailSVG />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PodcastPlayer;
