import React from "react"


export default function Word({ currentWord, guessedLetters, isGameOver }) {
    console.log(isGameOver)
    //for a11y read out of guesses
    const lastGuess = guessedLetters[guessedLetters.length - 1]
    const letterElements = currentWord.split("").map((letter, index) => {
        return (
            <span key={self.crypto.randomUUID()}> 
            
            
            {!isGameOver ? guessedLetters.includes(letter) ? letter : "" :
            currentWord.split(" ").map(letter => !guessedLetters.includes(letter) ? letter : letter)}
            
            
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