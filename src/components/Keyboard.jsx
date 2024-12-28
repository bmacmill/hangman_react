import React from "react"


export default function Keyboard() {
    const [guessedLetters, setGuessedLetters] = React.useState([])

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    function addGuessedLetter(letter) {
        setGuessedLetters(prevLetters =>
            prevLetters.includes(letter) ?
                prevLetters :
                [...prevLetters, letter]
        )
    }

    const keyboardElements = alphabet.split("").map((letter) => (
        <button
            onClick={() => addGuessedLetter(letter)}
            key={letter}>{letter}</button>
    ))
    return (
        <>
            <section className="Keyboard">{keyboardElements}</section>
            <button className="New-game">New Game</button>
        </>
    )
}