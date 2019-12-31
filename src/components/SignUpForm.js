import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const NewUserForm = ({ values, errors, touched, status }) => {
  console.log("values", values);
  console.log("errors", errors);
  console.log("touched", touched);

  //local state that holds successful form submission data
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log("Status has changed!", status);
    status && setUsers(users => [...users, status]);
  }, [status]);

  return (
    <div className="new-user-form">
      <Form>
        <label htmlFor="name">
          Name
          <Field id="name" type="text" name="name" placeholder="Name" />
          {touched.name && errors.name && (
            <p className="errors">{errors.name}</p>
          )}
        </label>
        <label htmlFor="email">
          Email
          <Field id="email" type="text" name="email" placeholder="Email" />
          {touched.email && errors.email && (
            <p className="errors">{errors.email}</p>
          )}
        </label>
        <label htmlFor="password">
          Password
          <Field
            id="password"
            type="text"
            name="password"
            placeholder="password"
          />
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}
        </label>
        <label className="checkbox">
          Terms of Service
          <Field type="checkbox" name="terms" checked={values.terms} />
          <span className="checkmark" />
        </label>
        <button type="submit">Sign Up</button>
      </Form>
    </div>
  );
};

const FormikSignUpForm = withFormik({
  //props from <NewUserForm /> in app are in props param
  mapPropsToValues(props) {
    return {
      name: props.name || "",
      email: props.email || "",
      password: props.password || "",
      terms: props.terms || false
    };
  },

  //Declare shape and requirement of values object (from state)
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    password: Yup.string()
      .min(8)
      .required("Password is Required"),
    terms: Yup.boolean().oneOf([true], "Must Accept Terms of Service")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submitting", values);
    axios
      .post("https://reqres.in/api/users", values)
      .then(response => {
        console.log(response);
        //sends a status update through props in NewUserForm with value as response.data content
        setStatus(response.data);

        //clears form inputs, from FormkikBag
        resetForm();
      })
      .catch(error => console.log(error.response));
  }
})(NewUserForm);

export default FormikSignUpForm;
