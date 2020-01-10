// import React, { useState } from 'react';

// const Signup = props => {

//   const { handleSubmit, register, errors } = useForm();

//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     password: '',
//     text: '',
//   });

//   const handleChange = e => {
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value
//     })
//   }

//   const handleSignup = values => {

//   }

//   return (
//     <form
//       className="signup-form"
//       onSubmit={handleSubmit(handleSignup)}
//     >
//       <label htmlFor="username">Email: </label>
//       <input
//         name="username"
//         ref={register({
//           required: 'Required',
//           pattern: {
//             value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
//             message: 'invalid email address',
//           },
//         })}
//       />
//       {errors.username && errors.username.message}

//       <label htmlFor="password">Password: </label>
//       <input
//         name="password"
//         ref={register({
//           required: 'Required',
//           message: 'invalid password',
//           validate: value => value !== 'admin' || 'Nice try!',
//         })}
//       />
//       {errors.password && errors.password.message}

//       <button
//         style={{
//           marginTop: '5%',
//           position: 'relative',
//           marginLeft: '32%',
//         }}
//         type="submit"
//       >
//         Login
//       </button>
//     </form>
//   );
// };
//   )

// }

// export default Signup;