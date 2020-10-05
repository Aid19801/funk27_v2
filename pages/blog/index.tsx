import React, { ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import NProgress from "nprogress";
import { fetchPageByUID, useContent } from "../../api/requests";
import {
  BlogPreviewCard,
  FunkSpinner,
  SearchBar,
  Filters,
} from "../../components";

interface Props {
  ssrContent: object;
}

function BlogHome({ ssrContent }: Props): ReactElement {
  const [content, setContent] = useState(ssrContent);
  const [killFilters, toggleKillFilters] = useState(false);

  const fetchContent = () => {
    const { data, isLoading } = useContent("content", "blog-home-page");
    //@ts-ignore
    setContent(data);
  };

  useEffect(() => {
    NProgress.done();
  }, []);

  useEffect(() => {
    if (!content) {
      fetchContent();
    }
  }, [content]);

  const handleUpdatedSearchResults = async (res) => {
    if (res === [] || !res || res.length < 1) {
      const refreshedContent: any = await fetchPageByUID(
        "content",
        "blog-home-page"
      );
      setContent(refreshedContent);
    } else {
      const updated = {
        ...content,
        data: {
          //@ts-ignore
          ...content.data,
          blogs: res,
        },
      };
      setContent(updated);
    }
  };

  const handleUpdatedOldestFirst = () => {
    //@ts-ignore
    const sorted = content.data.blogs.sort((a, b) =>
      a.blog.data.date > b.blog.data.date
        ? 1
        : b.blog.data.date > a.blog.data.date
        ? -1
        : 0
    );

    const updated = {
      ...content,
      data: {
        //@ts-ignore
        ...content.data,
        //@ts-ignore
        blogs: sorted,
      },
    };
    setContent(updated);
  };

  const handleUpdatedNewestFirst = async () => {
    //@ts-ignore
    const sorted = content.data.blogs
      .sort((a, b) =>
        a.blog.data.date > b.blog.data.date
          ? 1
          : b.blog.data.date > a.blog.data.date
          ? -1
          : 0
      )
      .reverse();

    const updated = {
      ...content,
      data: {
        //@ts-ignore
        ...content.data,
        //@ts-ignore
        blogs: sorted,
      },
    };
    setContent(updated);
  };

  const handleUpdatedJustBlogs = () => {
    toggleKillFilters(true);
    //@ts-ignore
    const justBlogsArray = content.data.blogs.filter((each) =>
      each.blog.tags.includes("blog")
    );

    const updated = {
      ...content,
      data: {
        //@ts-ignore
        ...content.data,
        //@ts-ignore
        blogs: justBlogsArray,
      },
    };
    setContent(updated);
  };

  const handleUpdatedJustTutorials = () => {
    toggleKillFilters(true);
    //@ts-ignore
    const justTutorialsArray = content.data.blogs.filter((each) =>
      each.blog.tags.includes("tutorial")
    );

    const updated = {
      ...content,
      data: {
        //@ts-ignore
        ...content.data,
        //@ts-ignore
        blogs: justTutorialsArray,
      },
    };
    setContent(updated);
  };

  const handleUpdatedResetAll = async () => {
    toggleKillFilters(false);
    const refreshedContent: any = await fetchPageByUID(
      "content",
      "blog-home-page"
    );
    setContent(refreshedContent);
  };
  if (content) {
    return (
      <div className="blog__home container">
        <Head>
          <title>Funk-27 | Blog</title>
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
            content={content.data.first_section[0].text}
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
            <div className="container is-fluid blog__home__top__banner">
              <div className="notification">
                Welcome to my bloody blog. There's not a great deal here yet,
                but what there is, is yours. Plus it's free so just enjoy it and
                be nice, alright?
              </div>
            </div>
          </section>

          <section>
            <div className="container is-fluid searchAndFilters__container">
              <Filters
                //@ts-ignore
                arrayToFilter={content.data.blogs}
                handleOldestFirst={handleUpdatedOldestFirst}
                handleNewestFirst={handleUpdatedNewestFirst}
                handleJustBlogs={handleUpdatedJustBlogs}
                handleJustTutorials={handleUpdatedJustTutorials}
                handleReset={handleUpdatedResetAll}
                killFilters={killFilters}
              />
              <SearchBar
                //@ts-ignore
                arrayOfOptions={content.data.blogs}
                handleUpdatedOptions={handleUpdatedSearchResults}
              />
            </div>
          </section>

          <section className="blogs__section">
            <div className="columns is-multiline">
              {
                // @ts-ignore
                content.data.blogs.map((each, i) => (
                  <BlogPreviewCard key={i} {...each.blog} />
                ))
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
  const ssrContent = await fetchPageByUID("content", "blog-home-page");
  return { props: { ssrContent } };
}

export default BlogHome;
