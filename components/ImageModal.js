import React from 'react';
import { Modal, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ImageModal = ({ visible, image, onClose }) => (
  <Modal visible={visible} transparent={true} animationType="slide">
    <View style={styles.modalView}>
      <Image source={{ uri: image.filePath }} style={styles.fullImage} />
      <Text style={styles.title}>{image.title}</Text>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  fullImage: {
    width: '90%',
    height: '70%',
    resizeMode: 'contain',
  },
  title: {
    padding: 10,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ff6347',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
  },
});

export default ImageModal;
