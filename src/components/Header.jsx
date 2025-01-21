import React from "react"
// import "../App.css"

export default function Header({languages}) {
    const attempts = languages.length - 1
    return (
        <header>
            <h1>Assembly endgame</h1>
            <p>Guess the word within {attempts} attempts to keep the programming world safe from Assembly!</p>
        </header>
    )
}