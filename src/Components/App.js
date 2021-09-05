import React , { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';

// import css file
import './CSS/App.css'


// import componentss
import Content from './Content'

//import Routes
import Route1 from "../Routes/Route1";
import Route2 from "../Routes/Route2";
import Route3 from "../Routes/Route3";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Content>
                        <Route path="/route1" component={Route1} />
                        <Route path="/route2" component={Route2} />
                        <Route path="/route3" component={Route3} />
                    </Content>
                </div>
            </Router>
        )
    }
}

export default App;