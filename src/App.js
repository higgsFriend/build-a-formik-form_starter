import React from "react";
import { useFormik } from 'formik'

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log('form', values);
      alert("Login Successful")
    },
    validate: values => {
      let errors = {};
      if (!values.email) {
        errors.email = 'Field required';
      }
      else if (!String(values.email).toLowerCase().match(emailRegex)) {
        errors.email = "Username should be an email";
      }
      if (!values.password) errors.password = 'Field required';
      return errors;
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <div>Email</div>
        <input id="emailField" name="email" type="text" onChange={formik.handleChange} value={formik.values.email} />
        {formik.errors.email ? <div id="emailError" style={{ color: 'red' }}>{formik.errors.email}</div> : null}
        <div>Password</div>
        <input id="pswField" name="password" type="text" onChange={formik.handleChange} value={formik.values.password} />
        {formik.errors.password ? <div id="pswError" style={{ color: 'red' }}>{formik.errors.password}</div> : null}
        <button id="submitBtn" type="submit">Submit</button>
      </div>
    </form>
  );
}

export default App;
