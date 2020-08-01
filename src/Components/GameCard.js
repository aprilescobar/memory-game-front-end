import React, { useRef }from 'react';

export default function GameCard({gameCard, gameLogic}) {
    const frontEl = useRef()
    const backEl = useRef()

    const handleClick = () => {
        let updatedCard = {...gameCard, flip: false}
        gameLogic(updatedCard)

    }
    
    return (
        <div 
            className={`gameCard ${gameCard.flip ? 'flip' : ''}`}
            onClick={handleClick}
        >
            <div className="front" ref={frontEl}>
                <img className="gameCard-img" src={gameCard.front} alt="front"/>
            </div>
            <div className="back" ref={backEl}>
                <img className="gameCard-img" src={gameCard.back} alt="back"/>
            </div>
        </div>
    )
}
