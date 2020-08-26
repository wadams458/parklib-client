import React from "react";
import ParksList from "../../components/ParksList/ParksList";
import ParkModel from "../../models/game";

class ParkListContainer extends React.Component {
  state = {
    parks: [],
  };
  componentDidMount() {
    // Get all Parks
    ParkModel.getAllParks()
      .then((result) => {
        // console.log(result);
        this.setState({ parks: result });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return <ParksList parks={this.state.parks} />;
  }
}

export default ParkListContainer;
