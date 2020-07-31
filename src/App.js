import React, { useState } from 'react';
import './styles.css'
import GameCardList from './Components/GameCardList';

const App = () => {
  const cardBack = require('./Visuals/cardBack.png')
  const card1 = require('./Visuals/card1.png')
  const card2 = require('./Visuals/card2.png')
  const gameDeck  = [
    { id: 1, front: card1, back: cardBack},
    { id: 2, front: card1, back: cardBack},
    { id: 3, front: card2, back: cardBack},
    { id: 4, front: card2, back: cardBack},
    { id: 5, front: card1, back: cardBack},
    { id: 6, front: card1, back: cardBack},
    { id: 7, front: card2, back: cardBack},
    { id: 8, front: card2, back: cardBack},
    { id: 9, front: card1, back: cardBack},
    { id: 10, front: card1, back: cardBack},
    { id: 11, front: card2, back: cardBack},
    { id: 12, front: card2, back: cardBack}
  ]

  const [deck] = useState(gameDeck)

  // const id = 1
  
  // // const click = () => {
  //   const cardId = id
  //   const updated = (deck.map(card => card.id === cardId ? {...card, clicked: !card.clicked} : card))
  //   setDeck(updated)
  // }

  // const thisCard = () => {
  //   return deck.find(card => card.id === id)
  // }

  return (
    <div className="game-container">
      <GameCardList list={deck}/>
    </div>
  );
}

export default App;