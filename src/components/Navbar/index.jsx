import React from "react";
import styles from "./Navbar.module.scss";
import logo from "../../images/mainLogo.svg";
import { useDispatch } from "react-redux";
import { burgerHandler } from "../../store/actions";

import ShipmentList from "../ShipmentList";

const Navbar = ({ isBurgerOpen }) => {
    const dispatch = useDispatch()

    return (
        <div className={styles.navPanel}>
            <span className={styles.navPanelLogo}>
                <img src={logo} alt="SpaceX" />
            </span>
            <div className={styles.navPanelMenu} style={{ right: isBurgerOpen ? "-20px" : "calc(-100vw - 20px)" }}>
                <ShipmentList />
            </div>
            <div className={styles.burgerMenu}>
                <input
                    id="burger"
                    type="checkbox"
                    checked={isBurgerOpen}
                    onChange={() => dispatch(burgerHandler())}
                    className={styles.menuToggle}
                />
                <label className={styles.burgerBtn} htmlFor="burger">
                    <span></span>
                </label>
            </div>
        </div>
    );
}

export default Navbar;
