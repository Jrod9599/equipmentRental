import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./App.css";

class BootstrapNavBar extends Component{

  constructor(){
      super();
      this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event){
    event.preventDefault();
    localStorage.clear();
    this.props.history.push("/");
  }


	render(){

    const loggedIn = localStorage.token
   return(
<div className={'row'}>
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
            <li><Link to="/logout" onClick={this.handleLogout}>Logout</Link></li>
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
</div>
   )
 }
}

export default BootstrapNavBar;