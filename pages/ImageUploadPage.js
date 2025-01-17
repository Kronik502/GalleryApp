import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { insertImage } from '../database/database';

const ImageUploadPage = ({ route, navigation }) => {
  const { photo } = route.params;
  const [error, setError] = useState(null);

  const handleSave = async () => {
    try {
      await insertImage('Title', 'Description', photo.uri, 0, 0, new Date().toISOString());
      navigation.navigate('Home');
    } catch (err) {
      console.error('Error saving image:', err);
      setError(err);
    }
  };

  return (
    <View style={styles.container}>
      {photo ? (
        <>
          <Image source={{ uri: photo.uri }} style={styles.image} />
          <Button title="Save Photo" onPress={handleSave} />
        </>
      ) : (
        <Text>No photo to upload</Text>
      )}
      {error && <Text style={styles.errorText}>Error: {error.message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    marginTop: 20,
  },
});

export default ImageUploadPage;
