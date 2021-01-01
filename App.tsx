import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Login from './src/views/login';

const App = () => {
  let [fontsLoaded] = useFonts({
    'SFPro': require('./assets/fonts/SF-Pro.ttf'),
    'SFProDisplayBold': require('./assets/fonts/SF-Pro-Display-Bold.otf'),
    'SFProTextRegular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(28,28,30)'
  }
});


export default App;