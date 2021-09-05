import React from 'react';
import { Link } from 'react-router-dom';

// import css file
import './CSS/Content.css'


function Content() {
    return (
        <div className="box-container">
            <div className="box"><Link className="link" to="/route1">Route1</Link></div>
            <div className="box"><Link className="link" to="/route2">Route2</Link></div>
            <div className="box"><Link className="link" to="/route3">Route3</Link></div>
        </div>
    )
}

export default Content;