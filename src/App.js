import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ItemBox from './itemBox'



class App extends Component {
    render() {
        return (
            <div className="App">
                <ItemBox/>
            </div>
        );
    }
}

export default App;
