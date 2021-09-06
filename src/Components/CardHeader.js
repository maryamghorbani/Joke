import React from 'react';


// import css files
import './CSS/Card.css'


function CardHeader(props) {
    return (
        <ul className="card-header">
            <li>Joke number {props.cardnumber}</li>
        </ul>
    )
}
export default CardHeader;