import React, { ReactElement, useEffect, useRef } from "react";
import { Button } from "react-bulma-components/dist";
import { TimelineMax, Power3 } from "gsap";
import styles from "./filters.module.scss";
interface Props {
  arrayToFilter: object[];
  handleOldestFirst: any;
  handleNewestFirst: any;
  handleJustBlogs: any;
  handleJustTutorials: any;
  handleReset: any;
  killFilters: boolean;
  filtersAreCurrentlyActive: boolean;
}

function Filters({
  handleOldestFirst,
  handleNewestFirst,
  handleJustBlogs,
  handleJustTutorials,
  handleReset,
  killFilters,
  filtersAreCurrentlyActive,
}: Props): ReactElement {
  let firstRef = useRef(null);
  let secondRef = useRef(null);
  let thirdRef = useRef(null);
  let fourthRef = useRef(null);
  let fifthRef = useRef(null);

  useEffect(() => {
    let filtersTl: any = new TimelineMax();
    //@ts-ignore
    filtersTl
      .fromTo(firstRef.current, 0.2, { y: 30 }, { y: 0, ease: Power3.easeIn })
      .fromTo(
        secondRef.current,
        0.225,
        { y: 30 },
        { y: 0, ease: Power3.easeIn }
      )
      .fromTo(thirdRef.current, 0.25, { y: 30 }, { y: 0, ease: Power3.easeIn })
      .fromTo(
        fourthRef.current,
        0.275,
        { y: 30 },
        { y: 0, ease: Power3.easeIn }
      )
      .fromTo(fifthRef.current, 0.3, { y: 30 }, { y: 0, ease: Power3.easeIn });
    return filtersTl;
  }, []);

  return (
    <div className={styles.filtersContainer}>
      <div ref={firstRef}>
        <Button onClick={handleNewestFirst} color="warning">
          Newest First
        </Button>
      </div>
      <div ref={secondRef}>
        <Button onClick={handleOldestFirst} color="warning">
          Oldest First
        </Button>
      </div>
      {!killFilters && (
        <>
          <div ref={thirdRef}>
            <Button onClick={handleJustBlogs} color="warning">
              Just Blogs
            </Button>
          </div>
          <div ref={fourthRef}>
            <Button onClick={handleJustTutorials} color="warning">
              Just Tutorials
            </Button>
          </div>
        </>
      )}
      {filtersAreCurrentlyActive && (
        <div ref={fifthRef}>
          <Button onClick={handleReset} color="danger">
            Reset
          </Button>
        </div>
      )}
    </div>
  );
}

export default Filters;
