import React from 'react';
import { StyleSheet } from 'react-native';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const CustomMapView = ({ images }) => (
  <MapContainer style={styles.map} center={[51.505, -0.09]} zoom={13}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {images.map((image) => (
      <Marker
        key={image.id}
        position={[image.latitude, image.longitude]}
      >
        <Popup>{image.title}</Popup>
      </Marker>
    ))}
  </MapContainer>
);

const styles = StyleSheet.create({
  map: {
    height: '100%', 
    width: '100%'
  },
});

export default CustomMapView;
