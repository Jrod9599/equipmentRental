import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class Rent extends Component{
  
  constructor(){
  	super();
  }

  render(){
    return(
      <div className="container cregister">
      	<form className="register">
          <div className="rform">
        	  <h1 className="registerH1">Register</h1>
        	  
        	  <div className="form-group">
        	    <label for="fname">First Name:</label>
        	    <input type="text" className="form-control registerfrm" id="fname" required/>
        	  </div>
      
      	  </div>
      	</form> 
      </div>
    ) 
  }
}

export default Rent;