import React, {Component} from 'react'
import LocationSearchInput from './AutoComplete'
import NearestStore from './NearestStore'

class StoreLocator extends Component{
	render(){

		return(
			<div className="storeLocator">
			<h2>STORE LOCATOR</h2>
			<p>Simply enter your city and state, or zip code and click search. The closest rental service store will be shown at the buttom.</p>
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

