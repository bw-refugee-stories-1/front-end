import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import HomePage from "./components/HomePage";
import LoginForm from "./components/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";

// import { Switch, Route } from 'react-router-dom';

//  TODO: Decide whether or not a user needs to login to submit a story; Anyone can read the stories; Admin is only one at this time that needs to login in and decide whether or not to approve or reject a story;

function App() {
  return (
    <div className="App">
      <header>
        <p>[LOGO] Refugee Stories</p>
        {/* Navigation component goes on line 10 */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Login</NavLink>
      </header>
      <h1>Refugee Stories</h1>
        <SignUpForm />
      

      {/* Add routes here */}
    </div>
  );
}

export default App;
