import React, { ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import Fade from "react-reveal/Fade";
import NProgress from "nprogress";
import { fetchPageByUID, useContent } from "../../api/requests";
import { FunkSpinner, CardPodcastSmall } from "../../components";

interface Props {
  ssrContent: object;
}

// updated...
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
          <meta name="twitter:site" content="@aidThompsin" />

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
                <h3>Every Friday</h3>
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
              <h4
                style={{
                  color: "white",
                  fontWeight: 700,
                  background: "lightgrey",
                  padding: 10,
                  marginBottom: 20,
                }}
              >
                Season 2
              </h4>
              <ul>
                {
                  //@ts-ignore
                  content.data.body[0].items.map((each, i) => {
                    return (
                      <>
                        <Fade>
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
                        </Fade>
                      </>
                    );
                  })
                }
              </ul>
              <h4
                style={{
                  color: "white",
                  fontWeight: 700,
                  background: "lightgrey",
                  padding: 10,
                  marginBottom: 20,
                }}
              >
                Season 1
              </h4>
              <ul>
                {
                  //@ts-ignore
                  content.data.body[1].items.map((each, i) => {
                    return (
                      <>
                        <Fade>
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
                        </Fade>
                      </>
                    );
                  })
                }
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
