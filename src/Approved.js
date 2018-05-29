import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class Approved extends Component{

	constructor(){
		super();
	}

	componentDidMount(){
		setTimeout(()=>{ this.props.history.push("/") }, 4000);
	}

	render(){
		return(
			<div>
				<h1>Payment Approved</h1>
			</div>
		)
	}
}

export default Approved;