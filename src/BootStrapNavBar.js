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
    alert("Logging Out");
  }


	render(){

    const loggedIn = localStorage.token
   return(
<div className={'row'}>
     <nav className="navbar navbar-inverse navbar-fixed-top">
       <div className="container-fluid">
         <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                 <span class="sr-only">Toggle navigation</span>
                 <span class="icon-bar"></span>
                 <span class="icon-bar"></span>
                 <span class="icon-bar"></span>
               </button>
               <Link to="/" className="navbar-brand">Equipment Rental</Link>
         </div>
         <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
             <ul className="nav navbar-nav">
                <li><Link to="/locations">Locations</Link></li> 
                {
                    !loggedIn
                    ?
                  <li><Link to="/login">Login</Link></li>
                  :
                  <li><Link to="/logout" onClick={this.handleLogout}>Logout</Link></li>
                }
                {
                  !loggedIn
                  ?
                  <li><Link to="/register">Register</Link></li>
                  :
                  <spam />
                }
    		      	<li><Link to="/contact">Contact Us</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right"> 
                <li><Link to="/cart"><i class="fa fa-shopping-cart cart" aria-hidden="true"></i>
                </Link></li>           
             </ul>
         </div>
       </div>
     </nav>
</div>
   )
 }
}

export default BootstrapNavBar;