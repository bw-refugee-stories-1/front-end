import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginForm from "./components/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";

// import { Switch, Route } from 'react-router-dom';

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
      <Switch>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>

      {/* Add routes here */}
    </div>
  );
}

export default App;
