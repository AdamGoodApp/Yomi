import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { secureStore } from './src/lib/secure-storage';
import Navigation from './src/views/navigation';

const App = () => {
  // Store masterkey to be used for api requests
  useEffect(() => {
    const storeKey = async () => {
      return await secureStore('master_key', '195FiTVCauQM2M9cHlIwhLzuHrkV6BsH');
    }
    
    storeKey();
  }, []);

  const [fontsLoaded] = useFonts({
    'SFPro': require('./assets/fonts/SF-Pro.ttf'),
    'SFProDisplay': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
    'SFProDisplayBold': require('./assets/fonts/SF-Pro-Display-Bold.otf'),
    'SFProTextRegular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
    'SFProTextBold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <StatusBar style='light' />

        <Navigation />
      </Provider>
    );
  }
}


export default App;