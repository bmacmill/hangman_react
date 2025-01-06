import { useState } from 'react'
import React from "react"
import './App.css'
import Header from "./components/Header"
import Status from "./components/Status"
import Languages from "./components/Languages"
import Word from "./components/Word"
import Keyboard from "./components/Keyboard"

function App() {
  const [currentWord, setCurrentWord] = React.useState("react")
  const [guessedLetters, setGuessedLetters] = React.useState([])
  return (
    <main>
      <Header />
      <Status />
      <Languages guessedLetters={guessedLetters} currentWord={currentWord}/>
      <Word currentWord={currentWord} guessedLetters={guessedLetters} />
      <Keyboard currentWord={currentWord} guessedLetters={guessedLetters} setGuessedLetters={setGuessedLetters} />
    </main>
  )
}

export default App
