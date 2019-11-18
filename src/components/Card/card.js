import React from 'react';
import "./card.css";

const suits = {
    '♦': 'diams',
    '♠': 'spades',
    '♣': 'clubs',
    '♥': 'hearts'
};

const Card = props => {

    let className = `card rank-${props.rank.toLowerCase()} ${suits[props.suit]}`;
    return (
        <div className={className} onClick={props.change}>
            <span className="rank">{props.rank}</span>
            <span className="suit">{props.suit}</span>
        </div>
    )
};

export default Card;