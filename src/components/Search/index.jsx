import React from "react";
import styles from "./Search.module.scss"
import { useState } from "react";
import searchIcon from "../../images/icons/searchIcon.svg"

const Search = () => {

    const [value, setValue] = useState("");

    return (
        <div className={styles.search}>
            <input
                className={styles.searchInput}
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="Search"
            />
            <img
                className={styles.searchIcon}
                src={searchIcon}
                alt="search icon"
            />
        </div>
    );
}

export default Search;
