import React from 'react';
import './Card.css';

const Card = (props) => <p
    id={props.id}
    className={props.animateIn? "card-in" : "card-out"}
    onAnimationEnd={props.newQuote}
    >{props.quote}
    </p>;

export default Card;
