import React, {Component} from 'react'

class StoreLocator extends Component{
	render(){
		return(
			<div className="storeLocator">
			<h2>STORE LOCATOR</h2>
			<p>Simply enter your city and state, or zip code and click search. Rental service stores will pop up on the map. Click on one of the locations to see the address. You can then find the shortest route to a store by clicking the ‘get directions’ button.</p>
			<form>
				ENTER YOUR LOCATION:<input type="text" placeholder="city, state, address, or zipcode..." size="30"/><br/><br/>
				<input type="submit" value="Search"/>
			</form>
			</div>
			)
	}
}

export default StoreLocator;