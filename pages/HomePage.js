import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { fetchImages } from '../database/database';
import ImageCard from '../components/ImageCard';
import ImageModal from '../components/ImageModal'; // Import ImageModal component

const HomePage = ({ navigation }) => {
  const [images, setImages] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const loadImages = async () => {
      const fetchedImages = await fetchImages();
      setImages(fetchedImages);
    };

    loadImages();
  }, []);

  const handleImagePress = (image) => {
    setSelectedImage(image);  // Set the selected image
    setModalVisible(true);    // Show the modal
  };

  const handleCloseModal = () => {
    setModalVisible(false);   // Close the modal
    setSelectedImage(null);   // Clear the selected image
  };

  return (
    <View style={styles.container}>
      {/* Render image cards */}
      {images.length === 0 ? (
        <Text style={styles.noImagesText}>No images available</Text>
      ) : (
        <FlatList
          data={images}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ImageCard image={item} onPress={handleImagePress} />
          )}
        />
      )}

      {/* Camera button */}
      <View style={styles.cameraButton}>
        <Button
          title="Go to Camera"
          onPress={() => navigation.navigate('CameraPage')}
        />
      </View>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          visible={modalVisible}
          image={selectedImage}
          onClose={handleCloseModal}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  noImagesText: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 20,
  },
  cameraButton: {
    marginTop: 20,
  },
});

export default HomePage;
