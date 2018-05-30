import React, {Component} from 'react';
import './App.css'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class App extends Component {
  render() {

const stores = [
 [ 33.932705, -84.572759,"store1", "Marietta"],
 [ 33.762861, -84.446353,"store2", "Atlanta"],
 [ 33.872955, -84.519719,"store3", "Smyrna"],
 [ 34.032796, -84.617816,"store4", "Kennesaw"] 
];


const markers = stores.map(store=>{
  return <Marker
            position={{lat:store[0],
            lng:store[1]}} />
})


    return (
      <div className='googleMap'>
      <Map google={this.props.google} zoom={10} style={{position: `relative!`, width: `100%`, height: `100%`}} initialCenter={{
            lat:33.8660582,
            lng:-84.5737936
          }}>
            <Marker
            position={{ lat:33.8660582,
            lng:-84.5737936}} />
            {markers}

      </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBV4_xoUBf43UhCv8-Fidq9Y4GY_4HOEYc'
})(App)



