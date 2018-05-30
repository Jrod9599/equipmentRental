import React, {Component} from 'react'
import LocationSearchInput from './AutoComplete'
import NearestStore from './NearestStore'

class StoreLocator extends Component{
	render(){

		return(
			<div className="storeLocator">
			<h2>STORE LOCATOR</h2>
			<p>Simply enter your city and state, or zip code and click search. Rental service stores will pop up on the map. Click on one of the locations to see the address.</p>
			<form>
				ENTER YOUR LOCATION:
				<LocationSearchInput />
				<input type="submit" value="Search"/>
				<NearestStore />
			</form>
			</div>
			)
	}
}

export default StoreLocator;

