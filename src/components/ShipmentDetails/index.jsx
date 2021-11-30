import React from "react";
import styles from "./ShipmentDetails.module.scss"
import { useSelector, useDispatch } from "react-redux";
import { updateBoxes } from "../../store/actions";
import { calculateShipmentValue, checkIsNaN } from "../../utils";

const ShipmentDetails = () => {

    const dispatch = useDispatch();

    const { data } = useSelector(state => state);

    if (!data.some(item => item.isActive)) {
        return null
    }

    const currentData = data.find(item => item.isActive)

    return (
        <div className={styles.shipmentDetails}>
            <div className={styles.shipmentTitle}>
                <h1 className={styles.shipmentTitleName}>{currentData.name}</h1>
                <span className={styles.shipmentTitleEmail}>{currentData.email}</span>
            </div>
            <div className={styles.shipmentBoxes}>
                <label
                    className={styles.shipmentBoxesLabel}
                    htmlFor="boxes"
                >CARGO BOXES</label>
                <input
                    type="text"
                    id="boxes"
                    placeholder="example: 6.1,7.2,4,9.3"
                    value={currentData.boxes}
                    onChange={e => dispatch(updateBoxes({ id: currentData.id, boxes: e.target.value }))}
                    className={styles.shipmentBoxesInput}
                />
            </div>
            <div className={styles.shipmentResult}>
                <span className={styles.shipmentResultText}>Number of required cargo bays</span>
                <span className={styles.shipmentResultValue}>{checkIsNaN(calculateShipmentValue(currentData.boxes))}</span>
            </div>
        </div>
    );
}

export default ShipmentDetails;
