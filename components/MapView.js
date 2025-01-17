import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const CustomMapView = ({ images }) => (
  <MapView style={styles.map}>
    {images.map((image) => (
      <Marker
        key={image.id}
        coordinate={{ latitude: image.latitude, longitude: image.longitude }}
        title={image.title}
      />
    ))}
  </MapView>
);

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default CustomMapView;
