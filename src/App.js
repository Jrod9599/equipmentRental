import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ItemBox from './itemBox'
import BootstrapNavBar from './BootStrapNavBar'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ThumbContainer from "./thumbContainer";

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" component={BootstrapNavBar}/>
                    <ThumbContainer/>
                </div>
            </Router>
        );
    }
}

export default App;
