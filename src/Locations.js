import React,{Component} from 'react'
import GoogleMap from './GoogleMap';
import StoreLocator from './StoreLocator'
import AutoComplete from './AutoComplete'

function Locations(){
	return(
		<div className="locations container">
			<StoreLocator />
			<GoogleMap />
			<AutoComplete />
		</div>
		)
}

export default Locations;