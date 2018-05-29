import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class Cart extends Component{

	constructor(){
		super();
		this.state={
			total : 0
		}
	}



	cartItemTotal(event){
		event.preventDefault();
		const tempcart = JSON.parse(localStorage.getItem('myCart'));
  		console.log(tempcart);
  		var cartTotal = 0;
  		tempcart.map((item)=>{
  			cartTotal = cartTotal + item.total;
  		})
  		this.setState({
  			total: cartTotal
  		})

  		tempcart.map((item)=>{
  			return(
  				<div>
  					<h3> {item.name} {item.total} </h3>
  					<img src={item.icon} />
  				</div>
  			)
  		})

	}

  	render(){
	    return(
	    	<div>
	    		<h2>Items</h2>
	    		{this.cartItemTotal}

	    		{this.state.total}
	    	</div>
	    ) 
	  }
	}

export default Cart;

