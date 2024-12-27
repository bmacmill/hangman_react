import React from "react"


export default function Word() {
    const [currentWord, setCurrentWord] = React.useState("react")

    const letterElements = currentWord.split("").map((letter, index) => (
        <span key={self.crypto.randomUUID()}> {letter}</span >
    ))
    return (
        <section className="Word">
            {letterElements}
        </section>
    )
}