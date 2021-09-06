import React from 'react';


function CardHeader(props) {
    return (
        <ul className="card-header">
            <li>Joke number {props.cardnumber}</li>
        </ul>
    )
}
export default CardHeader;