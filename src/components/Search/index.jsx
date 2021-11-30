import React from "react";
import styles from "./Search.module.scss";
import { useDispatch, useSelector } from "react-redux";
import searchIcon from "../../images/icons/searchIcon.svg";
import { updateSearchValue } from "../../store/actions";

const Search = () => {

    const dispatch = useDispatch();
    const { search } = useSelector(state => state)

    return (
        <div className={styles.search}>
            <input
                className={styles.searchInput}
                type="text"
                value={search}
                onChange={e => dispatch(updateSearchValue(e.target.value))}
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
