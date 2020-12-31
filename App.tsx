import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';
import Login from './src/views/login';

const App = () => {
  return (
    <LinearGradient 
      colors={["#41454F", "#202226"]} {...deg(216.7)}
      end={[0, 1]}
      style={styles.container}
    >
      <StatusBar style="light" />
      <Login />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


export default App;