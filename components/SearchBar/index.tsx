import React, { ReactElement, useEffect, useState } from "react";
import styles from "./search.module.scss";

interface Props {
  arrayOfOptions: object[];
  handleUpdatedOptions: any;
}

function SearchBar({
  arrayOfOptions,
  handleUpdatedOptions,
}: Props): ReactElement {
  const filterResults = (e) => {
    if (e.target.value === "") {
      return handleUpdatedOptions([]);
    }
    const updated = arrayOfOptions.filter(
      (each) =>
        //@ts-ignore
        each.blog.data["blog-title"][0].text
          .toUpperCase()
          .includes(e.target.value.toUpperCase()) === true
    );
    handleUpdatedOptions(updated);
  };

  return (
    <div className={styles.searchContainer}>
      <input placeholder="search" onChange={filterResults} />
    </div>
  );
}

export default SearchBar;
