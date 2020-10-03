import React, { useRef, useEffect, useState } from "react";
import gsap, { TimelineMax, Power3 } from "gsap";
import { useIntersection } from "react-use";
//@ts-ignore
import FacebookSVG from "../../svgs/facebook.svg";
//@ts-ignore
import TwitterSVG from "../../svgs/twitter.svg";
//@ts-ignore
import LinkedinSVG from "../../svgs/linkedin.svg";
//@ts-ignore
import MessengerSVG from "../../svgs/messenger.svg";
import styles from "./socials-vertical.module.scss";
import { useRouter } from "next/router";

const SocialsVertical = React.forwardRef((props, parentRef: any) => {
  const router = useRouter();
  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);
  const refFour = useRef(null);

  const intersectionArticle = useIntersection(parentRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  });

  const fadeInSocials = () => {
    let scatterInTl = new TimelineMax();
    scatterInTl
      //@ts-ignore
      .staggerFromTo(
        [refOne.current, refTwo.current, refThree.current, refFour.current],
        0.5,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, ease: Power3.easeInOut, delay: 1 },
        0.1
      );
    return scatterInTl;
  };

  const fadeOutSocials = () => {
    let scatterOutTl = new TimelineMax();
    scatterOutTl
      //@ts-ignore
      .fromTo(
        refOne.current,
        0.1,
        { y: -50, opacity: 1 },
        { y: 0, opacity: 0, ease: Power3.easeInOut }
      )
      //@ts-ignore
      .fromTo(
        refTwo.current,
        0.1,
        { y: -50, opacity: 1 },
        { y: 0, opacity: 0, ease: Power3.easeInOut }
      )
      //@ts-ignore
      .fromTo(
        refThree.current,
        0.1,
        { y: -50, opacity: 1 },
        { y: 0, opacity: 0, ease: Power3.easeInOut }
      )
      //@ts-ignore
      .fromTo(
        refFour.current,
        0.1,
        { y: -50, opacity: 1 },
        { y: 0, opacity: 0, ease: Power3.easeInOut }
      );
    return scatterOutTl;
  };

  intersectionArticle && intersectionArticle.intersectionRatio > 0.9
    ? fadeInSocials()
    : fadeOutSocials();

  return (
    <div className={styles.socialsVerticalContainer}>
      <a
        ref={refOne}
        className={styles.svgContainer}
        href="https://twitter.com"
        target="_blank"
      >
        <TwitterSVG />
      </a>
      <a
        ref={refTwo}
        className={styles.svgContainer}
        href="https://facebook.com"
        target="_blank"
      >
        <FacebookSVG />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        ref={refThree}
        className={styles.svgContainer}
      >
        <LinkedinSVG />
      </a>
      <a
        href="https://www.facebook.com/messages"
        target="_blank"
        ref={refFour}
        className={styles.svgContainer}
      >
        <MessengerSVG />
      </a>
    </div>
  );
});

export default SocialsVertical;
