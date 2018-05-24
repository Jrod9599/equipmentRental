import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class Contact extends Component{

  render(){
    return(
      <div>
      	<form id="usrform">
        	<h1>Contact Us</h1>

        	  <div className="form-group contact">
        	    <label for="name">Name:</label>
        	    <input type="text" className="form-control contactfrm" id="name" required/>
        	  </div>

        	  <div className="form-group contact">
        	    <label for="email">Email address:</label>
        	    <input type="email" className="form-control contactfrm" id="email" required/>
        	  </div>

            <div className="form-group contact">
              <label for="msg">Message:</label>
            </div>
            <div className="form-group contact">
              <textarea rows="10" cols="50" className="msg" form="usrform"> </textarea>
            </div>
        	<button type="submit" className="btn btn-primary">Submit</button>
      	</form>

      </div>
    ) 
  }
}

export default Contact;