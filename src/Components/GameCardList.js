import React from 'react'
import GameCard from './GameCard.js'

export default function GameCardList({list}) {
    return (
        <div className="gameCard-grid">
            {list.map(gameCard => {
                return <GameCard gameCard={gameCard} key={gameCard.id}/>
            })}
        </div>
    )
}
