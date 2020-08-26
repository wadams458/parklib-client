import React from "react";
import Park from "../../components/Park/Park";
import ParkModel from "../../models/game";

class ParkContainer extends React.Component {
  state = {
    park: {},
  };
  componentDidMount() {
    // Get all Parks
    ParkModel.getParkById(this.props.match.params.id)
      .then((result) => {
        console.log(result);
        this.setState({ park: result });
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.props);
    return <Park park={this.state.park} list={false} />;
  }
}

export default ParkContainer;
