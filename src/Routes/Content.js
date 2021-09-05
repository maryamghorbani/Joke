import React , { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

// import css file
import '../Components/CSS/Content.css'


function Content() {


    const getDta = () => {
        // GET request to get random category
        axios.get('https://api.chucknorris.io/jokes/categories')
            .then((response) => {
                console.log(response)
            })
    }
    useEffect(() => getDta(), [])

    return (
        <div className="box-container">
            <div className="box"><Link className="link" to="/route1">Route1</Link></div>
            <div className="box"><Link className="link" to="/route2">Route2</Link></div>
            <div className="box"><Link className="link" to="/route3">Route3</Link></div>
        </div>
    )
}

export default Content;