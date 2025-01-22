import React from "react"
import clsx from 'clsx';
import "../App.css"
export default function Keyboard({ randomWord, currentWord, setCurrentWord, guessedLetters, setGuessedLetters, isGameOver }) {
    
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    //is this used????
    const gameWon = currentWord.split("").every((letter) => guessedLetters.includes(letter))


    function addGuessedLetter(letter) {
        setGuessedLetters(prevLetters =>
            prevLetters.includes(letter) ?
                prevLetters :
                [...prevLetters, letter]
        )
    }

    function resetGame(){
        setCurrentWord(randomWord())
        setGuessedLetters([])
    }

    const keyboardElements = alphabet.split("").map((letter) => {
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const guessedClass = clsx({ green: isGuessed && isCorrect, red: isGuessed && !isCorrect })

        return (< button
            disabled={isGameOver}
            className={guessedClass}
            aria-disabled={guessedLetters.includes(letter)}
            // screen reader will read aria label, add letter
            aria-label={`Letter ${letter}`}
            onClick={() => addGuessedLetter(letter)}
            key={letter} > {letter}</button >

        )
    })


    return (
        <>
            <section className="Keyboard">{keyboardElements}</section>
            {isGameOver && <button className="New-game" onClick={resetGame}>New Game</button>}
        </>
    )
}