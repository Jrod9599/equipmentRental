import React,{Component} from 'react'
import GoogleMap from './GoogleMap';
import StoreLocator from './StoreLocator'

function Locations(){
	return(
		<div className="locations container">
			<StoreLocator />
			<GoogleMap />
		</div>
		)
}

export default Locations;