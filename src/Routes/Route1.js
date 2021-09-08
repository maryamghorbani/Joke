import React from 'react';

// importe css files
import '../Components/CSS/Style1.scss';

// import components
import Cards from "../Components/Cards";

function Route1(props) {
    return (
        <div className="firstRoute">
            <Cards />
        </div>
    )
}

export default Route1;