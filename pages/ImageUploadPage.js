import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { getGeolocation } from '../utils/location';
import { insertImage } from '../database/database';

const ImageUploadPage = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [filePath, setFilePath] = useState('');
  const [location, setLocation] = useState(null);

  const handleUpload = async () => {
    try {
      const loc = await getGeolocation();
      setLocation(loc);
      insertImage(title, description, filePath, loc.latitude, loc.longitude, new Date().toISOString());
      navigation.goBack();
    } catch (error) {
      console.error('Fetch failed:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={styles.input} />
      <TextInput placeholder="File Path" value={filePath} onChangeText={setFilePath} style={styles.input} />
      <Button title="Upload Image" onPress={handleUpload} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default ImageUploadPage;
