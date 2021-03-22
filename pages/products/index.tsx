import React, { ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import NProgress from "nprogress";
import { RichText } from "prismic-reactjs";
import { fetchPageByUID, useContent } from "../../api/requests";
import { Card, FunkSpinner, PodcastPlayer } from "../../components";

interface Props {
  ssrContent: object;
}

function Products({ ssrContent }: Props): ReactElement {
  const [content, setContent] = useState(ssrContent);
  const fetchContent = () => {
    const { data, isLoading } = useContent("content", "products");
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

  //@ts-ignore
  if (content && content.data && content.data.body) {
    return (
      <div className="blog__home container">
        <Head>
          <title>Funk-27 | Products</title>
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
          <section>
            <div className="products__stackable_cubes">
              {
                //@ts-ignore
                content &&
                  //@ts-ignore
                  content.data.body[0].items.map((each, i) => {
                    return (
                      <Card
                        key={i}
                        title={each.product_name[0].text}
                        text={each.product_description[0].text}
                        link={`/${each.product_slug[0].text}`}
                        techs={["react", "scss"]}
                        imageOne={each.product_image.url}
                        imageTwo={each.product_image.url}
                      />
                    );
                  })
              }
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
  const ssrContent = await fetchPageByUID("content", "products");
  return { props: { ssrContent } };
}

export default Products;
