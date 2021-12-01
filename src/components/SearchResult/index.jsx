import React, { useMemo } from "react";
import styles from "./SearchResult.module.scss";
import { useDispatch } from "react-redux";
import { updateActive } from "../../store/actions";

const SearchResult = ({ data, search }) => {
  const dispatch = useDispatch()

  const resultData = useMemo(() => data.filter(item => item.name.toLowerCase().includes(search.toLowerCase())), [data, search])

  return (
    <div className={styles.searchResult}>
      <h3 className={styles.searchTitle}>Search results:</h3>
      <ul className={styles.searchList}>
        {resultData.length ? resultData.map(item => (
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
