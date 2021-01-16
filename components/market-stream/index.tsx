import React, { useEffect, useState } from "react";
import moment from "moment";
import Typing from "react-typing-animation";
import Fade from "react-reveal/Fade";
import { fetchTweets } from "../../api/requests";
import { mockTweets } from "./mocks";
import styles from "./market-stream.module.scss";

const trimLength = (str) =>
  str.length > 110 ? `${str.slice(0, 110)}...` : str;
//@ts-ignore
const MyCursor = () => <h5>⬜️</h5>;

function MarketStream({ show }) {
  const [tweets, setTweets] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showStream, setShowStream] = useState(false);

  const getTweets = async () => {
    setLoading(true);
    // initial fetch
    const { data } = await fetchTweets();
    setTweets(data);
    setLoading(false);
    // check every minute after
    setInterval(async () => {
      setLoading(true);
      console.log("refetching market data");
      const { data } = await fetchTweets();
      setTweets(data);
      setLoading(false);
    }, 600000);
  };
  useEffect(() => {
    getTweets();
  }, []);

  useEffect(() => {
    show ? setShowStream(true) : setShowStream(false);
  }, [show]);

  if (tweets && tweets.length) {
    // console.log("tweets are now ", tweets);
  }

  return (
    <div
      className={`${styles.marketStreamContainer} ${
        showStream ? styles.fadeIn : styles.fadeOut
      }`}
    >
      <div>
        <div className={styles.titleBorderDotContainer}>
          <h5 className={styles.title}>Market Stream</h5>
          <div className={styles.titleBorderBottom}></div>
          <div className={styles.flashingDotContainer}>
            <div className={styles.flashingDot} />
          </div>
        </div>
        <ul>
          {tweets &&
            tweets.map((each, i) => {
              return (
                <>
                  <Fade right>
                    <li key={i}>
                      <a
                        href={`https://twitter.com/markets/status/${each.id}`}
                        target="_blank"
                      >
                        <div className={styles.authorAndTimestampContainer}>
                          <h6 className={styles.author}>Bloomberg Markets</h6>
                          <p className={styles.timestamp}>
                            {each.created_at
                              .slice(
                                each.created_at.indexOf("T") + 1,
                                each.created_at.length
                              )
                              .slice(0, 5)}{" "}
                            &nbsp; | &nbsp;{" "}
                            {moment(each.created_at).format("DD-MM-YYYY")}
                          </p>
                        </div>
                        {i === 0 ? (
                          <Typing
                            speed={0}
                            cursor={<MyCursor />}
                            hideCursor={false}
                          >
                            <p className={styles.tweet}>
                              {trimLength(each.text)}
                            </p>
                          </Typing>
                        ) : (
                          <p className={styles.tweet}>
                            {trimLength(each.text)}
                          </p>
                        )}
                        {/* <p className={styles.tweet}>{ssrTypedContent(each.text)}</p> */}
                      </a>
                      <div className={styles.separator}>
                        <span className={styles.dotOne}></span>
                        <span className={styles.dotTwo}></span>
                        <span className={styles.dotThree}></span>
                      </div>
                    </li>
                  </Fade>
                </>
              );
            })}
          {!tweets && !loading && (
            <li className={styles.error}>
              Oh no! There has been a problem fetching market news.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default MarketStream;
