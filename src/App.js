import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Private from './components/PrivateRoute';

// import LoginForm from "./components/LoginForm";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavMenu from './components/NavMenu';
import About from './components/About';
import Submit from './components/Contact.js';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import ReviewStories from './components/ReviewStories';
import Story from './components/Story';

function App() {
  return (
    <div className="App">
      <header>
        <p>[LOGO] Refugee Stories</p>
        <NavMenu />
      </header>
      <h2>Refugee Stories</h2>
      <Switch>
        <Private path="/review" component={ReviewStories} />
        <Route path="/about" component={About} />
        <Route path="/submit" component={Submit} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route 
          path='/stories/:id'
          render={ props => <Story {...props}/>}
        />
        <Route
          exact
          path="/"
          render={ props => <HomePage {...props}/>} 
        />
      </Switch>
    </div>
  );
}

export default App;
