import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css'
import {withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat:33.8660582, lng:-84.5737936  }}
    >
        {props.isMarkerShown && <Marker position={{ lat:33.8660582, lng:-84.5737936 }} />}
    </GoogleMap>
))


class Location extends Component{




    constructor(){
        super()



    }







    render(){
    return(
	  <MyMapComponent
	  isMarkerShown
	  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
	  loadingElement={<div style={{ height: `100%` }} />}
	  containerElement={<div style={{ height: `400px`, width: `60%`, float: `right` }} />}
	  mapElement={<div style={{ height: `100%` }} />}
/>

    ) 
  }
}

export default Location;


