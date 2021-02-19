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
import {
  DisqusComments,
  CardPodcastLarge,
  PodcastPlayer,
} from "../../components";

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
    setContent(ssrContent);
    if (window && window.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [ssrContent]);

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
          <CardPodcastLarge
            guestPhoto={content.guest_photo.url}
            title={content.title1[0].text}
            description={content.description[0].text}
            appleLink={content.podcast_app_link.url}
            spotifyLink={content.spotify_link.url}
            youtubeLink={content.youtube_link.url}
            video={content.video.html}
          />
        </section>

        {/* <section>
          <div className="mt-50"></div>
          <PodcastPlayer
            episodeTitle={content.title1[0].text}
            podcastDescription="Lonely Father and 40 year-old failed comedian, Aid Thompsin, speaks to Techy/Science types to fuel his unhealthy interest in dystopia. Paul Giamatti stars."
            episodeDescription={content.description[0].text}
            podcastTitle="Aid Thompsin & Other Disappointments"
            directUrl="https://funk-27.co.uk/podcast/episode-7-matthew-james"
            episodeAudio="https://storage.pinecast.net/podcasts/e6552ddb-4376-43d5-9698-320f4c2e9098/audio/ab46af78-d1d4-4827-9bcd-2838a767be62/siodbiouads.mp3"
          />
          <div className="mt-50"></div>
        </section> */}

        <section className="comments-section w-100 mt-50">
          <DisqusComments
            //@ts-ignore
            url={`https://funk-27.co.uk/podcast/${content.episode_slug[0].text}`}
            //@ts-ignore
            identifier={content.episode_slug[0].text}
            //@ts-ignore
            title={content.title1[0].text}
          />
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
