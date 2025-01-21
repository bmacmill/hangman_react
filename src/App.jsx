import { useState } from 'react'
import React from "react"
import './App.css'
import Header from "./components/Header"
import Status from "./components/Status"
import Languages from "./components/Languages"
import Word from "./components/Word"
import Keyboard from "./components/Keyboard"
import {languages} from "../languages"

function App() {
  const [currentWord, setCurrentWord] = React.useState("react")
  const [guessedLetters, setGuessedLetters] = React.useState([])
  
  const wrongLetters = guessedLetters.filter((letter) => !currentWord.includes(letter)).length
  
  const isGameOver = wrongLetters >= languages.length - 1
  
  return (
    <main>
      <Header />
      <Status 
        guessedLetters={guessedLetters} 
        currentWord={currentWord} 
        wrongLetters={wrongLetters}
        isGameOver={isGameOver}
      />

      <Languages guessedLetters={guessedLetters} currentWord={currentWord}/>
      <Word currentWord={currentWord} guessedLetters={guessedLetters} />
      <Keyboard isGameOver={isGameOver} currentWord={currentWord} guessedLetters={guessedLetters} setGuessedLetters={setGuessedLetters} />
    </main>
  )
}

export default App
