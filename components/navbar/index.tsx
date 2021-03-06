import React, { ReactElement, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import gsap, { TimelineMax, Elastic, Power3 } from "gsap";
import NProgress from "nprogress";

interface Props {}

export function Navbar({}: Props): ReactElement {
  const router = useRouter();
  const [showMobNav, toggleshowMobNav] = useState(false);

  let slamIn = useRef(null);

  // one ref for each of the nav items
  let homeRef = useRef(null);
  let aboutRef = useRef(null);
  let contactRef = useRef(null);
  let productsRef = useRef(null);
  let podsRef = useRef(null);
  let blogsRef = useRef(null);

  useEffect(() => {
    var clearTl = new TimelineMax();
    clearTl
      .set(homeRef.current, { autoAlpha: 0 })
      .set(aboutRef.current, { autoAlpha: 0 })
      .set(contactRef.current, { autoAlpha: 0 })
      .set(productsRef.current, { autoAlpha: 0 })
      .set(podsRef.current, { autoAlpha: 0 })
      .set(blogsRef.current, { autoAlpha: 0 })
      .set(slamIn.current, { autoAlpha: 0, onComplete: beginAnimations });
  }, []);

  const beginAnimations = () => {
    var navItemsTimeline = new TimelineMax();
    navItemsTimeline
      //@ts-ignore
      .staggerTo(
        [
          homeRef.current,
          aboutRef.current,
          contactRef.current,
          productsRef.current,
          blogsRef.current,
          podsRef.current,
        ],
        0.5,
        { autoAlpha: 1, ease: Power3.easeIn },
        0.1
      )
      .fromTo(
        slamIn.current,
        0.5,
        {
          y: "-=15",
          scale: 0.2,
          autoAlpha: 0,
          transformOrigin: "center center",
        }, // <-- scaling from the centre
        {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          transformOrigin: "center center",
          ease: Elastic.easeOut,
        },
        "+=0.3" // <--start it 0.3 earlier than it should do
      )
      .add("nav-slammed-in");
  };

  const toggleMenu = () => {
    toggleshowMobNav(!showMobNav);
  };

  const handleNavClick = (loc) => {
    NProgress.start();
    return router.push(loc);
  };

  return (
    <React.Fragment>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className={`navbar-brand`}>
          <Link href="/">
            <a ref={slamIn} className={`navbar-item`}>
              <h1 style={{ fontSize: "5vh", marginLeft: 20, color: "grey" }}>
                Funk-
              </h1>
              <h1 style={{ fontSize: "5vh", color: "orange" }}>27</h1>
            </a>
          </Link>

          <div
            onClick={toggleMenu}
            className={
              showMobNav
                ? "navbar-burger burger is-active"
                : "navbar-burger burger"
            }
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div
          id="navbarBasicExample"
          className={showMobNav ? "navbar-menu is-active" : "navbar-menu"}
        >
          <div className="navbar-start">
            <div
              ref={homeRef}
              className="navbar-item"
              onClick={() => handleNavClick("/")}
            >
              Home
            </div>
            <div
              ref={aboutRef}
              className="navbar-item"
              onClick={() => handleNavClick("/about")}
            >
              About
            </div>
            <div
              ref={contactRef}
              className="navbar-item"
              onClick={() => handleNavClick("/contact")}
            >
              Contact
            </div>
            <div
              ref={productsRef}
              className="navbar-item"
              onClick={() => handleNavClick("/products")}
            >
              Products
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div
                ref={blogsRef}
                className="navbar-item"
                onClick={() => handleNavClick("/blog")}
              >
                Blogs/Tutorials
              </div>
              <div className="navbar-dropdown">
                <Link
                  href={"/blog/[slug]"}
                  as="/blog/unit-textinput-react-native"
                >
                  <a className="navbar-item">Unit Testing in React Native</a>
                </Link>
                <Link href={"/blog/[slug]"} as="/blog/prismic-react">
                  <a className="navbar-item">Prismic CMS with React</a>
                </Link>
                <Link
                  href={"/blog/[slug]"}
                  as="/blog/npm-link-a-local-version-of-a-dependency"
                >
                  <a className="navbar-item">NPM Link a local dependency</a>
                </Link>
                <a
                  href="https://medium.com/@AidThompsin/heres-how-you-map-local-on-charles-proxy-14cac3d78705"
                  className="navbar-item"
                >
                  Charles-Proxy - How To Map Local
                </a>
                <hr className="navbar-divider" />
                <a
                  href="https://twitter.com/aidThompsin"
                  className="navbar-item"
                >
                  Request a blog
                </a>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <div
                ref={podsRef}
                className="navbar-item"
                onClick={() => handleNavClick("/podcast")}
              >
                Podcast
              </div>
              <div className="navbar-dropdown">
                <Link
                  href={"/podcast/[slug]"}
                  as="/podcast/episode-1-emmett-short"
                >
                  <a className="navbar-item">#1 Emmett Short</a>
                </Link>
                <Link
                  href={"/podcast/[slug]"}
                  as="/podcast/episode-2-ashley-haden"
                >
                  <a className="navbar-item">#2 Ashley Haden</a>
                </Link>
                <Link
                  href={"/podcast/[slug]"}
                  as="/podcast/episode-3-tom-pontin"
                >
                  <a className="navbar-item">#3 Tom Pontin</a>
                </Link>
                <Link
                  href={"/podcast/[slug]"}
                  as="/podcast/episode-4-maxine-penney"
                >
                  <a className="navbar-item">#4 Maxine Penney</a>
                </Link>
                <Link
                  href={"/podcast/[slug]"}
                  as="/podcast/episode-4-richard-brice"
                >
                  <a className="navbar-item">#5 Richard Brice</a>
                </Link>
                <Link
                  href={"/podcast/[slug]"}
                  as="/podcast/episode-6-lisa-cross"
                >
                  <a className="navbar-item">#6 Dr Lisa Cross</a>
                </Link>
                <Link href={"/podcast/[slug]"} as="/podcast">
                  <a className="navbar-item">All</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link href={"/signup"} as="/signup">
                  <a className="button is-warning">
                    <strong>Sign up</strong>
                  </a>
                </Link>
                {/* <a className="button is-warning is-light">Log in</a> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
