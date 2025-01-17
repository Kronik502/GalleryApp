import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const SettingsPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Settings Page</Text>
      <Button title="Manage Permissions" onPress={() => alert('Permissions management coming soon!')} />
      <Button title="Manage Data Security" onPress={() => alert('Data security management coming soon!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default SettingsPage;
