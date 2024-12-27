import React from "react"

import { languages } from "../../languages.js"



const languageElements = languages.map((lang) => {
    return <div key={lang} style={{ backgroundColor: `${lang.backgroundColor}`, color: `${lang.color}` }}>
        {lang.name}</div>

})

export default function Languages() {
    return (
        <section className="Languages">{languageElements}</section>
    )
}