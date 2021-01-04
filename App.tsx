import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { store } from './src/lib/secure-storage';
import Login from './src/views/login';

const App = () => {
  store('master_key', '195FiTVCauQM2M9cHlIwhLzuHrkV6BsH');

  const [fontsLoaded] = useFonts({
    'SFPro': require('./assets/fonts/SF-Pro.ttf'),
    'SFProDisplayBold': require('./assets/fonts/SF-Pro-Display-Bold.otf'),
    'SFProTextRegular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
    'SFProTextBold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
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