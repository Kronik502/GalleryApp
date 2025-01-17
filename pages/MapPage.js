import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps-super-cluster'; // Update if using an alternative library
import { fetchImages } from '../database/database';

const MapPage = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      fetchImages(setImages);
    } catch (err) {
      console.error('Error fetching images:', err);
      setError(err);
    }
  }, []);

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.errorText}>Error: {error.message}</Text>
      ) : (
        <MapView style={styles.map}>
          {images.map((image) => (
            <Marker
              key={image.id}
              coordinate={{ latitude: image.latitude, longitude: image.longitude }}
              title={image.title}
            />
          ))}
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default MapPage;
