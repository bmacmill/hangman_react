import React from "react"


export default function Keyboard() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const keyboardElements = alphabet.split("").map((letter) => (
        <button key={letter}>{letter}</button>
    ))
    return (
        <>
        <section className="Keyboard">{keyboardElements}</section>
        <button className="New-game">New Game</button>
        </>
    )
}