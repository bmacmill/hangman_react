import React from "react"


export default function Word({ currentWord, guessedLetters, isGameOver }) {
    
    //for a11y read out of guesses
    const lastGuess = guessedLetters[guessedLetters.length - 1]
    const letterElements = currentWord.split("").map((letter, index) => {
        return (
            <span key={self.crypto.randomUUID()}> 
            
            {/* this is not elegant, could be clearer */}
            {guessedLetters.includes(letter) ? letter : !isGameOver ? "" : 
            <span style={{color: "#EC5D49", fontWeight: "900"}}>{letter}</span>}
            
            
            </span >
        )


    })
    return (
        <>        
        <section className="Word">
            {letterElements}
        </section>

{/* screen reader only section hidden from view; note: after letter adds a little pause*/}
        <section className="sr-only" aria-live="polite" status="role">
        {/* adding guessed letter read out */}
            <p>{currentWord.includes(lastGuess) ? 
                        `Correct! The letter ${lastGuess} is in the word.` : 
                        `Sorry, the letter ${lastGuess} is not in the word.`
                    }
            </p>
             <p>current word: {currentWord.split("").map((letter) => guessedLetters.includes(letter) ? letter + "." : "blank")}</p>
            </section>
        </>

    )
}