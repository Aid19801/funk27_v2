import React, { useRef, useEffect, useState } from "react";
import { useIntersection } from "react-use";
import Link from "next/link";
//@ts-ignore
import NextJSLogo from "../../svgs/nextjs.svg";
//@ts-ignore
import ReactLogo from "../../svgs/react_logo.svg";
//@ts-ignore
import ReduxLogo from "../../svgs/redux.svg";
//@ts-ignore
import SassLogo from "../../svgs/sass.svg";
//@ts-ignore
import NodeLogo from "../../svgs/node.svg";
//@ts-ignore
import GraphQLlogo from "../../svgs/GQL.svg";
//@ts-ignore
import CSSLogo from "../../svgs/css.svg";
//@ts-ignore
import FirebaseLogo from "../../svgs/firebase.svg";

import { TimelineMax, Power3 } from "gsap";

import styles from "./card.module.scss";

const SVGs = {
  node: NodeLogo,
  react: ReactLogo,
  redux: ReduxLogo,
  gql: GraphQLlogo,
  css: CSSLogo,
  scss: SassLogo,
  firebase: FirebaseLogo,
  next: NextJSLogo,
};
interface Props {
  title: string;
  text: string;
  techs: string[];
  imageOne: string;
  imageTwo: string;
  link: string;
}

function Card({ title, link, techs, imageOne, imageTwo, text }: Props) {
  return (
    <div className={styles.clientBox}>
      <div className={styles.firstSide}>
        <img id="img" src={imageOne} alt="client profile" />

        <div className={styles.clientBoxInfo}>
          <h4>{title}</h4>
          <div className={styles.builtWith}>
            <p>Built with: </p>

            <div className={styles.flexRow}>
              {techs.map((each: any, i: number) => {
                const SVGComponent = SVGs[each];
                return <SVGComponent key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.secondSide}>
        <img id="img" src={imageTwo} alt="client profile" />

        <div className={styles.moreInfo}>
          <p>{text}</p>
          {link && link.includes("http") ? (
            <a href={link} target="_blank">
              Take a look ▶️
            </a>
          ) : (
            <Link href="/products/[slug]" as={link}>
              <a>Take a Look internal</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
