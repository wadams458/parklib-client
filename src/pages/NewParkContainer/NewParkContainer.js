import React from "react";
import "./NewParkContainer.css";

import ParkModel from "../../models/game";

class NewParkContainer extends React.Component {
  state = {
    Name: "",
    Team: "",
    coverArtUrl: "",
    Visited: false,
  };

  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });

    // }))
  };

  handleSubmit = (event) => {
    event.preventDefault();
    ParkModel.createPark(this.state).then((result) => {
      console.log(result);
    });
    //redirect to PArk Index(history comes from react -router-dom)
    this.props.history.push("/parks");
  };

  render() {
    return (
      <div>
        <h2>Add A New Park</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">Name</label>
            <input onInput={this.handleChange} type="text" name="Name" />
          </div>
          <div>
            <label htmlFor="">Team</label>
            <input type="text" name="Team" />
          </div>
          <div>
            <label htmlFor="">City</label>
            <input type="text" name="City" />
          </div>
          <div>
            <label htmlFor="">Coverart</label>
            <input type="text" name="CoverArtUrl" />
          </div>
          <div>
            <label htmlFor="">Visited</label>
            <input type="checkbox" name="Visited" />
          </div>
          <div>
            <label htmlFor="">Description</label>
            <input type="text area" name="Visited" />
          </div>
          <button type="submit">Add Park</button>
        </form>
      </div>
    );
  }
}

export default NewParkContainer;
