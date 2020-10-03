import React, { Fragment } from "react";
import { Navbar, Footer } from "../components";
import Head from "next/head";
import Router from "next/router";
import gsap from "gsap";
import "nprogress/nprogress.js";
import "nprogress/nprogress.css";
import "react-bulma-components/dist/react-bulma-components.min.css";

import * as gtag from '../lib/gtag';

import "../scss/global.scss";

gsap.registerPlugin();

Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));

export default ({ Component, pageProps }) => {
  const mouseMove = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `${e.pageY - 10}px`;
    cursor.style.left = `${e.pageX - 0}px`;
  };

  return (
    <Fragment>
      <div onMouseMove={(e) => mouseMove(e)}>
        <div className="cursor" />
        <Head>
          <link rel="shortcut icon" href="/vercel.ico" />
          <script src="../"></script>
          <link rel="stylesheet" href="nprogress.css" />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Fragment>
  );
};
