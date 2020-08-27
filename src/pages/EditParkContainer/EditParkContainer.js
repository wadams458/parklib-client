import React from "react";
import { withRouter } from "react-router-dom";
import ParkModel from "../../models/game";

class EditParkContainer extends React.Component {
  state = {
    title: "",
    publisher: "",
    coverArtUrl: "",
    completed: false,
  };

  // Get the Game (by ID) to be edited and update state
  componentDidMount() {
    ParkModel.getParkById(this.props.match.params.id)
      .then((result) => this.setState(result))
      .catch((err) => console.log(err));
  }

  handleChange = (event) => {
    // console.log(event.target.id);
    if (event.target.value === "on") {
      event.target.value = true;
    }

    this.setState({ [event.target.name]: event.target.value });
  };

  // Submit updated game object to server to save in database
  handleSubmit = (event) => {
    event.preventDefault();
    ParkModel.updateGame(this.state, this.props.match.params.id).then(
      (result) => {
        console.log(result);
      }
    );
    this.props.history.push(`/games/${this.props.match.params.id}`);
  };

  render() {
    const { title, publisher, coverArtUrl, completed } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Edit Park</h2>
          <label htmlFor="name">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
          <div>
            <label htmlFor="publisher">Publisher</label>
            <input
              type="text"
              name="publisher"
              id="publisher"
              value={publisher}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="coverArtUrl">Coverart</label>
            <input
              type="text"
              name="coverArtUrl"
              id="coverArtUrl"
              value={coverArtUrl}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="completed">Completed</label>
            <input
              type="checkbox"
              id="completed"
              name="completed"
              checked={completed}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Update Park</button>
        </form>
      </div>
    );
  }
}

export default withRouter(EditParkContainer);
