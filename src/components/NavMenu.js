import React from "react";
import { NavLink, withRouter } from 'react-router-dom';

const NavMenu = props => {
  const logOut = () => {
    localStorage.clear();
    props.history.push('/');
  }

  if (localStorage.getItem('token')) { // We're logged in
    // Add page to approve submissions
    // Does Home navigate there?
    return (
      <nav className="nav-menu">
        <NavLink to="/">New Stories</NavLink>
        <NavLink to="/about">Edit Story</NavLink>
        <NavLink to="/login">Logout</NavLink>
        <span onClick={logOut}>Really Logout</span>      
      </nav>
    );
  } else { // Unauthenticated user
    // TODO: Add: "Submit your story"
    // STRETCH: Add page to "Get Involved"
    return (
      <nav className="nav-menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Admin Login</NavLink>
      </nav>
    );
  }
}

export default withRouter(NavMenu);
