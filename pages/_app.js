import React, { Fragment } from "react";
import { Navbar, Footer } from "../components";
import Head from "next/head";
import Router from "next/router";
import gsap from "gsap";
import "nprogress/nprogress.js";
import "nprogress/nprogress.css";
import "react-bulma-components/dist/react-bulma-components.min.css";
import "../scss/global.scss";

import * as gtag from '../lib/gtag';

gsap.registerPlugin();

Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));

export default ({ Component, pageProps }) => {
  const mouseMove = (e) => {
    // const cursor = document.querySelector(".cursor");
    // cursor.style.top = `${e.pageY - 10}px`;
    // cursor.style.left = `${e.pageX - 0}px`;
  };

  return (
    <Fragment>
      <div onMouseMove={(e) => mouseMove(e)}>
        {/* <div className="cursor" /> */}
        <Head>
        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-MBP8MB8"></script>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        />
        
          <link rel="shortcut icon" href="/vercel.ico" />
          <script src="../"></script>
          <link rel="stylesheet" href="nprogress.css" />
          
          <link rel="stylesheet" type="text/css" href="https://media.disquscdn.com/disqus-install-examples/assets/css/kube.min.css" />

        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Fragment>
  );
};
