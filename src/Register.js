import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class Register extends Component{
  
  constructor(){
  	super();
  	this.state = {
  		buttonClass:"btn btn-primary",
  		buttonText: "Submit"
  	}
  	this.passwordCheck = this.passwordCheck.bind(this);
  	this.handleRegister = this.handleRegister.bind(this);
  }

  passwordCheck(event){
  	event.preventDefault();

  	const password = document.getElementById('password').value;
  	const confirmpass = document.getElementById('confirmpass').value;
  	
  	if(password !== confirmpass){
  		this.setState({
				buttonClass: "btn btn-danger",
				buttonText: "Passwords Dont Match",
		})
  	}
  	else{
  		this.setState({
				buttonClass: "btn btn-primary",
				buttonText: "Submit"
		})
  	}


  }

  handleRegister(event){
  	event.preventDefault();
  	var btnText = this.state.buttonText;
  	
  	if(btnText === "Submit"){
  		console.log("do stuff with database");
      //alert("You have been registered and logged in.");
      localStorage.token = "asdfj";
      this.props.history.push("/");
  	}
  	else{
  		console.log("pwd dont match");
  	}

  }

  render(){
    return(
      <div className="container cregister">
      	<form className="register" onSubmit={this.handleRegister}>
        <div className="rform">
      	<h1 className="registerH1">Register</h1>
      	  
      	  <div className="form-group">
      	    <label for="fname">First Name:</label>
      	    <input type="text" className="form-control registerfrm" id="fname" required/>
      	  </div>

      	   <div className="form-group">
      	    <label for="lname">Last Name:</label>
      	    <input type="text" className="form-control registerfrm" id="lname" required/>
      	  </div>

      	  <div className="form-group">
      	    <label for="email">Email address:</label>
      	    <input type="email" className="form-control registerfrm" id="email" required/>
      	  </div>

      	  <div className="form-group">
      	    <label for="password">Password:</label>
      	    <input type="password" className="form-control registerfrm" id="password" required/>
      	  </div>

      	  <div className="form-group">
      	    <label for="confirmpass">Confirm Password:</label>
      	    <input type="password" onChange={this.passwordCheck} className="form-control registerfrm" id="confirmpass" required/>
      	  </div>

      	  <button type="submit" className={this.state.buttonClass}>{this.state.buttonText}</button>
          </div>
      	</form> 
  </div>
    ) 
  }
}

export default Register;