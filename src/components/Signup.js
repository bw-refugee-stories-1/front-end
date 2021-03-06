import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useForm } from 'react-hook-form';

const Signup = props => {

  const { handleSubmit, register, errors } = useForm();

  const handleSignup = values => {
    axiosWithAuth()
      .post('/auth/register', values)
      .then( response => {
        console.log('Response from register: ', response);
        props.history.push('/login')
      })
      .catch( err => console.log('Signup error: ', err))
  }

  return (
    <div className="container">
      <div className="container">{/* FIXME: Hacked to act like login form */}
      <form
      className="admin-login"
      onSubmit={handleSubmit(handleSignup)}
      >
        <h3>Sign up</h3>
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
          Sign up
        </button>
      </form>
      </div>
    </div>
  );
};

export default Signup;