import React, {Component} from 'react';
import './App.css'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';




// function distnace(lat1, lon1, lat2, lon2){
//   distnace = Math.sqrt(Math.pow((lat1-lat2),2)+Math.pow((lon1-lon2),2)
//     return distance;
// }


// nearestStore = (latitude, longitude) => {
//  let mindif = distance(stores[0][0],stores[0][1],userAddress[0],userAddress[1])
//  let closest = stores[0]

//  for (let i = 0; i < stores.length; i++) {
//   const dif = distance(stores[i][0],stores[i][1],userAddress[0],userAddress[1])

//     if (dif < mindif) {
//     closest = stores[i];
//     mindif = dif;
//  }
//  return closest
// },


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
      <Map google={this.props.google} zoom={14} style={{width: `40%`, height: `100%`}} initialCenter={{
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



