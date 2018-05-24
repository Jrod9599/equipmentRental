import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ItemBox from './itemBox'
import BootstrapNavBar from './BootStrapNavBar'
import Banner from './banner'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={BootstrapNavBar}/>
          <Route path="/" component={Banner} />
        </div>
      </Router>
    );
  }
}

export default App;
