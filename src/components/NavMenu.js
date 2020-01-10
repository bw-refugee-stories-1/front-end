import React from "react";
import { NavLink, withRouter } from 'react-router-dom';

const NavMenu = props => {
  const logOut = () => {
    localStorage.clear();
    props.history.push('/');
  }

  if (localStorage.getItem('token')) { // We're logged in
    return (
      <header className="header">
        <NavLink to="/" className="logo">Refugee Stories</NavLink>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="nav-icon"></span></label>
        <ul className="menu">
          <li><NavLink to="/review">Review Stories</NavLink></li>
          <li><NavLink to="/about">Edit Story</NavLink></li>
          <li><a name="blah" className="logout" onClick={logOut}>Logout</a></li>
        </ul>
      </header>
    );
  } else { // Unauthenticated user
    // TODO: Add: "Submit your story"
    // STRETCH: Add page to "Get Involved"
    return (
      <header className="header">
        
          <NavLink to="/" className="logo">Refugee Stories</NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn"><span className="nav-icon"></span></label>
          <ul className="menu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/submit">Submit Your Story</NavLink></li>
            <li><NavLink to="/login">Admin Login</NavLink></li>
          </ul>

      </header>
    );
  }
}

export default withRouter(NavMenu);
