import React, { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import styles from "./cardPodcast.module.scss";
interface Props {
  title: string;
  description: string;
  guestPhoto: string;
  guestPhotoAlt: string;

  podcastAppLink: object;
  spotifyLink: object;
  youtubeLink: object;
  video: object;
  episodeSlug: string;
  // seoImage: string;
}

function PodcastCardSmall({
  title,
  description,
  guestPhoto,
  guestPhotoAlt,
  episodeSlug,

  //@ts-ignore
  podcastAppLink: { url: appleUrl },
  //@ts-ignore
  spotifyLink: { url: spotifyUrl },
  //@ts-ignore
  youtubeLink: { url: youtubeUrl },
  video,
}: Props): ReactElement {
  const router = useRouter();

  const handleRoute = () => {
    return router.push("/podcast/[slug]", `/podcast/${episodeSlug}`);
  };
  return (
    <>
      <div className="flex-center flex-col">
        <img
          onClick={() => handleRoute()}
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

export default PodcastCardSmall;
