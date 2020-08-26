import React from "react";

class ParkListContainer extends React.Component {
  state = {
    parks: [],
  };
  componentDidMount() {
    // Get all Parks
    fetch("http://localhost:4000/api/v1/parks/")
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }

  render() {
    return <div>ParkList</div>;
  }
}

export default ParkListContainer;
