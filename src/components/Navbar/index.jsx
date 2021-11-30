import React from "react";
import styles from "./Navbar.module.scss";
import logo from "../../images/mainLogo.svg";

import ShipmentList from "../ShipmentList";

const Navbar = () => {
    return (
        <div className={styles.navPanel}>
            <div className={styles.navPanelLogo}>
                <img src={logo} alt="SpaceX" />
            </div>
            <div className={styles.navPanelMenu}>
                <ShipmentList />
            </div>
        </div>
    );
}

export default Navbar;
