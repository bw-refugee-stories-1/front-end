import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Private from './components/PrivateRoute';

// import LoginForm from "./components/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";

import NavMenu from './components/NavMenu';
import About from './components/About';
import Contact from './components/Contact.js';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import ReviewStories from './components/ReviewStories';
import StoryList from './components/StoryList';

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
        <Private path="/review" component={ReviewStories} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={HomePage} /> {/* HomePage */}
      </Switch>
      <StoryList />
    </div>
  );
}

export default App;
