import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Private from './components/PrivateRoute';

// import HomePage from "./components/HomePage";
// import LoginForm from "./components/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";

import NavMenu from './components/NavMenu';
import About from './components/About';
import Contact from './components/Contact.js';
import Login from './components/Login';
import Signup from './components/Signup';

// TODO: Decide whether or not a user needs to login to submit a story;
// Anyone can read the stories; Admin is only one at this time that needs
// to login in and decide whether or not to approve or reject a story;

function App() {
  return (
    <div className="App">
      <header>
        <p>[LOGO] Refugee Stories</p>
        <NavMenu />
      </header>
      <h1>Refugee Stories</h1>
      { /* Default to list of stories, not: <SignUpForm /> */ }
      <Switch>
        <Private path="/about" component={About} />
        <Private path="/contact" component={Contact} />
        <Private path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={Login} /> {/* HomePage */}
      </Switch>
      
    </div>
  );
}

export default App;
