import React , { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

// import css file
import '../Components/CSS/Content.scss'


function Content() {


    const [responseData , setResponseData] = useState([]);
    const getDta = () => {
        // GET request to get random category
        axios.get('https://api.chucknorris.io/jokes/categories')
            .then((response) => {
                const myData = response.data;
                setResponseData(myData);
                // pass data response to state
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(() => getDta(), [])

    return (
        <div className="box-container">
            <div className="box"><Link className="link" to="/route1">{responseData[Math.floor(Math.random() * responseData.length)]}</Link></div>
            <div className="box"><Link className="link" to="/route2">{responseData[Math.floor(Math.random() * responseData.length)]}</Link></div>
            <div className="box"><Link className="link" to="/route3">{responseData[Math.floor(Math.random() * responseData.length)]}</Link></div>
        </div>
    )
}

export default Content;