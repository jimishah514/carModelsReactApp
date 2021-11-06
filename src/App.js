import './App.css';
import React, { useState, useEffect } from "react";
import * as api from './api.service/api'

function App() {
  const [carModels, setCarModels] = useState({});

  useEffect(() => {
    fetchCarModels();
  }, []);

  const fetchCarModels = async () => {
    const carList = await api.getCarModels()
    console.log("List : ", carList)
    setCarModels(carList)
  }
  const userDataArray = Object.values(carModels)
  return (
    <>
      <ul className="list-group">
        {userDataArray.map((obj) => (
          <li key={obj.automobile} className="list-group-item">Automobile: {obj.automobile} , Production: {obj.production} .</li>
        ))}
        {/* {this.state.listitems.map(listitem => (
          <li key={listitem.id} className={listitem.modifier}>
            {listitem.context}
          </li>
        ))} */}
      </ul>

    </>
  );
}

export default App;
