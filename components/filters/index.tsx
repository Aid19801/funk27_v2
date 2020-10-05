import React, { ReactElement } from "react";
import { Button } from "react-bulma-components/dist";
import styles from "./filters.module.scss";
interface Props {
  arrayToFilter: object[];
  handleOldestFirst: any;
  handleNewestFirst: any;
  handleJustBlogs: any;
  handleJustTutorials: any;
  handleReset: any;
  killFilters: boolean;
}

function Filters({
  handleOldestFirst,
  handleNewestFirst,
  handleJustBlogs,
  handleJustTutorials,
  handleReset,
  killFilters,
}: Props): ReactElement {
  return (
    <div className={styles.filtersContainer}>
      <Button onClick={handleNewestFirst} color="warning">
        Newest First
      </Button>
      <Button onClick={handleOldestFirst} color="warning">
        Oldest First
      </Button>
      {!killFilters && (
        <>
          <Button onClick={handleJustBlogs} color="warning">
            Just Blogs
          </Button>
          <Button onClick={handleJustTutorials} color="warning">
            Just Tutorials
          </Button>
        </>
      )}
      <Button onClick={handleReset} color="warning">
        Reset
      </Button>
    </div>
  );
}

export default Filters;
