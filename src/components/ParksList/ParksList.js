import React from "react";
import Park from "../Park/Park";

import "./ParksList.css";

function ParksList(props) {
  const ParksList = props.parks.map((parkObj) => {
    return <Park key={parkObj._id} park={parkObj} list={true} />;
  });

  return <div className="parks-container">{ParksList}</div>;
}

export default ParksList;
