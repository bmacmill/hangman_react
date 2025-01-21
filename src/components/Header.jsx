import React from "react"
// import "../App.css"

export default function Header({languages}) {
    const numberOFAttempts = languages.length - 1
    return (
        <header>
            <h1>Assembly endgame</h1>
            <p>Guess the word within {numberOFAttempts} attempts to keep the programming world safe from Assembly!</p>
        </header>
    )
}