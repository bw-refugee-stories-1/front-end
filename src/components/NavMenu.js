import React from "react";
import { NavLink, withRouter } from 'react-router-dom';

const NavMenu = props => {
  const logOut = () => {
    localStorage.clear();
    setTimeout( props.history.push('/'), 10000 ); //FIXME
  }

  if (localStorage.getItem('token')) { // We're logged in
    return (
      <>
        <nav className="nav-menu">
          <NavLink to="/review">Review Stories</NavLink>
          <NavLink to="/about">Edit Story</NavLink>
          <span onClick={logOut}>Logout</span>      
        </nav>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
      </>
    );
  } else { // Unauthenticated user
    // TODO: Add: "Submit your story"
    // STRETCH: Add page to "Get Involved"
    return (
      <>
        <nav className="nav-menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/login">Admin Login</NavLink>
        </nav>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
        </>
    );
  }
}

export default withRouter(NavMenu);
