import { useState } from 'react'
import React from "react"
import './App.css'
import Header from "./components/Header"
import Status from "./components/Status"
import Languages from "./components/Languages"
import Word from "./components/Word"
import Keyboard from "./components/Keyboard"
import {languages} from "../languages"
import {randomWord} from "../utils"
import Confetti from 'react-confetti'


function App() {
  const [currentWord, setCurrentWord] = React.useState(()=> randomWord())
  const [guessedLetters, setGuessedLetters] = React.useState([])
  

  const wrongLetters = guessedLetters.filter((letter) => !currentWord.includes(letter)).length
  const gameWon = currentWord.split("").every((letter) => guessedLetters.includes(letter))
  
  const isGameOver = wrongLetters >= languages.length - 1 || gameWon
  
  // if(isGameOver){
  //   return (
  //     <Confetti/>
  //   )
  // }

  return (
    <main>
      {gameWon && <Confetti numberOfPieces={1000} recycle={false}/>}
      <Header languages={languages}/>
      <Status 
        guessedLetters={guessedLetters} 
        currentWord={currentWord} 
        wrongLetters={wrongLetters}
        isGameOver={isGameOver}
        gameWon={gameWon}
      />

      <Languages guessedLetters={guessedLetters} currentWord={currentWord}/>
      <Word currentWord={currentWord} guessedLetters={guessedLetters} isGameOver={isGameOver}/>
      <Keyboard randomWord={randomWord} isGameOver={isGameOver} currentWord={currentWord} setCurrentWord={setCurrentWord} guessedLetters={guessedLetters} setGuessedLetters={setGuessedLetters} />
    </main>
  )
}

export default App
