import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Text, TextInput} from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground style={styles.image} source={require('../../assets/login-background.jpg')}>
      <View style={styles.form}>
        <Text style={{color: '#fff', fontSize: 36, fontFamily: 'SFProDisplayBold'}}>Login</Text>

        <TextInput 
          style={{...styles.input, marginBottom: 30, marginTop: 40}} 
          onChangeText={(text: string) => setEmail(text)}
          value={email}
          placeholder='Email'
          placeholderTextColor='rgba(255, 255, 255, 0.6)'
          autoCapitalize='none'
          autoCompleteType='email'
          caretHidden={false}
          clearButtonMode='while-editing'
          keyboardAppearance='dark'
          keyboardType='email-address'
          textContentType='emailAddress'
        />
        <TextInput 
          style={{...styles.input, marginBottom: 30}} 
          onChangeText={(text: string) => setPassword(text)}
          value={password}
          placeholder='Password'
          placeholderTextColor='rgba(255, 255, 255, 0.6)'
          autoCapitalize='none'
          autoCompleteType='password'
          caretHidden={false}
          clearButtonMode='while-editing'
          keyboardAppearance='dark'
          secureTextEntry={true}
          textContentType='password'
        />

        <View style={styles.loginContainer}>
          <TouchableOpacity
            onPress={() => alert('Hello, world!')}
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
  input: {
    height: 60,
    width: '100%',
    borderColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 9,
    color: '#fff',
    fontSize: 16,
    fontFamily: 'SFProTextRegular'
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
