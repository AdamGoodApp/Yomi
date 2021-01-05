import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/actions/User';
import { login } from '../lib/network/user';
import { secureStore } from '../lib/secure-storage';
import TextField from '../components/Inputs/TextField';
import PasswordField from '../components/Inputs/PasswordField';

const Login = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const onSubmit = async () => {
    const user = await login(email, password);

    if(!user) {
      return;
    }

    if ('token' in user) {
      await secureStore('user', JSON.stringify(user));
      dispatch(setUser({ auth: true }));
      navigation.navigate('Home');
    } else {
      setError(true);
    }
  }

  return (
    <ImageBackground style={styles.image} source={require('../../assets/login-background.jpg')}>
      <KeyboardAvoidingView style={styles.form} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <Text style={{color: '#fff', fontSize: 36, fontFamily: 'SFProDisplayBold'}}>Login</Text>

        <TextField
          styles={{marginBottom: 30, marginTop: 40}} 
          value={email}
          onChange={setEmail}
        />
        <PasswordField 
          styles={{marginBottom: 15}} 
          value={password}
          onChange={(text: string) => setPassword(text)}
        />

        { error && <Text style={styles.error}>
          You have entered an invalid username or password
        </Text>}

        <View style={styles.loginContainer}>
          <TouchableOpacity>
            <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'SFProTextBold' }}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onSubmit}
            style={styles.login}>
            <Text style={{ fontSize: 18, color: '#fff', fontFamily: 'SFPro' }}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 60
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
  },
  error: {
    color: 'rgb(255,55,95)', 
    fontSize: 15, 
    fontFamily: 'SFProDisplayBold', 
  }
});


export default Login;
