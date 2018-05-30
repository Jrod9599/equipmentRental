import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class Login extends Component{

	constructor(){
		super();
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin(event){
		event.preventDefault();
		this.props.history.push("/");
		localStorage.setItem('logged','true')
	}

  	render(){
	    return(
	    <div className="container clogin">
		<form className="login" onSubmit={this.handleLogin}>
		<div className="cform">
			<h1 className="loginH1">Login</h1>
			  <div className="form-group">
			    <label for="email">Email address:</label>
			    <input type="email" className="form-control loginfrm" id="email" required/>
			  </div>

			  <div className="form-group">
			    <label for="pwd">Password:</label>
			    <input type="password" className="form-control loginfrm" id="pwd" required/>
			  </div>

			  <button type="submit" className="btn btn-primary">Log In</button>
		  </div>
		</form>
		</div>
	    ) 
	  }
	}

export default Login;

