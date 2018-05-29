import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class Cart extends Component{

	constructor(){
		super();
		this.state={
			total : 0,
			names: []
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount(){

		const tempcart = JSON.parse(localStorage.getItem('myCart'));
  		
		var cartTotal = 0;
		for(let key in tempcart){
			// console.log(tempcart[key])
			cartTotal += tempcart[key].total;
		}
	
  		this.setState({
  			total: cartTotal
  		})
	}

	handleSubmit(event){
		event.preventDefault();
		
		this.props.history.push("/checkout");

	}

  	render(){
		const tempcart = JSON.parse(localStorage.getItem('myCart'));

		// let keys = [];
		// for(let key in tempcart){
		// 	keys.push(<h1>{tempcart[key].total}</h1>);
		// }

		let keys = [];
		for(let key in tempcart){
			keys.push(key);
		}

		const items = keys.map((x)=>{
			return (

					<div className="item">
						<img width="200px"src={tempcart[x].icon} />
						Item: {tempcart[x].name} Price: {tempcart[x].total}
					</div>

				)
		})

	//	console.log(items)
	    return(
	    	<div>
	    		<h2>Items</h2>
	    		{items}
	    		<hr/>
	    		<h2>Total: {this.state.total}</h2>
	    		<button type="submit" onClick={this.handleSubmit} className="btn btn-primary">CheckOut</button>
	    	</div>
	    ) 
	  }
	}

export default Cart;
