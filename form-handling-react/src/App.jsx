import './App.css'
import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import formikForm from "./components/formikForm";

function App() {
  
  return (
    <>
      <RegistrationForm></RegistrationForm>
      <formikForm ></formikForm>
    </>
  )
}

export default App
