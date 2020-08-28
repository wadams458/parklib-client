import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import NewParkContainer from '../../pages/NewParkContainer/NewParkContainer';

// function NavBar() {
//   return (
//     <nav>
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/parks"> Parks</NavLink>
//       <NavLink to="/parks/new">Add Park</NavLink>
//     </nav>
//   );
// }

function NavBar({ currentUser, logout }) {
  return (
    <nav>
      <div className="container">
        <NavLink className="logo" to="/">
          <h1>MLB Parks</h1>
        </NavLink>
        <ul className="nav-list">
          <li className="nav-item">
            {/* Don't forget the 'exact' prop for home nav link */}
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/parks">
              Parks
            </NavLink>
          </li>
          {currentUser && (
            <React.Fragment>
              <li className="nav-item">
                {/* <NavLink className="nav-link" to="/parks/new">
                  Add Park
                </NavLink> */}
                <NewParkContainer />
              </li>
              <li className="nav-item">
                <span onClick={logout} className="nav-link">
                  Logout
                </span>
              </li>
            </React.Fragment>
          )}
          {!currentUser && (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
