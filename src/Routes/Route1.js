import React from 'react';

// import components
import Card from "../Components/Card";

function Route1(props) {
    return (
        <div className="cards-container">
            <Card number="1" />
            <Card number="2" />
            <Card number="3" />
        </div>
    )
}

export default Route1;