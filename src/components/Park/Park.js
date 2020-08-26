import React from "react";
import { Link } from "react-router-dom";

import "./Park.css";

function Park(props) {
  const { park, list } = props;

  return (
    <Link to={`/parks/${park._id}`}>
      <div className="park-card">
        <section className="image-wrapper">
          <img src={park.coverArtUrl} alt={park.title} height="100" />
        </section>
        <section>
          <h4>{park.Name}</h4>
          {!list && (
            <>
              <p>
                <strong>City:</strong>
                {park.City}
              </p>
              <p>
                <strong>Team:</strong>
                {park.Team}
              </p>
            </>
          )}
        </section>
      </div>
    </Link>
  );
}

export default Park;
