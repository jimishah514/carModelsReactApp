import './App.css';
import React, { useState, useEffect } from "react";
import CarDetails from './components/car-details';
import * as api from './api.service/api'
import Griddle from 'griddle-react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
function App() {
  const [carModels, setCarModels] = useState({});
  clicked = false
  useEffect(() => {

    fetchCarModels();
  }, []);

  const fetchCarModels = async () => {
    const carList = await api.getCarModels()
    console.log("List : ", carList)
    setCarModels(carList)
  }
  const userDataArray = Object.values(carModels)
  function clicked() {
    clicked = true
    //alert('Details');
    console.log("Clicked")
  }
  function MouseOver(event) {
    event.target.style.background = 'darkcyan';
  }
  function MouseOut(event){
    event.target.style.background="";
  }
  return (
    <>
      {/* <ul className="list-group">
        {userDataArray.map((obj) => (
          <li key={obj.automobile} className="list-group-item">Automobile: {obj.automobile} , Production: {obj.production} .</li>
        ))}
      </ul> */}
      {/* <Griddle data={userDataArray}/> */}
      { <ListGroup >
        {userDataArray.map((obj) => (
          <div>
            <li action onClick={clicked} onMouseOver={MouseOver} onMouseOut={MouseOut}>Automobile: {obj.automobile} , Production: {obj.production} .</li >
           {/* { clicked && <CarDetails id={obj.id} />} */}
           <CarDetails id={obj.id} />
          </div>
        ))}
      </ListGroup>}
    </>
  );
}

export default App;
