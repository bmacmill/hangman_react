import React from "react"
import { getFarewellText } from "../../utils"
// same derived state as from keyboard component, should I make sate?
import { languages } from "../../languages.js"

export default function Status({ guessedLetters, currentWord }) {
    console.log(getFarewellText(languages[0].name))
    
    const wrongLetters = guessedLetters.filter((letter) => !currentWord.includes(letter))
    const gameWon = currentWord.split("").every((letter) => guessedLetters.includes(letter))

    const isGameOver = wrongLetters.length === 8 || gameWon
    //find if last guess is correct or not?
    const lastGuess = guessedLetters[guessedLetters.length - 1]
    const lastGuessCorrect = currentWord.includes(lastGuess)
    console.log(lastGuessCorrect)
    //get last guess of guessed letters array
    //see if last guess is in the currentWord
    const msg = ["nope", "nice try", "nyet", "un nuh", "ah doy"]
    const rand = Math.floor(Math.random() * msg.length)
    console.log(rand)
    if (!isGameOver && lastGuess && !lastGuessCorrect) {
        return <section className="Status wrongMsg" style={{ opacity: 1 }}>
            <h2>MSG</h2>
            <p>{msg[rand]}</p>
        </section>
    }
    return (


        isGameOver ? (
            gameWon ? (
                <section className="Status Win" style={{ opacity: 1 }}>
                    <h2>You Win</h2>
                    <p>Well done 🎉!</p>
                </section>
            ) :
                <section className="Status Lose" style={{ opacity: 1 }}>
                    <h2>Game Over</h2>
                    <p>You better start learning Assembly! ☠️</p>
                </section>
        )

            : (
                null
            )
    )
}