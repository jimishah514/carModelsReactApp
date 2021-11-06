import './App.css';
import React, { useState, useEffect } from "react";
import * as api from './api.service/api'

function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchCarModels();
  }, []);

  const fetchCarModels = async () => {
    const carList = await api.getCarModels()
    console.log("List : ", carList)
    setUserData(carList)
  }
console.log("userData",userData)
console.log("type userData",typeof userData)
const userDataArray = Object.values(userData)
console.log("userDataArray",userDataArray)
console.log("type userDataArray",typeof userDataArray)
// userDataArray.map(d => {
//   console.log("###",d.automobile)
// })
  return (
    <>
     {/* <h5 >{userData[0] && userData[0].automobile}</h5> */}
      {userDataArray.map((obj) => (
        <p key={obj.automobile}>Automobile: {obj.automobile} , Production: {obj.production} .</p>
      ))}
    </>
  );
}

export default App;
