import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';

const FullScreenImageView = ({ route, navigation }) => {
  const { image } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image.filePath }} style={styles.fullImage} />
      <Button title="Close" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
});

export default FullScreenImageView;
