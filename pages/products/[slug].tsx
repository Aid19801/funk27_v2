import React, { ReactElement, useState, useEffect } from "react";
import Head from "next/head";
import { fetchPageByUID, useContent } from "../../api/requests";
import { Button } from "react-bulma-components/dist";
import { MarketStream, PodcastPlayer } from "../../components";
import { useRouter } from "next/router";

interface Props {
  ssrContent: object;
}

function Product({ ssrContent }: Props): ReactElement {
  const [content, setContent]: any = useState(ssrContent);
  const [demo, toggleDemo] = useState(false);
  const [productToDemo, setProductToDemo] = useState("");
  const router = useRouter();

  const handleDemoClick = () => {
    if (productToDemo === "SignupApp") {
      return router.push("/signup");
    }
    toggleDemo(!demo);
  };
  const handleOrder = () => {
    return router.push(`/contact?product=${productToDemo}`);
  };
  const whichProduct = () => {
    switch (content.product_slug[0].text) {
      case "products/podcast-player":
        setProductToDemo("PodcastPlayer");
        break;
      case "products/signup-app":
        setProductToDemo("SignupApp");
        break;
      case "products/market-stream":
        setProductToDemo("MarketStream");
      default:
        setProductToDemo("MarketStream");
    }
  };
  useEffect(() => {
    whichProduct();
  }, []);

  if (content) {
    console.log("Product Page Content: ", content);
    return (
      <div className="page__wrapper container">
        <Head>
          <title>Funk-27 | {content.product_name[0].text}</title>
        </Head>

        <main>
          <section>
            <div className="container has-text-centered product__wrapper">
              <h1 className="mt-50">{content.product_name[0].text}</h1>
              <h5 className="mt-50">{content.product_description[0].text}</h5>
              <img
                className="mt-50"
                src={content.product_image.url}
                alt="product"
              />
            </div>
          </section>
          <section className="mt-50 mb-50">
            <div className="w-100 space-evenly flex-row product-ctas">
              <Button onClick={handleDemoClick} color="warning">
                Demo
              </Button>
              <Button onClick={handleOrder} color="danger">
                Order
              </Button>
            </div>
          </section>
          {demo && productToDemo === "MarketStream" && (
            <MarketStream show={demo} />
          )}
          {demo && productToDemo === "PodcastPlayer" && (
            <>
              <PodcastPlayer
                episodeDescription="Here is a thing with some ipsum lorem. Today we discuss most of other things and i hope it's all good."
                episodeAudio="https://storage.pinecast.net/podcasts/e6552ddb-4376-43d5-9698-320f4c2e9098/audio/ab46af78-d1d4-4827-9bcd-2838a767be62/siodbiouads.mp3"
                directUrl="https://funk-27.co.uk/podcast/episode-7-matthew-james"
                episodeTitle="#7 // Matthew James"
                podcastTitle="Aid Thompsin & Other Disappointments"
                podcastDescription="Science, Tech & Comedy - each week Aid Thompsin & a guest attempt to find the funny in the modern world."
              />
              <div style={{ marginBottom: 300 }}></div>
            </>
          )}
        </main>
      </div>
    );
  } else {
    return <h1>loading...</h1>;
  }
}

export async function getServerSideProps(context: any) {
  const ssrContent: any = await fetchPageByUID("content", "products");
  const thisProduct = ssrContent.data.body[0].items.filter(
    (each) => each.product_slug[0].text === `products/${context.params.slug}`
  )[0];
  return {
    props: { ssrContent: thisProduct },
  };
}

export default Product;
