import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { Camera, CameraType } from 'expo-camera';  // Use CameraType from expo-camera

const CameraPage = ({ navigation }) => {
  const [facing, setFacing] = useState(CameraType.back);  // Use CameraType for camera facing
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const toggleFacing = () => {
    setFacing(facing === CameraType.back ? CameraType.front : CameraType.back);
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={facing} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <Button title="Flip Camera" onPress={toggleFacing} />
          <Button
            title="Take Photo"
            onPress={async () => {
              if (cameraRef.current) {
                let photo = await cameraRef.current.takePictureAsync();
                navigation.navigate('ImageUploadPage', { photo });
              }
            }}
          />
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
});

export default CameraPage;
