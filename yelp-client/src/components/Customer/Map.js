import React, { Component } from 'react';
import Geocode from "react-geocode";
import CurrentLocation from './CurrentLocation'
import { Map, GoogleApiWrapper,InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    map: {
      position: 'absolute',
      width: '100%',
      height: '100%'
    }
  };



export class MapContainer extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            showingInfoWindow: false,  
            activeMarker: {},          
            selectedPlace: {}, 
            data:[],        
        };
       this.getlocation();
    }
      
  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });


onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null,
    });
  }
};

getlocation=()=>{
    Geocode.setApiKey('xxxxxxxxxxxxxxxxxxxxxxxxxx');
    this.props.restaurantlist.forEach((restaurent)=>{
    let address = restaurent.address.concat(' ',restaurent.city);
    let name = restaurent.name;
    
    Geocode.fromAddress(address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        this.state.data.push(<Marker position={{lat: lat, lng: lng}} 
            onClick={this.onMarkerClick}
            name={name}  
          />)
          this.forceUpdate()
      },
      error => {
        console.error(error);
      }
    );
    
    })
  }


  render() {
      console.log(this.state.data)
    return (  
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Current Location'}
        />
         {this.state.data}
        <InfoWindow
          marker={this.state.activeMarker}
         
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div> 
         </InfoWindow>  
            {this.state.data}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            >
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
})(MapContainer);