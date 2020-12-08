import React, { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
//@ts-ignore
import PodcastAppSVG from "../../svgs/podcast_app.svg";
//@ts-ignore
import SpotifySVG from "../../svgs/spotify_svg.svg";
//@ts-ignore
import PinecastSVG from "../../svgs/pinecast.svg";
//@ts-ignore

import styles from "./cardPodcast.module.scss";
interface Props {
  title: string;
  description: string;
  routeName: string;
  guestPhoto: string;
  guestPhotoAlt: string;

  podcastAppLink: object;
  spotifyLink: object;
  youtubeLink: object;
  video: object;
}

function PodcastCard({
  title,
  description,
  guestPhoto,
  guestPhotoAlt,

  //@ts-ignore
  podcastAppLink: { url: appleUrl },
  //@ts-ignore
  spotifyLink: { url: spotifyUrl },
  //@ts-ignore
  youtubeLink: { url: youtubeUrl },
  video,
}: Props): ReactElement {
  return (
    <>
      <div className="flex-center flex-col">
        <img
          className="podcast__guest_photo"
          src={guestPhoto}
          alt={guestPhotoAlt}
        />
        <p className="podcast__shows_title">{title}</p>
        <div className="podcast__shows_descr_container">
          <p className="podcast__shows_descr">{description}</p>
        </div>

        <div className={styles.podcast__socials}>
          <a href={appleUrl} target="_blank">
            <img src="podcast_app.png" alt="apple podcasts" />
          </a>
          <a href={spotifyUrl} target="_blank">
            <img src="spotify.png" alt="spotify podcasts" />
          </a>
          <a href={youtubeUrl} target="_blank">
            <img src="youtube.png" alt="youtube podcasts" />
          </a>
        </div>
      </div>
    </>
  );
}

export default PodcastCard;
