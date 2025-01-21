import React from "react"
import { getFarewellText } from "../../utils"
// same derived state as from keyboard component, should I make state?
import { languages } from "../../languages.js"

export default function Status({ guessedLetters, currentWord, wrongLetters, isGameOver , gameWon}) {
    //console.log(getFarewellText(languages[0].name))

   // const wrongLetters = guessedLetters.filter((letter) => !currentWord.includes(letter)).length
    // if(wrongLetters > 0){
    //     console.log(getFarewellText(languages[wrongLetters - 1].name))
    // }

    //const gameWon = currentWord.split("").every((letter) => guessedLetters.includes(letter))
    //console.log({ wrongLetters })
    //const isGameOver = wrongLetters && wrongLetters.length === 8 || gameWon
   
    //find if last guess is correct or not to
    const lastGuess = guessedLetters[guessedLetters.length - 1]
    const lastGuessCorrect = lastGuess && currentWord.includes(lastGuess)
  
    //use last guess and 
    // if (!isGameOver && lastGuess && !lastGuessCorrect) {
    //     return <section aria-live="polite" role="status" className="Status wrongMsg" style={{ opacity: 1 }}>
    //         <p>{getFarewellText(languages[wrongLetters - 1].name)}</p>
    //     </section>
    // }
    //make a helper function to render correct status instead of turnary

    function renderGameStatus(){
        if(!isGameOver && lastGuess && !lastGuessCorrect){
            return (
                //aria-live and role for a11y
            <section aria-live="polite" role="status" className="Status wrongMsg" style={{ opacity: 1 }}>
                <p>{getFarewellText(languages[wrongLetters - 1].name)}</p>
            </section>)
        }
        if (gameWon) {
            return (
            <section aria-live="polite" role="status" className="Status Win" style={{ opacity: 1 }}>
                <h2>You Win</h2>
                <p>Well done 🎉!</p>
            </section>
            )
        } else if(isGameOver) {
            return (
            <section aria-live="polite" role="status" className="Status Lose" style={{ opacity: 1 }}>
                <h2>Game Over</h2>
                <p>You better start learning Assembly! ☠️</p>
            </section>  
            )
        }
    }
    

    return (
            renderGameStatus()
        )
}