import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
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
      dispatch(setUser({ auth: true, account: user.user }));
      navigation.navigate('Home');
    } else {
      setError(true);
    }
  }

  return (
    <View style={styles.container}>
      <Image style={{width: 50, height: 50, marginBottom: 35}} source={require('../../assets/animatedlogo.gif')} />

      <Text style={{color: '#fff', fontSize: 34, fontFamily: 'SFProDisplayBold', marginBottom: 16}}>Login</Text>

      <Text style={{color: '#8e8d92', fontSize: 17, fontFamily: 'SFPro'}}>Welcome to Yomi,</Text>
      <Text style={{color: '#8e8d92', fontSize: 17, fontFamily: 'SFPro', marginBottom: 40}}>Sign in to your account to continue reading</Text>

      
      <TextField
        styles={{marginBottom: 30}} 
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
          <TouchableOpacity onPress={onSubmit} style={styles.login}>
            <Text style={{ fontSize: 18, color: '#fff', fontFamily: 'SFProTextBold' }}>Sign In</Text>
          </TouchableOpacity>

          <Text style={{ fontSize: 15, color: '#8e8d92', fontFamily: 'SFProTextBold' }}>Don't have an account? 
            <TouchableOpacity style={{marginBottom: -2}}>
              <Text style={{fontSize: 15, color: '#007AFF', fontFamily: 'SFProTextBold' }}> Create account</Text>
            </TouchableOpacity>
          </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: 120,
    paddingLeft: 16,
    paddingRight: 16,
  },
  form: {
    flex: 1,
    marginHorizontal: 40,
    marginBottom: 40,
  },
  loginContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 66,
    alignItems: 'center'
  },
  login: {
    height: 56,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    backgroundColor: '#007AFF'
  },
  error: {
    color: 'rgb(255,55,95)', 
    fontSize: 15, 
    fontFamily: 'SFProDisplayBold', 
  }
});


export default Login;
