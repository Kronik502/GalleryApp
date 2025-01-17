import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ImageCard = ({ image, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={() => onPress(image)}>
    <Image source={{ uri: image.filePath }} style={styles.image} />
    <Text style={styles.title}>{image.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
  },
  title: {
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default ImageCard;
