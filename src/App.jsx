import { useState } from 'react'

import './App.css'
import Header from "./components/Header"
import Status from "./components/Status"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Status />
    </>
  )
}

export default App
