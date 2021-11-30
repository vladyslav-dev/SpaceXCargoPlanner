import React from "react";
import styles from "./SearchResult.module.scss";
import { useDispatch } from "react-redux";
import { updateActive } from "../../store/actions";

const SearchResult = ({ result }) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.searchResult}>
      <h3 className={styles.searchTitle}>Search results:</h3>
      <ul className={styles.searchList}>
        {result.length ? result.map(item => (
          <li
            id={item.id}
            key={item.id}
            className={styles.searchItem}
            onClick={(e) => dispatch(updateActive(e.target.id))}
          >
            {item.name}
          </li>
        )) : <li className={styles.searchEmpty}>Nothing found</li>}
      </ul>
    </div>
  );
}

export default SearchResult;
