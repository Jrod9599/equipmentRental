import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ItemBox from './itemBox';
import BootstrapNavBar from './BootStrapNavBar';
import Login from './Login';
import Register from './Register';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={BootstrapNavBar}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
        </div>
      </Router>
    );
  }
}

export default App;
