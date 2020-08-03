import React, { useRef, useEffect }from 'react';

export default function GameCard({gameCard, gameLogic, flipCards}) {
    const frontEl = useRef()
    const backEl = useRef()

    useEffect(() => {
        setTimeout(() => {
            flipCards()
        }, 3000)
        // eslint-disable-next-line
    }, [])

    const handleClick = () => {
        let updatedCard = {...gameCard, flip: false, disable: true}
        gameLogic(updatedCard)
    }
    
    return (
        <div 
            className={`gameCard ${gameCard.flip ? 'flip' : ''}`}
            onClick={handleClick}
            disabled={true}
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
