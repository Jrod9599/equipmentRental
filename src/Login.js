import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class Login extends Component{
  render(){
    return(
	<form>
	<h1>Login Page</h1>
	  <div className="form-group">
	    <label for="email">Email address:</label>
	    <input type="email" className="form-control" id="email" />
	  </div>

	  <div className="form-group">
	    <label for="pwd">Password:</label>
	    <input type="password" className="form-control" id="pwd" />
	  </div>

	  <button type="submit" className="btn btn-default">Submit</button>
	</form>
    ) 
  }
}

export default Login;