import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import ParkListContainer from "../pages/ParkListContainer/ParkListContainer";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/parks" component={ParkListContainer} />
    </Switch>
  );
};
