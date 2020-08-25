import React from "react";

class ParkListContainer extends React.Component {
  state = {
    showSecret: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      showSecret: !prevState.showSecret,
    }));
  };

  render() {
    return (
      <div>
        <h1>ParkList</h1>
        <button onClick={this.toggle}>
          {this.state.showSecret ? "Hide " : "Show "}
          Secret
        </button>
        {this.state.showSecret && <p>This is a secret.</p>}
      </div>
    );
  }
}

export default ParkListContainer;
