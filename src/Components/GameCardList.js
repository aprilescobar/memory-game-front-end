import React, { useState } from 'react'
import GameCard from './GameCard.js'

export default function GameCardList({deck, setDeck}) {
    const matches = []
    const [pair, setPair] = useState('')

    const gameLogic = (gameCard) => {
        updateDeck(gameCard)
        if(pair){
            if(gameCard.name === pair.name){
                matches.push(pair.id, gameCard.id)
                setPair('')
            } else {
                setTimeout(() => {
                    resetDeck(gameCard);
                }, 500);
            }
        } else{
            setPair(gameCard)
        }
    }

    const updateDeck = gameCard => {
        const updated = deck.map(card => card.id === gameCard.id ? gameCard : card)
        setDeck(updated)
    }

    const resetDeck = gameCard => {
        const reset = deck.map(card => {
            if(card.id === gameCard.id || card.id === pair.id){
                return {...card, flip: true}
            } else {
                return card
            }
        })
        setDeck(reset)
        setPair('')
    }

    const renderDeck = () => deck.map(gameCard => <GameCard key={gameCard.id} gameCard={gameCard} gameLogic={gameLogic}/>)
    

    return (
        <div className="gameCard-grid">
            {renderDeck()}
        </div>
    )
}
