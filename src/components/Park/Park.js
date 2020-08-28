import React from "react";
import { Link, withRouter } from "react-router-dom";
import ParkModel from "../../models/game";
import { Button } from 'reactstrap';
import "./Park.css";
import Axios from "axios";

class Park extends React.Component {
  state = {};
  componentDidMount() {
    fetch(
      `http://localhost:4000/api/v1/parks/$(this.props.match.params.id)`
    ).then((response) => {
      console.log(response);
    });
  }
  onDeleteClick = (id) => {
    ParkModel.deletePark(this.props.match.params.id)
  }
  onEditClick = (id) => {
    // edit code
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
        <Button className="btn btn-danger btn-circle btn-md"
          color="danger"
          onClick={this.onDeleteClick.bind(this, park._id)}>Delete</Button>
        <Button className="btn btn-circle btn-md ml-4"
          color="info"
          onClick={this.onEditClick.bind(this, park._id)}>Edit</Button>
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
