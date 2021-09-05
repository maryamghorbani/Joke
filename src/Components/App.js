import React , { Component } from 'react';


// import css file
import './CSS/App.css'


// import componentss
import Content from './Content'


class App extends Component {
    render() {
        return (
            <div className="container">
                <Content />
            </div>
        )
    }
}

export default App;