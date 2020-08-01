import React, { useState, useEffect } from 'react';
import './styles.css'
import GameCardList from './Components/GameCardList';

const App = () => {
  const cardBack = require('./Visuals/cardBack.png')
  const card1 = require('./Visuals/card1.png')
  const card2 = require('./Visuals/card2.png')
  const card3 = require('./Visuals/card3.png')
  const card4 = require('./Visuals/card4.png')
  const card5 = require('./Visuals/card5.png')
  const card6 = require('./Visuals/card6.png')
  

  const gameDeck  = [
    { id: 1, name:'card1', front: card1, back: cardBack, flip: true},
    { id: 2, name:'card1', front: card1, back: cardBack, flip: true},
    { id: 3, name:'card2', front: card2, back: cardBack, flip: true},
    { id: 4, name:'card2', front: card2, back: cardBack, flip: true},
    { id: 5, name:'card3', front: card3, back: cardBack, flip: true},
    { id: 6, name:'card3', front: card3, back: cardBack, flip: true},
    { id: 7, name:'card4', front: card4, back: cardBack, flip: true},
    { id: 8, name:'card4', front: card4, back: cardBack, flip: true},
    { id: 9, name:'card5', front: card5, back: cardBack, flip: true},
    { id: 10, name:'card5', front: card5, back: cardBack, flip: true},
    { id: 11, name:'card6', front: card6, back: cardBack, flip: true},
    { id: 12, name:'card6', front: card6, back: cardBack, flip: true}
  ]

  const [deck, setDeck] = useState([])

  useEffect(() => {
    randomize();
    // eslint-disable-next-line
  }, [])

  const randomize = () => {
    const cards = [...gameDeck]
    cards.sort(() => Math.random() - .5)
    setDeck(cards)
  }
  
  return (
    <div className="game-container">
      <GameCardList deck={deck} setDeck={setDeck} />
    </div>
  );
}

export default App;