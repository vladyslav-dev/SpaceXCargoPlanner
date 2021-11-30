import React, { useEffect } from "react";
import styles from "./app.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateActive } from "../store/actions";

import Navbar from "../components/Navbar";
import Search from "../components/Search";
import ShipmentLayout from "../components/ShipmentLayout";
import ShipmentDetails from "../components/ShipmentDetails";
import SearchResult from "../components/SearchResult";

import * as action from "../store/actions";
import { addKey } from "../utils";
import { api } from "../api";

const App = () => {

  console.log("Render")

  const dispatch = useDispatch();
  const { data, search, isBurgerOpen } = useSelector(state => state)

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

  const resultData = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <div className={styles.appWrapper}>
      <div className={styles.appNavbar}>
        <Navbar isBurgerOpen={isBurgerOpen} />
      </div>
      <div className={styles.appMain}>
        <Search />
        <ShipmentLayout>
          {search ? <SearchResult result={resultData} /> : <ShipmentDetails />}
        </ShipmentLayout>
      </div>
    </div>
  );
}

export default App;
