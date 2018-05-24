import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ItemBox from './itemBox';
import BootstrapNavBar from './BootStrapNavBar';
import Login from './Login';
import Register from './Register';
import Contact from './Contact';
import Banner from './banner'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ThumbContainer from "./thumbContainer";

class App extends Component {

<<<<<<< HEAD
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
=======
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={BootstrapNavBar}/>
          <Route exact path="/" component={Banner} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
>>>>>>> 02302172defb1ab4f943d05fd16d853349f9c8a7
}

export default App;
