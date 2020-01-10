import React from 'react';
import { connect } from 'react-redux';
import { loginAdmin } from '../actions';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AdminLogin = props => {
  const { handleSubmit, register, errors } = useForm();

  const handleLogin = values => {
    props.loginAdmin(values);
  }

  return (
    <div className="container">
    <form
      className="admin-login"
      onSubmit={handleSubmit(handleLogin)}
    >
      <label htmlFor="username">Email: </label>
      <input
        name="username"
        ref={register({
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'invalid email address',
          },
        })}
      />
      {errors.username && errors.username.message}

      <label htmlFor="password">Password: </label>
      <input
        name="password"
        type="password"
        ref={register({
          required: 'Required',
          message: 'invalid password',
          validate: value => value !== 'admin' || 'Nice try!',
        })}
      />
      {errors.password && errors.password.message}

      <button
        style={{
          marginTop: '5%',
          position: 'relative',
          marginLeft: '32%',
        }}
        type="submit"
      >
        Login
      </button>
      <Link to='/signup'>Need an account? Sign up here!</Link>
    </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps, { loginAdmin })(AdminLogin);
