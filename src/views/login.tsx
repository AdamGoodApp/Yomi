import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Text} from 'react-native';
import TextField from '../components/inputs/TextField';
import PasswordField from '../components/inputs/PasswordField';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPress = () => {
    alert('hii');
  }

  return (
    <ImageBackground style={styles.image} source={require('../../assets/login-background.jpg')}>
      <View style={styles.form}>
        <Text style={{color: '#fff', fontSize: 36, fontFamily: 'SFProDisplayBold'}}>Login</Text>

        <TextField
          styles={{marginBottom: 30, marginTop: 40}} 
          value={email}
          onChange={setEmail}
        />
        <PasswordField 
          styles={{marginBottom: 30}} 
          value={password}
          onChange={(text: string) => setPassword(text)}
        />

        <View style={styles.loginContainer}>
          <TouchableOpacity
            onPress={onPress}
            style={styles.login}>
            <Text style={{ fontSize: 18, color: '#fff', fontFamily: 'SFPro' }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  form: {
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: 40,
    marginBottom: 40,
  },
  loginContainer: {
    alignItems: 'flex-end'
  },
  login: {
    height: 60,
    width: 120,
    borderColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 90
  }
});


export default Login;
