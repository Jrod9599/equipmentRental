import React,{Component} from 'react'
import GoogleMap from './GoogleMap';
import StoreLocator from './StoreLocator'
import LocationSearchInput from './AutoComplete.js'



function Locations(){
	return(
		<div className="locations container">
			<div className={'row'}>
				<div className={'col-md-6'}>
                    <StoreLocator />
				</div>
				<div className={'col-md-6'}>
                    <GoogleMap />
				</div>
			</div>
		</div>

		)
}

export default Locations;