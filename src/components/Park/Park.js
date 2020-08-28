import React from "react";
import { Link, withRouter } from "react-router-dom";
import ParkModel from "../../models/game";

import "./Park.css";

class Park extends React.Component {
  state = {};
  componentDidMount() {
    fetch(
      `http://localhost:4000/api/v1/parks/$(this.props.match.params.id)`
    ).then((response) => {
      console.log(response);
    });
  }

  render() {
    const { park, list } = this.props;
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

  // return (
  //   <Link to={`/parks/${park._id}`}>
  //     <div className="park-card">
  //       <section className="image-wrapper">
  //         <img src={park.coverArtUrl} alt={park.title} height="100" />
  //       </section>
  //       <section>
  //         <h4>{park.Name}</h4>
  //         {!list && (
  //           <>
  //             <p>
  //               <strong>City:</strong>
  //               {park.City}
  //             </p>
  //             <p>
  //               <strong>Team:</strong>
  //               {park.Team}
  //             </p>
  //           </>
  //         )}
  //       </section>
  //     </div>
  //   </Link>
  // );
}

export default withRouter(Park);
