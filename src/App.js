import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ItemBox from './itemBox';
import BootstrapNavBar from './BootStrapNavBar';
import Login from './Login';
import Register from './Register';
import Contact from './Contact';
import Banner from './banner';
import GoogleMap from './GoogleMap';
import StoreLocator from './StoreLocator'
import Location from './Location';
import Footer from './footer'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ThumbContainer from "./thumbContainer";
import ItemPage from "./itempage";

class App extends Component {


    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" component={BootstrapNavBar}/>
                    <Route exact path="/" component={Banner}/>
                    <div className={'container1 '}>
                    <Route exact path="/" component={ThumbContainer}/>
                    <Route exact path="/locations" component={StoreLocator} />
                    <Route exact path="/locations" component={GoogleMap} />
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route path={'/product/:productid'} component={ItemPage}/>
                </div>
                    <Route component={Footer}/>

                </div>
            </Router>
        );
    }
}

export default App;
