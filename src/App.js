import React from "react";
import Routes from "./config/Routes";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Routes />
      </div>
    );
  }
}

export default App;
