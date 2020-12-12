import React, { ReactElement, useEffect, useState, useRef } from "react";
import styles from "./cardPodcastLarge.module.scss";
interface Props {
  guestPhoto: string;
  title: string;
  description: string;
  appleLink: string;
  spotifyLink: string;
  youtubeLink: string;
  video: any;
}

function PodcastCardLarge({
  guestPhoto,
  title,
  description,
  appleLink,
  spotifyLink,
  youtubeLink,
  video,
}: Props): ReactElement {
  return (
    <div
      id={styles.podcastShowPage}
      className={`${styles.podcast__show_page} card`}
    >
      <img
        className={styles.podcast__show_img}
        src={guestPhoto}
        alt="podcast guest"
      />
      <p className={styles.podcast__show_title}>{title}</p>
      <div className={styles.podcast__show_description}>
        <p>{description}</p>
      </div>

      <div className={styles.podcast__show__socials}>
        <a href={appleLink} target="_blank">
          <img src="../podcast_app.png" alt="apple podcasts" />
        </a>
        <a href={spotifyLink} target="_blank">
          <img src="../spotify.png" alt="spotify podcasts" />
        </a>
        <a href={youtubeLink} target="_blank">
          <img src="../youtube.png" alt="youtube podcasts" />
        </a>
      </div>

      <div
        className={styles.podcast__show__youtube}
        dangerouslySetInnerHTML={{
          __html: video,
        }}
      ></div>
    </div>
  );
}

export default PodcastCardLarge;
