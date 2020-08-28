import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/Home/Home";
import ParkListContainer from "../pages/ParkListContainer/ParkListContainer";
import ParkContainer from "../pages/ParkContainer/ParkContainer";
import NewParkContainer from "../pages/NewParkContainer/NewParkContainer";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import EditParkContainer from "../pages/EditParkContainer/EditParkContainer";

export default ({ currentUser, setCurrentUser }) => (
  <Switch>
    <Route exact path="/" component={Home} />

    {/* <Route
      path="/park/new"
      render={() =>
        currentUser ? <NewParkContainer /> : <Redirect to="/login" />
      }
    /> */}
    <Route path="/parks/new" component={NewParkContainer} />

    <Route exact path="/parks/:id" component={ParkContainer} />
    <Route path="/parks/:id/edit" component={EditParkContainer} />
    <Route path="/parks" component={ParkListContainer} />
    <Route
      path="/login"
      render={() => <Login setCurrentUser={setCurrentUser} />}
    />
    <Route path="/register" component={Register} />
  </Switch>
);

// export default routes;

// function routes() {
//   // console.log("this is working");
//   return (
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route path="/parks/new" component={NewParkContainer} />
//       <Route path="/parks/:id" component={ParkContainer} />
//       <Route path="/parks" component={ParkListContainer} />
//     </Switch>
//   );
// }
