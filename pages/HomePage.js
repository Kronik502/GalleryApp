import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, Button } from 'react-native';
import { fetchImages } from '../database/database';
import ImageCard from '../components/ImageCard';
import ImageModal from '../components/ImageModal';

const HomePage = ({ navigation }) => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchImages(setImages).catch(err => {
      console.error('Error fetching images:', err);
      setError(err);
    });
  }, []);

  return (
    <View style={styles.container}>
      {error && <Text style={styles.errorText}>Error: {error.message}</Text>}
      <FlatList
        data={images}
        renderItem={({ item }) => <ImageCard image={item} onPress={setSelectedImage} />}
        keyExtractor={(item) => item.id.toString()}
      />
      {selectedImage && (
        <ImageModal
          visible={!!selectedImage}
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
      <Button
        title="Open Camera"
        onPress={() => navigation.navigate('Camera')}
        style={styles.cameraButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  cameraButton: {
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default HomePage;
