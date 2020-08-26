import React from "react";

function Park(props) {
  console.log("Park Props = ", props);
  return (
    <div>
      <section>
        <img src={props.park.coverArtUrl} alt={props.park.title} />
      </section>
    </div>
  );
}

export default Park;
