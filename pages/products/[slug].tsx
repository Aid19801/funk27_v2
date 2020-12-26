import React, { ReactElement, useState } from "react";
import Head from "next/head";
import { fetchPageByUID, useContent } from "../../api/requests";
import { Button } from "react-bulma-components/dist";
import { MarketStream } from "../../components";
import dynamic from "next/dynamic";

// const DynamicMarketStream = dynamic(import("../../components/market-stream"));
// const DynamicMarketStream = dynamic(
//   () => import("../../components/market-stream")
// );

interface Props {
  ssrContent: object;
}

function Product({ ssrContent }: Props): ReactElement {
  const [content, setContent]: any = useState(ssrContent);
  const [demo, toggleDemo] = useState(true);

  const toggleMarketData = () => toggleDemo(!demo);

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
              <Button onClick={toggleMarketData} color="warning">
                Demo
              </Button>
              <Button onClick={() => null} color="danger">
                Order
              </Button>
            </div>
          </section>
          {demo && <MarketStream show={demo} />}
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
