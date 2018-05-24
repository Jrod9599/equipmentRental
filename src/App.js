import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BootstrapNavBar from './BootStrapNavBar'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={BootstrapNavBar}/>
        </div>
      </Router>
    );
  }
}

export default App;
