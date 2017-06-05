import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import MarkerClusterer from 'react-google-maps/lib/addons/MarkerClusterer';

const FULL_HEIGHT = `100%`

const GoogleMapClusters = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={15}
    center={{ lat: 51.509865, lng: -0.118092 }}
  >
    <MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridsize={60}
    >
      {props.markers.map((marker, i) => (
        <Marker
          position={{ lat: marker.coordinates.latitude, lng: marker.coordinates.longitude }}
          key={i}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
));


const GMap = (props) => {
  const { latitude, longitude, atms } = props;
  return (
    <GoogleMapClusters
      containerElement={ <div style={{ height: FULL_HEIGHT}} /> }
      mapElement={ <div style={{ height: FULL_HEIGHT}} /> }
      latitude={latitude}
      longitude={longitude}
      markers={atms}
    />
  );
}

export default GMap;