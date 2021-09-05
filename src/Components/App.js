import React , { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';


// import css file
import './CSS/App.css'


//import Routes
import Content from "../Routes/Content";
import Route1 from "../Routes/Route1";
import Route2 from "../Routes/Route2";
import Route3 from "../Routes/Route3";


class App extends Component {


    // componentDidMount() {
    //     // GET request for remote image in node.js
    //     axios.get('https://api.chucknorris.io/jokes/categories')
    //         .then((response) => {
    //             console.log(response)
    //         })
    // }

    render() {
        return (
            <Router>
                <div className="container">
                    <Route path="/" exact component={Content} />
                    <Route path="/route1" component={Route1} />
                    <Route path="/route2" component={Route2} />
                    <Route path="/route3" component={Route3} />
                </div>
            </Router>
        )
    }
}

export default App;