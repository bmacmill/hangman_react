import React from "react"

// same derived state as from keyboard component, should I make sate?
export default function Status({ guessedLetters, currentWord }) {
    const wrongLetters = guessedLetters.filter((letter) => !currentWord.includes(letter))
    const gameWon = currentWord.split("").every((letter) => guessedLetters.includes(letter))

    const isGameOver = wrongLetters.length === 8 || gameWon

    return (
        isGameOver ? (
            gameWon ? (
                <section className="Status" style={{ opacity: 1 }}>
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