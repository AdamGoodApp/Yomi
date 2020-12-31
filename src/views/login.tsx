import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Login = () => {
  return (
    <View
      style={styles.background}
    >
      <View style={styles.logo}>
        <Image style={styles.image} source={require('../../assets/reading.png')} />
      </View>
      <View style={styles.login}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  logo: {
    flex: 0.7
  },
  image: {
    height: '100%',
    width: '100%',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  login: {
    flex: 1,
  }
});


export default Login;
