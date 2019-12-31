import React from 'react';
import SignUpForm from "./components/SignUpForm";

// import { Switch, Route } from 'react-router-dom';

  //  TODO: Decide whether or not a user needs to login to submit a story; Anyone can read the stories; Admin is only one at this time that needs to login in and decide whether or not to approve or reject a story; 

function App() {
  return (
    <div className="App">
      <header>
        <p>[LOGO] Refugee Stories</p>
        {/* Navigation component goes on line 10 */}
        <p>Navigation section</p> 
      </header>
      <h1>Refugee Stories</h1>
      <SignUpForm />
      {/* Add routes here */}
      
    </div>
  );
}

export default App;
