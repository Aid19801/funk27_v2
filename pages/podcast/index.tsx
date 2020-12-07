import React, { ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import NProgress from "nprogress";
import { fetchPageByUID, useContent } from "../../api/requests";
import { FunkSpinner } from "../../components";

interface Props {
  ssrContent: object;
}

function PodcastHome({ ssrContent }: Props): ReactElement {
  const [content, setContent] = useState(ssrContent);

  const fetchContent = () => {
    const { data, isLoading } = useContent("content", "podcast");
    //@ts-ignore
    setContent(data);
  };

  const removeActiveClasses = () => {
    const panels = document.querySelectorAll(".panel");
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
  };

  const setupCarousel = () => {
    const panels = document.querySelectorAll(".panel");
    panels.forEach((panel) => {
      panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
      });
    });
  };

  useEffect(() => {
    NProgress.done();
    setupCarousel();
  }, []);

  useEffect(() => {
    if (!content) {
      fetchContent();
    }
  }, [content]);

  if (content) {
    console.log("content ", content);
    return (
      <div className="page__wrapper container">
        <Head>
          <title>Funk-27 | Podcast</title>
          <link rel="icon" href="/favicon.ico" />

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
          <section>
            <div className="carousel__container mt-50">
              <div
                className="panel active"
                style={{
                  //@ts-ignore
                  backgroundImage: `url('${content.data.hero_image.url}')`,
                }}
              >
                <h3>Aid Thompsin & Other Disappointments</h3>
              </div>
              <div
                className="panel"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1607286942757-d24fa3d66afb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=671&q=80')`,
                }}
              >
                <h3>#1 Emmett Short</h3>
              </div>
              <div
                className="panel"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1607038523484-203fe00e2465?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')`,
                }}
              >
                <h3>#2 Ashley Haden</h3>
              </div>
              <div
                className="panel"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1607292976966-c2a9aa8cbc28?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')`,
                }}
              >
                <h3>#3 Dapper Laughs</h3>
              </div>
              <div
                className="panel"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1607293861433-5d03a3e9fdd5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')`,
                }}
              >
                <h3>#4 Tom Pontin</h3>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  } else {
    return <FunkSpinner />;
  }
}

export async function getStaticProps() {
  const ssrContent = await fetchPageByUID("content", "podcast");
  return { props: { ssrContent } };
}

export default PodcastHome;
