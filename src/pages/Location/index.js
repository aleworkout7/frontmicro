import React, { Component } from 'react';

// import { Container } from './styles';

export default class Location extends Component {

    state = {
        latitude: '',
        longitude: '',
    };
      
    componentDidMount() {
        this.getMyLocation();
    }
        
    getMyLocation = () => {
        const location = window.navigator && window.navigator.geolocation;
      
        if (location){
          location.getCurrentPosition(position => {
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          }, (error) => {
            this.setState({
              latitude: 'error latitude',
              longitude: 'error longitude',
            });
          })
        }
    };

  render() {
    const {longitude, latitude} = this.state;
    return (
        <div>
            <input 
            type="text" 
            placeholder="longitude" 
            value={longitude}
            />
            <input 
            type="text" 
            placeholder="latitude" 
            value={latitude}
            />
        </div>
    );
  }
}
