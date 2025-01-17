import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/HomePage';
import FullScreenImageView from './pages/FullScreenImageView';
import ImageUploadPage from './pages/ImageUploadPage';
import MapPage from './pages/MapPage';
import SearchFilterPage from './pages/SearchFilterPage';
import SettingsPage from './pages/SettingsPage';
import CameraPage from './pages/CameraPage';
import { createTable } from './database/database';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    createTable();  // Ensure table creation here
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Fullscreen" component={FullScreenImageView} />
        <Stack.Screen name="Upload" component={ImageUploadPage} />
        <Stack.Screen name="Map" component={MapPage} />
        <Stack.Screen name="Search" component={SearchFilterPage} />
        <Stack.Screen name="Settings" component={SettingsPage} />
        <Stack.Screen name="Camera" component={CameraPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
