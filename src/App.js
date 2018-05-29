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
import StoreLocator from './StoreLocator';
import Footer from './footer';
import Rent from './Rent';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ThumbContainer from "./thumbContainer";
import ItemPage from "./itempage";
import Locations from './Locations'

class App extends Component {


    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" component={BootstrapNavBar}/>

                    <Route exact path="/" component={Banner}/>
                    
                    <div className={'container'}>
                      <Route exact path="/" component={ThumbContainer}/>
                      <Route exact path="/locations" component={Locations} />
                     {/*} <Route exact path="/locations" component={StoreLocator} />
                      <Route exact path="/locations" component={GoogleMap} />*/}
                      <Route exact path="/login" component={Login}/>
                      <Route exact path="/register" component={Register}/>
                      <Route exact path="/contact" component={Contact}/>
                      <Route path={'/product/:productid'} component={ItemPage}/>
                      <Route path={'/Rent/:productid'} component={Rent} />
                   </div>
                    <Route component={Footer}/>

                </div>
            </Router>
        );
    }
}

export default App;
