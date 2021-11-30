import React from "react";
import styles from "./ShipmentItem.module.scss";
import { useDispatch } from "react-redux";
import { updateActive } from "../../../store/actions";

const ShipmentItem = ({ name, isActive, id }) => {

    const dispatch = useDispatch()

    return (
        <li
            id={id}
            className={`${styles.ShipmentItem} ${isActive ? styles.ShipmentItemActive : ""}`}
            onClick={(e) => dispatch(updateActive(e.target.id))}
        >
            {name}
        </li>
    )
}

export default ShipmentItem;
