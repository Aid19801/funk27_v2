import React, { ReactElement, useEffect, useState, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import * as moment from "moment";
import { fetchBlogPageByUID, useContent } from "../../api/requests";
import { RichText } from "prismic-reactjs";
//@ts-ignore
import AidLegoSVG from "../../svgs/aid_lego.svg";
import * as gtag from "../../lib/gtag";
import { SocialsVertical } from "../../components";
interface Props {
  ssrContent: object;
}

function BlogArticle({ ssrContent }: Props): ReactElement {
  const [content, setContent] = useState(ssrContent);
  const router = useRouter();
  let articleBodyRef = useRef(null);
  let bottomLegoHead = useRef(null);

  useEffect(() => {
    NProgress.done();
    //@ts-ignore
    gtag.pageview(router.query.slug);
  }, []);

  useEffect(() => {
    if (!content) {
      const { data, isLoading } = useContent("content", router.query.slug);
      //@ts-ignore
      setContent(data);
    }
  }, [content]);

  console.log("blog page content ", content);

  if (content) {
    return (
      <div className="blog__article">
        <Head>
          <title>
            {
              //@ts-ignore
              content.data["blog-title"][0].text
            }
          </title>

          <meta name="twitter:card" content="summary_large_image" />

          <meta
            name="twitter:image" //@ts-ignore
            content={content.data["blog-image-1"].twitter.url}
          />
          <meta name="twitter:creator" content="@aidThompsin" />
          <meta name="twitter:site" content="@funkTwentySeven" />

          <meta
            property="og:title"
            //@ts-ignore
            content={`Funk-27 | ${content.data["blog-title"][0].text}`}
            key="title"
          />

          <meta
            property="og:description"
            //@ts-ignore
            content={content.data["blog-body"][0].text}
            key="description"
          />

          <meta
            property="og:image"
            //@ts-ignore
            content={content.data["blog-image-1"].twitter.url}
            key="seo share image"
          />
        </Head>

        <section className="hero is-warning is-medium is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
              <RichText
                //@ts-ignore
                render={content.data["blog-title"]}
              />
            </div>
          </div>
        </section>

        <section className="articles">
          <div className="column is-8 is-offset-2">
            <div className="card article">
              <div className="card-content">
                <div className="media">
                  <div className="media-center">
                    <AidLegoSVG className="author-image" />
                  </div>

                  <div className="media-content has-text-centered responsive-card-author">
                    <p className="title article-title">Aid Thompson</p>
                    <p className="title article-title">
                      <em>Tech Lead | React Warlord | Exhausted Father</em>
                    </p>
                    <div className="tags has-addons level-item is-right">
                      <a
                        href="https://www.twitter.com/aidThompsin"
                        className="tag is-rounded is-info"
                      >
                        @aidThompsin
                      </a>
                      <span className="tag is-rounded">
                        {
                          //@ts-ignore
                          moment(content.first_publication_date).format(
                            "DD/MM/YYYY"
                          )
                        }
                      </span>
                    </div>
                  </div>
                </div>
                <div className="media">
                  <div
                    ref={articleBodyRef}
                    className="media-content has-text-centered blog__main-img"
                  >
                    <picture>
                      <source
                        // @ts-ignore
                        srcSet={content.data["blog-image-1"].mob.url}
                        // @ts-ignore
                        media="(max-width: 576px)"
                      />

                      <source
                        // @ts-ignore
                        srcSet={content.data["blog-image-1"].twitter.url}
                        // @ts-ignore
                        media="(max-width: 900px)"
                      />

                      <img
                        // @ts-ignore
                        src={content.data["blog-image-1"].url}
                        // @ts-ignore
                        alt={content.data["blog-image-1"].alt}
                      />
                    </picture>
                  </div>
                </div>
                <div className="content article-body">
                  <SocialsVertical ref={articleBodyRef} />
                  <RichText
                    //@ts-ignore
                    render={content.data["blog-body"]}
                  />

                  <div className="blog__article__svg_container">
                    <AidLegoSVG className="author-image-bottom" />
                  </div>
                </div>

                <div className="media">
                  <div ref={bottomLegoHead} className="media-center">
                    <AidLegoSVG className="author-image-bottom" />
                  </div>

                  <SocialsVertical ref={bottomLegoHead} />

                  <div className="media-content has-text-centered responsive-card-author">
                    <p className="title article-title">Aid Thompson</p>
                    <p className="title article-title">
                      <em>Tech Lead | React Warlord | Exhausted Father</em>
                    </p>
                    <div className="tags has-addons level-item is-right">
                      <a
                        href="https://www.twitter.com/aidThompsin"
                        className="tag is-rounded is-info"
                      >
                        @aidThompsin
                      </a>
                      <span className="tag is-rounded">
                        {
                          //@ts-ignore
                          moment(content.first_publication_date).format(
                            "DD/MM/YYYY"
                          )
                        }
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export async function getServerSideProps(context: any) {
  const ssrContent = await fetchBlogPageByUID("content", context.params.slug);
  return {
    props: {
      ssrContent,
    },
  };
}

export default BlogArticle;
