import React, { useState, useRef }from 'react';

export default function GameCard({gameCard}) {
    const [flip, setFlip] = useState(true)

    const frontEl = useRef()
    const backEl = useRef()

    return (
        <div 
            className={`gameCard ${flip ? 'flip' : ''}`}
            onClick={() => setFlip(!flip)}
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
