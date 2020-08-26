import React from "react";
import Park from "../Park/Park";

function ParksList(props) {
  const ParksList = props.parks.map((parkObj) => {
    return <Park park={parkObj} />;
  });

  return (
    <div>
      <ul>{ParksList}</ul>
    </div>
  );
}

export default ParksList;
