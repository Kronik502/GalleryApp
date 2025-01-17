import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { fetchImages } from '../database/database';
import ImageCard from '../components/ImageCard';

const SearchFilterPage = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [filteredImages, setFilteredImages] = useState([]);

  const handleSearch = () => {
    fetchImages((images) => {
      const result = images.filter((image) => image.title.includes(query));
      setFilteredImages(result);
    });
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Search" value={query} onChangeText={setQuery} style={styles.input} />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={filteredImages}
        renderItem={({ item }) => <ImageCard image={item} onPress={() => navigation.navigate('FullScreenImageView', { image: item })} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default SearchFilterPage;
