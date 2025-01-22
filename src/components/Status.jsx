import React from "react"
import { getFarewellText } from "../../utils"

import { languages } from "../../languages.js"

export default function Status({ guessedLetters, currentWord, wrongLetters, isGameOver , gameWon}) {
   
   
    //find if last guess is correct or not to
    const lastGuess = guessedLetters[guessedLetters.length - 1]
    const lastGuessCorrect = lastGuess && currentWord.includes(lastGuess)



    
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