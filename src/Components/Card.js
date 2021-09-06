import React from 'react';


// import css file
import './CSS/Card.css'

// import components
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";


function Card(props) {
    return (
        <div className="card">
            <CardHeader cardnumber={props.number} />
            <CardBody />
        </div>
    )
}

export default Card;