import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Resources extends Component {
  static defaultProps = {
    center: {
      lat: 39.55,
      lng: -105.78
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAZXzxpUMXx7NlFEXX06NLewINHkf7ikcU' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          
          <AnyReactComponent
            lat={39.5501}
            lng={105.7821}
            text={'Colorado'}
          />
        </GoogleMapReact>
      </div>
    );
  }
  
}
 
export default Resources;