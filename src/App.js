import React, { useState } from 'react';
import './styles.css'
import GameCardList from './Components/GameCardList';

const App = () => {
  const cardBack = require('./Visuals/cardBack.png')
  const card1 = require('./Visuals/card1.png')
  const card2 = require('./Visuals/card2.png')
  const gameDeck  = [
    { id: 1, name:'card1', front: card1, back: cardBack, flip: true},
    { id: 2, name:'card1', front: card1, back: cardBack, flip: true},
    { id: 3, name:'card2', front: card2, back: cardBack, flip: true},
    { id: 4, name:'card2', front: card2, back: cardBack, flip: true},
    { id: 5, name:'card1', front: card1, back: cardBack, flip: true},
    { id: 6, name:'card1', front: card1, back: cardBack, flip: true},
    { id: 7, name:'card2', front: card2, back: cardBack, flip: true},
    { id: 8, name:'card2', front: card2, back: cardBack, flip: true},
    { id: 9, name:'card1', front: card1, back: cardBack, flip: true},
    { id: 10, name:'card1', front: card1, back: cardBack, flip: true},
    { id: 11, name:'card2', front: card2, back: cardBack, flip: true},
    { id: 12, name:'card2', front: card2, back: cardBack, flip: true}
  ]

  const [deck, setDeck] = useState(gameDeck)

  return (
    <div className="game-container">
      <GameCardList deck={deck} setDeck={setDeck} />
    </div>
  );
}

export default App;