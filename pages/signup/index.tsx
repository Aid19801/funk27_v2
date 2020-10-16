import React, { ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import NProgress from "nprogress";
import { RichText } from "prismic-reactjs";
import { fetchPageByUID, useContent } from "../../api/requests";
import { FunkSpinner } from "../../components";
import { useRouter } from "next/router";

interface Props {
  ssrContent: object;
}

function Signup({ ssrContent }: Props): ReactElement {
  const [content, setContent] = useState(ssrContent);
  const router = useRouter();
  const fetchContent = () => {
    const { data, isLoading } = useContent("content", "signup");
    //@ts-ignore
    setContent(data);
  };

  useEffect(() => {
    NProgress.start();
    if (!content) {
      fetchContent();
    }
    NProgress.done();
  }, [content]);

  const handleStart = () => {
    return router.push("/signup/welcome");
  };

  if (content) {
    return (
      <div className="blog__home container">
        <Head>
          <title>Funk-27 | Signup</title>
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
          <section className="signup__title-section">
            <div className="container has-text-centered">
              <RichText
                //@ts-ignore
                render={content.data.title}
              />
            </div>
          </section>
          <section className="signup__msg-section">
            <div className="container is-fluid blog__home__top__banner">
              <div className="notification">
                <RichText
                  //@ts-ignore
                  render={content.data.sub_title}
                />
              </div>
            </div>
          </section>
          <section className="signup__msg-section">
            <Link href={"/signup/[slug]"} as="/signup/welcome">
              <a className="button is-warning">
                <strong>Begin Flow</strong>
              </a>
            </Link>
          </section>
        </main>
      </div>
    );
  } else {
    return <FunkSpinner />;
  }
}

export async function getStaticProps() {
  const ssrContent = await fetchPageByUID("content", "signup");
  return { props: { ssrContent } };
}

export default Signup;
