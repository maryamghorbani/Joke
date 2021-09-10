import React from 'react';
import loadable from '@loadable/component';


// import components
import CardHeader from "./CardHeader";

const CardBody = loadable(() => import('./CardBody'))


function Card(props) {
    return (
        <div className="card">
            <CardHeader cardnumber={props.number} />
            <CardBody />
        </div>
    )
}

export default Card;