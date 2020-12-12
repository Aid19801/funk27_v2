import React, { ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import NProgress from "nprogress";
import { fetchPageByUID, useContent } from "../../api/requests";
import { FunkSpinner, CardPodcastSmall } from "../../components";

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
    sessionStorage.removeItem("selectedPodcast");
    NProgress.done();
    setupCarousel();
  }, []);

  useEffect(() => {
    if (!content) {
      fetchContent();
    }
  }, [content]);

  if (content) {
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
                  backgroundImage: `url('pod_me_with_desk.JPG')`,
                }}
              >
                <h3>Tech // Politics // Comedy</h3>
              </div>

              <div
                className="panel"
                style={{
                  backgroundImage: `url('pod_me_emmett3.png')`,
                }}
              >
                <h3>Insightful Guests</h3>
              </div>

              <div
                className="panel"
                style={{
                  backgroundImage: `url('pod_ur_what_ulisten_to.jpg')`,
                }}
              >
                <h3>Every Thursday</h3>
              </div>

              <div
                className="panel"
                style={{
                  backgroundImage: `url('pod_pro_shot.jpg')`,
                }}
              >
                <h3>On all platforms.</h3>
              </div>
            </div>
          </section>

          <section className="podcast__shows_section mt-50">
            <div className="podcast__shows__container">
              <ul>
                {
                  //@ts-ignore
                  content.data.body[0].items.map((each, i) => {
                    return (
                      <li className="show__card" key={i}>
                        <CardPodcastSmall
                          title={each.title1[0].text}
                          description={each.description[0].text}
                          guestPhoto={each.guest_photo.url}
                          guestPhotoAlt={each.guest_photo.alt}
                          podcastAppLink={each.podcast_app_link}
                          spotifyLink={each.spotify_link}
                          youtubeLink={each.youtube_link}
                          video={each.video}
                          episodeSlug={each.episode_slug[0].text}
                        />
                      </li>
                    );
                  })
                }

                <li className="show__card">
                  <img
                    className="podcast__guest_photo grayscale"
                    src="pod_dapper_headshot.jpg"
                    alt="podcast guest"
                  />
                  <p className="podcast__shows_title">
                    #3 Dapper Laughs [soon]
                  </p>
                  <div className="podcast__shows_descr_container">
                    <p className="podcast__shows_descr">
                      From 6-second Vines to being hauled onto Newsnight, Dapper
                      Laughs went on quite the journey. Here he talks about
                      Social Media and pivoting to live promotions.
                    </p>
                  </div>
                </li>
                <li className="show__card">
                  <img
                    className="podcast__guest_photo grayscale"
                    src="pod_tom_headshot.jpg"
                    alt="podcast guest"
                  />
                  <p className="podcast__shows_title">#4 Tom Pontin [soon]</p>
                  <div className="podcast__shows_descr_container">
                    <p className="podcast__shows_descr">
                      Tom Pontin is a Financier with a decade of investment
                      behind him. On this episode we discuss how money is
                      created, how it moves, the threat & opportunities of
                      crypto-currency and more.
                    </p>
                  </div>
                </li>
              </ul>
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
