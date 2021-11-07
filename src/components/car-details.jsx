
import React, { useState, useEffect } from "react";
import * as api from '../api.service/api'

function CarDetails(props) {

  return (
    <>
      { <div>
        Car Details : {props.id}
      </div>}
    </>
  );
}

export default CarDetails;
