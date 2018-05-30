import React, {Component} from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete'

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);  
    this.state = { address: '' }
    this.nearestStore= this.nearestStore.bind(this)
  }

  distance(lat1, lon1, lat2, lon2){
  let storeDistance = Math.sqrt(Math.pow((lat1-lat2),2)+Math.pow((lon1-lon2),2));
    return storeDistance;
}

  handleChange = (address) => {
    this.setState({ address })
  }

  handleSelect = (address) => {
    this.setState({ address })
    let lat=0;
    let lng=0;
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng =>  {console.log('success', latLng)
        lat = latLng.lat
        lng = latLng.lng
        this.nearestStore(lat,lng);
    })
      .catch(error => console.error('Error', error))


    document.getElementById('autocompleteInputBox').value=this.state.address

  }

  nearestStore(lat, lng) {
const stores = [
 [ 33.932705, -84.572759,"store1", "Marietta"],
 [ 33.762861, -84.446353,"store2", "Atlanta"],
 [ 33.872955, -84.519719,"store3", "Smyrna"],
 [ 34.032796, -84.617816,"store4", "Kennesaw"] 
];

    console.log("lat is: " + lat)
    console.log("lng is: " + lng)
     let mindif = this.distance(stores[0][0],stores[0][1],lat,lng)
  let closest = stores[0]

   for (let i = 0; i < stores.length; i++) {
  const dif = this.distance(stores[i][0],stores[i][1],lat,lng)

    if (dif < mindif) {
    closest = stores[i];
    mindif = dif;
 }
}
 document.getElementById('nearestStore').innerHTML = `Your nearest store is ${closest[2]} in ${closest[3]}`
 return closest
}

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <input id='autocompleteInputBox'
              {...getInputProps({
                placeholder: 'city, state, address...',
                className: 'location-search-input',
                size: 30    
              })}
            />
            
            <div className="autocomplete-dropdown-container">
              {suggestions.map(suggestion => {
                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div {...getSuggestionItemProps(suggestion, { className, style })}>
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default LocationSearchInput;