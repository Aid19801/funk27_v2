import React from "react";
//@ts-ignore
import PlayButton from "./play.svg";
//@ts-ignore
import PauseButton from "./pause.svg";
//@ts-ignore
import FacebookSVG from "./facebook.svg";
//@ts-ignore
import TwitterSVG from "./twitter.svg";
//@ts-ignore
import LinkedInSVG from "./linkedin.svg";
//@ts-ignore
import EmailSVG from "./email.svg";
import styles from "./socials.module.scss";

function SocialsContainer({ directUrl }) {
  return (
    <div className={styles.socialsContainer}>
      <div>
        <a
          target="_blank"
          href={`http://www.facebook.com/share.php?u=${directUrl}`}
        >
          <FacebookSVG />
        </a>
      </div>
      <div>
        <a
          href={`https://twitter.com/intent/tweet?text=Loving%20this%20podcast...%20${directUrl}`}
        >
          <TwitterSVG />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          className="linkedin-share-button"
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${directUrl}`}
        >
          <LinkedInSVG />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          className="email-share-button"
          href={`mailto:mum?subject=check%20out%20this%20podcast&body=Oi%20Oi%20-%20Found%20this%20podcast%20you%20might%20like...%20${directUrl}`}
        >
          <EmailSVG />
        </a>
      </div>
    </div>
  );
}

export default SocialsContainer;
