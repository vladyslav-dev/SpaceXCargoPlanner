import React from "react";
import styles from "./ShipmentLayout.module.scss";

const ShipmentLayout = ({ children }) => (
    <div className={styles.wrapper}>
        {children}
    </div>
);

export default ShipmentLayout;
