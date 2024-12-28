import { useState } from 'react'

import './App.css'
import Header from "./components/Header"
import Status from "./components/Status"
import Languages from "./components/Languages"
import Word from "./components/Word"
import Keyboard from "./components/Keyboard"

function App() {


  return (
    <>
      <Header />
      <Status />
      <Languages />
      <Word />
      <Keyboard />
    </>
  )
}

export default App
