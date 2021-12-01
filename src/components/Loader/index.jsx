import React from "react";
import styles from "./Loader.module.scss";
import ReactLoading from 'react-loading';

const Loader = () => (
    <div className={styles.loader}>
        <ReactLoading type={"bubbles"} height={'160px'} width={'160px'} />
        <span>Loading...</span>
    </div>
)

export default Loader;
