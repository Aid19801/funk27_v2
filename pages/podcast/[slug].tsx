import React, { ReactElement, useEffect, useState, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import * as moment from "moment";
import { fetchPageByUID, useContent } from "../../api/requests";
import { RichText } from "prismic-reactjs";
//@ts-ignore
import AidLegoSVG from "../../svgs/aid_lego.svg";
import * as gtag from "../../lib/gtag";
import { DisqusComments } from "../../components";

interface Props {
  ssrContent: object;
}

// remove logs

function PodcastEpisode({ ssrContent }: Props): ReactElement {
  const [content, setContent]: any = useState(ssrContent);
  const router = useRouter();

  useEffect(() => {
    NProgress.done();
    //@ts-ignore
    // gtag.pageview(router.query.slug);
  }, []);

  useEffect(() => {
    console.log("content", content);
  }, [content]);
  return (
    <div className="page__wrapper container">
      <Head>
        <title>Funk-27 | {content.title1[0].text}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:image" //@ts-ignore
          content={content.podc_ep_twitter_img.url}
        />
        <meta name="twitter:creator" content="@aidThompsin" />
        <meta name="twitter:site" content="@funkTwentySeven" />

        <meta
          property="og:title"
          //@ts-ignore
          content={`Funk-27 | ${content.title1[0].text}`}
          key="title"
        />

        <meta
          property="og:description"
          //@ts-ignore
          content={content.description[0].text}
          key="description"
        />

        <meta
          property="og:image"
          //@ts-ignore
          content={content.podc_ep_twitter_img.url}
          key="seo share image"
        />
      </Head>

      <main>
        <section>
          <div className="podcast__show_page card flex-center flex-col mt-50">
            <img
              className="rounded border-orange mt-50"
              src={content.guest_photo.url}
              alt="podcast guest"
            />
            <p className="mt-50">{content.title1[0].text}</p>
            <div className="flex-center mt-50">
              <p>{content.description[0].text}</p>
            </div>

            <div className="podcast__show__socials">
              <a href={content.podcast_app_link.url} target="_blank">
                <img src="../podcast_app.png" alt="apple podcasts" />
              </a>
              <a href={content.spotify_link.url} target="_blank">
                <img src="../spotify.png" alt="spotify podcasts" />
              </a>
              <a href={content.youtube_link.url} target="_blank">
                <img src="../youtube.png" alt="youtube podcasts" />
              </a>
            </div>

            <div
              className="podcast__show__youtube mt-50"
              dangerouslySetInnerHTML={{
                __html: content.video.html,
              }}
            ></div>
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const ssrContent: any = await fetchPageByUID("content", "podcast");
  const thisEpisode = ssrContent.data.body[0].items.filter(
    (each) => each.episode_slug[0].text === context.params.slug
  )[0];

  return {
    props: { ssrContent: thisEpisode },
  };
}

export default PodcastEpisode;
