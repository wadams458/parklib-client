import React from "react";

function Park(props) {
  const { park } = props;

  return (
    <div>
      <section>
        <img src={park.coverArtUrl} alt={park.title} height="100" />
      </section>
      <section>
        <h4>{park.Name}</h4>
        <p>
          <strong>City:</strong>
          {park.City}
        </p>
        <p>
          <strong>Team:</strong>
          {park.Team}
        </p>
        {/* <p>Visited: {park.visited ? "Yes" : "No"}</p> */}
      </section>
    </div>
  );
}

export default Park;
