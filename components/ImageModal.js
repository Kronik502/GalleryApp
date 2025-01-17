import React from 'react';
import { Modal, View, Image, StyleSheet, Button } from 'react-native';

const ImageModal = ({ visible, image, onClose }) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Image source={{ uri: image.uri }} style={styles.image} />
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default ImageModal;
