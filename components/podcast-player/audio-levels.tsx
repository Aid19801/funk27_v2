import React, { useEffect, useState } from "react";
import styles from "./podcast_player.module.scss";

function AudioLevels() {
  const [barOneHeight, setBarOneHeight] = useState(0);
  const [barTwoHeight, setBarTwoHeight] = useState(0);
  const [barThreeHeight, setBarThreeHeight] = useState(0);

  const setBarOne = () => {
    setInterval(() => {
      setBarOneHeight(Math.floor(Math.random() * 55) + 1);
    }, 100);
  };
  const setBarTwo = () => {
    setInterval(() => {
      setBarTwoHeight(Math.floor(Math.random() * 55) + 1);
    }, 140);
  };
  const setBarThree = () => {
    setInterval(() => {
      setBarThreeHeight(Math.floor(Math.random() * 55) + 1);
    }, 90);
  };
  useEffect(() => {
    setBarOne();
    setBarTwo();
    setBarThree();
  }, []);
  return (
    <div className={styles.audioLevelsContainer}>
      <div className={styles.rowOfThreeBars}>
        <span
          className={styles.barOne}
          style={{ height: `${barOneHeight}px` }}
        ></span>
        <span
          style={{ height: `${barTwoHeight}px` }}
          className={styles.barTwo}
        ></span>
        <span
          style={{ height: `${barThreeHeight}px` }}
          className={styles.barThree}
        ></span>
      </div>
    </div>
  );
}

export default AudioLevels;
