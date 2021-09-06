import React , { useState , useEffect } from 'react';
import axios from "axios";


function CardBody() {

    const [responseJoke , setResponseJoke] = useState([]);
    const getDta = () => {
        // GET request to get random joke
        axios.get('https://api.chucknorris.io/jokes/random')
            .then((response) => {
                const myJoke = response.data;
                setResponseJoke(myJoke);
                // pass data response to state
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(() => getDta(), [])

    return (
        <p className="card-body">
            {responseJoke.value}
        </p>
    )
}

export default CardBody;