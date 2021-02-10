import React, { useEffect, useRef, useState } from "react";
import styles from "./title_desc.module.scss";

function TitleDescription({ title, description, show }) {
  return (
    <div
      className={`${styles.podcast_player__titleDescription} ${
        show ? styles.showInfo : styles.hideInfo
      }`}
    >
      <h4>{title}</h4>
      <h5>{description}</h5>
    </div>
  );
}

export default TitleDescription;
