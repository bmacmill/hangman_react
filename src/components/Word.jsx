import React from "react"


export default function Word({ currentWord, guessedLetters }) {
    //const [currentWord, setCurrentWord] = React.useState("react")

    const letterElements = currentWord.split("").map((letter, index) => {
        return (
            <span key={self.crypto.randomUUID()}> {guessedLetters.includes(letter) ? letter : ""}</span >
        )


    })
    return (
        <section className="Word">
            {letterElements}
        </section>
    )
}