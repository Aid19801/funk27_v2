import React, { ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import NProgress from "nprogress";
import { fetchPageByUID, useContent } from "../api/requests";
import {
  ScrollFadeSection,
  ScrollFadeSmokeBar,
  HeroSection,
  FunkSpinner,
} from "../components";

interface Props {
  ssrContent: {
    data: {
      hero_image: object;
      title: object;
    };
  };
}

function Home({ ssrContent }: Props): ReactElement {
  const [content, setContent] = useState(ssrContent);

  useEffect(() => {
    NProgress.done();
    if (!content) {
      const { data, isLoading } = useContent("content", "home-page");
      //@ts-ignore
      setContent(data);
    }
  }, [content]);

  if (content) {
    return (
      <div className="container">
        <Head>
          <title>Funk-27 | Home</title>

          <meta name="twitter:card" content="summary_large_image" />

          <meta
            name="twitter:image" //@ts-ignore
            content={content.data["twitter_image"].url}
          />
          <meta name="twitter:creator" content="@aidThompsin" />
          <meta name="twitter:site" content="@funkTwentySeven" />

          <meta
            property="og:title"
            //@ts-ignore
            content={`Funk-27 | ${content.data.title[0].text}`}
            key="title"
          />

          <meta
            property="og:description"
            //@ts-ignore
            content={content.data.sub_title[0].text}
            key="description"
          />

          <meta
            property="og:image"
            //@ts-ignore
            content={content.data.twitter_image.url}
            key="seo share image"
          />
        </Head>

        <main>
          <HeroSection
            heroImage={content.data.hero_image}
            heroTitle={content.data.title}
          />

          <ScrollFadeSection />

          <ScrollFadeSmokeBar text="Code | Build | Create" />
        </main>
      </div>
    );
  } else {
    return <FunkSpinner />;
  }
}

export async function getStaticProps() {
  const ssrContent = await fetchPageByUID("content", "home-page");
  return { props: { ssrContent } };
}

export default Home;
