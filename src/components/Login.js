import React from 'react';
import LoginForm from './LoginForm';
import { useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

const Login = props => {
  const loggedIn = useSelector(state => state.loginState.isLoggedIn)

  if(loggedIn) return < Redirect to="/review" />
  return (
    <div className="container">
      <LoginForm history={props.history} />
    </div>
  )

}

export default Login;