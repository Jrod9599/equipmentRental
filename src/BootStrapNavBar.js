import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./App.css";

class BootstrapNavBar extends Component{
	render(){

    const loggedIn = localStorage.token
   return(

     <nav className="navbar navbar-inverse navbar-fixed-top">
       <div className="container-fluid">
         <div className="navbar-header">
           <Link to="/" className="navbar-brand">Equipment Rental</Link>
         </div>
         <ul className="nav navbar-nav">
            <li><Link to="/locations">Locations</Link></li> 
            {
              loggedIn === undefined
              ?
            <li><Link to="/login">Login</Link></li>
            :
            <li><Link to="/logout">Logout</Link></li>
            }
            {
              loggedIn === undefined
              ?
              <li><Link to="/register">Register</Link></li>
              :
              <spam />
            }
		      	<li><Link to="/contact">Contact Us</Link></li>           
         </ul>
       </div>
     </nav>
   )
 }
}

export default BootstrapNavBar;