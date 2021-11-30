import React from "react";
import styles from "./ShipmentList.module.scss";
import { useSelector } from "react-redux";
import ShipmentItem from "./ShipmentItem";

const ShipmentList = () => {
    const { data } = useSelector(state => state)

    return (
        <>
            <h2 className={styles.shipmentTitle}>Shipment List</h2>
            <ul className={styles.shipmentList}>
                {data.map(item => (
                    <ShipmentItem
                        id={item.id}
                        key={item.id}
                        name={item.name}
                        isActive={item.isActive}
                    />
                ))}
            </ul>
        </>
    );
}

export default ShipmentList;
