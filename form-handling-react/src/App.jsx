import React from "react";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>User Registration</h1>
        <RegistrationForm />
        <h1>User Registration (Formik)</h1>
        <FormikForm />
      </div>
    </>
  )
}

export default App
