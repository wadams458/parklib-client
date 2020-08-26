import React from "react";

function Park(props) {
  return (
    <div>
      <section>
        <img
          src={props.parkObj.coverArtUrl}
          alt={props.parkObj.title}
          height="100"
        />
      </section>
      <section>
        <h4>props.parkObj.title</h4>
      </section>
    </div>
  );
}

export default Park;
