import React, { ReactElement } from "react";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./footer.module.scss";
import Link from "next/link";

export interface Props {
  darkMode: boolean;
}
// Footer with ts

export function Footer({ darkMode }: Props): ReactElement {
  const handleClick = (location: string) => {
    let str = "";

    switch (location) {
      case "facebook":
        str = "https://www.facebook.com/funkTwentySeven";
        break;

      case "twitter":
        str = "https://www.twitter.com/funkTwentySeven/";
        break;

      case "linkedin":
        str = "https://www.linkedin.com/company/funk-27";
        break;

      case "email":
        window.location.href =
          "mailto:adrianThompson19801@gmail.com" +
          "&subject='email_website_query'";
        break;

      default:
        return;
    }
    return window.open(str);
  };
  return (
    <React.Fragment>
      <div
        className="footer"
        style={darkMode ? { backgroundColor: "grey" } : null}
      >
        <div className="content has-text-centered">
          <div className="navbar-brand">
            <Link href="/">
              <a className="navbar-item flex-row">
                <h1
                  style={{
                    fontSize: "5vh",
                    marginLeft: 0,
                    marginBottom: 0,
                    color: darkMode ? "white" : "grey",
                    fontWeight: 400,
                  }}
                >
                  F
                </h1>
                <h1
                  style={{
                    fontSize: "5vh",
                    marginTop: 0,
                    marginBottom: 0,
                    color: "orange",
                    fontWeight: 400,
                  }}
                >
                  27
                </h1>
              </a>
            </Link>
          </div>
        </div>
        <hr className="divider" data-content="OR" />

        <div className="content has-text-centered">
          <div className={styles.flexFooterRow}>
            <div className={styles.flexFooterCol}>
              <h4>Github</h4>

              <a href="https://github.com/Aid19801/funk27_v2">Funk-27</a>
              <a href="https://github.com/Aid19801/the-panda-riot-v2">
                The Panda Riot
              </a>
              <a href="https://github.com/Aid19801/that-dads-app">
                #ThatDadsApp
              </a>
            </div>
            <div className={styles.flexFooterCol}>
              <h4>Skills</h4>
              <p>React</p>
              <p>Redux</p>
              <p>Apollo-graphQL</p>
              <p>REST</p>
              <p>NodeJS</p>
              <p>Jest/Enzyme</p>
              <p>Selenium Webdriver</p>
            </div>
            <div className={styles.flexFooterCol}>
              <h4>Learning</h4>
              <p>Typescript</p>
              <p>React Query</p>
              <p>Docker</p>
              <p>Kubernetes</p>
              <p>GSAP Animation</p>
            </div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerSocialsContainer}>
          <FontAwesomeIcon
            onClick={() => handleClick("facebook")}
            icon={faFacebookF}
            size="xs"
          />
          <FontAwesomeIcon
            onClick={() => handleClick("twitter")}
            icon={faTwitter}
            size="xs"
          />
          <FontAwesomeIcon
            onClick={() => handleClick("linkedin")}
            icon={faLinkedin}
            size="xs"
          />
          <FontAwesomeIcon
            onClick={() => handleClick("email")}
            icon={faMailBulk}
            size="xs"
          />
        </div>

        <div className="has-text-centered">
          <p className={styles.p}>
            <strong>Funk-27</strong> by{" "}
            <a href="https://github.com/Aid19801">Aid Thompson</a>. The source
            code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            The website content is licensed{" "}
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC BY NC SA 4.0
            </a>
            .
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
