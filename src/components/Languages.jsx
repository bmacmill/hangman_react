import React from "react"
import { languages } from "../../languages.js"

export default function Languages({ guessedLetters, currentWord }) {
    const lostLang = guessedLetters.filter(letter => !currentWord.includes(letter)).length


    const languageElements = languages.map((lang, index) => {
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        return <div key={index} style={styles} className={lostLang > index ? "lost" : ""}>
            {lang.name}</div>

    })


    return (
        <section className="Languages">{languageElements}</section>
    )
}