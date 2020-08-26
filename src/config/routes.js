import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import ParkListContainer from "../pages/ParkListContainer/ParkListContainer";
import ParkContainer from "../pages/ParkContainer/ParkContainer";
import NewParkContainer from "../pages/NewParkContainer/NewParkContainer";

function routes() {
  // console.log("this is working");
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/parks/new" component={NewParkContainer} />
      <Route path="/parks/:id" component={ParkContainer} />
      <Route path="/parks" component={ParkListContainer} />
    </Switch>
  );
}

export default routes;
