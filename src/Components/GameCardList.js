import React, { useState } from 'react'
import GameCard from './GameCard.js'

export default function GameCardList({deck, setDeck}) {
    const [matches, setMatches] = useState([])
    const [pair, setPair] = useState('')

    const gameLogic = (gameCard) => {
        updateDeck(gameCard)
        if(matches.includes(gameCard.id)){
            setPair(pair)
        } else {
            if(pair && pair.id !== gameCard.id){
                if(gameCard.name === pair.name){
                    if(matches.length > 0 && matches.length  === deck.length -2){
                        setTimeout(() => {
                            youWon()
                        }, 200);
                    } else {
                        setMatches([...matches, gameCard.id, pair.id])
                        setPair('')
                    }
                } else {
                    setTimeout(() => {
                        resetDeck(gameCard);
                    }, 500);
                }
            } else{
                setPair(gameCard)
            }
        }
    }

    const flipCards = () => {
        const updated = deck.map(card => ({...card, flip: true}))
        setDeck(updated)
    }

    const updateDeck = gameCard => {
        const updated = deck.map(card => card.id === gameCard.id ? gameCard : card)
        setDeck(updated)
    }

    const resetDeck = gameCard => {
        const reset = deck.map(card => {
            if(card.id === gameCard.id || card.id === pair.id){
                return {...card, flip: true, disable: false}
            } else {
                return card
            }
        })
        setDeck(reset)
        setPair('')
    }

    const youWon = () => {
        alert("you won")
    }

    const renderDeck = () => deck.map(gameCard => (
        <GameCard 
        key={gameCard.id} 
        gameCard={gameCard} 
        gameLogic={gameLogic} 
        flipCards={flipCards}/>)
    )
    
    return (
        <div className="gameCard-grid">
            {renderDeck()}
            {console.log(pair)}
        </div>
    )
}
