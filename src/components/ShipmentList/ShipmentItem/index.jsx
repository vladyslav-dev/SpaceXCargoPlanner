import React from "react";
import styles from "./ShipmentItem.module.scss";
import classnames from "classnames";
import { useDispatch } from "react-redux";
import { updateActive } from "../../../store/actions";

const ShipmentItem = ({ name, isActive, id }) => {

    const dispatch = useDispatch()

    return (
        <li
            id={id}
            className={classnames(styles.ShipmentItem, {
                [styles["ShipmentItemActive"]]: isActive,
            })}
            onClick={(e) => dispatch(updateActive(e.target.id))}
        >
            {name}
        </li>
    )
}

export default ShipmentItem;
