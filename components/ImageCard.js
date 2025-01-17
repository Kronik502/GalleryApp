import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ImageCard = ({ image, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(image)}>
      <View style={styles.card}>
        <Image source={{ uri: image.uri }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
});

export default ImageCard;
