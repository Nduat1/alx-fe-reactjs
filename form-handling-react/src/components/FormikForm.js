import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = { username: "", email: "", password: "" };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log("Formik Form submitted:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div>
            <label>Username:</label>
            <Field name="username" type="text" placeholder="Enter username" />
            <ErrorMessage name="username" component="div" style={{ color: "red" }} />
          </div>
          <div>
            <label>Email:</label>
            <Field name="email" type="email" placeholder="Enter email" />
            <ErrorMessage name="email" component="div" style={{ color: "red" }} />
          </div>
          <div>
            <label>Password:</label>
            <Field name="password" type="password" placeholder="Enter password" />
            <ErrorMessage name="password" component="div" style={{ color: "red" }} />
          </div>
          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
