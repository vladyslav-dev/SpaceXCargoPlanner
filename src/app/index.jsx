import React, { useEffect } from "react";
import styles from "./app.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateActive } from "../store/actions";

import Navbar from "../components/Navbar";
import Search from "../components/Search";
import ShipmentDetails from "../components/ShipmentDetails";

import * as action from "../store/actions";
import { addKey } from "../utils";
import { api } from "../api";

const App = () => {

  console.log("Render")

  const dispatch = useDispatch();
  const { data } = useSelector(state => state)

  useEffect(() => {
    api.getData()
      .then(res => {
        dispatch(action.setData(addKey(res, "isActive", false))) // add new key to dettect active
        return res
      })
      .then((res) => dispatch(updateActive(res[0]["id"]))) // set default first
  }, [])

  if (!data.length) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.appWrapper}>
      <div className={styles.appNavbar}>
        <Navbar />
      </div>
      <div className={styles.appMain}>
        <Search />
        <ShipmentDetails />
      </div>
    </div>
  );
}

export default App;
