import React from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { setUser } from '../store/actions/User';
import { deleteKey } from '../lib/secure-storage';

const Home = ({ navigation }: any): React.ReactElement => {
  const dispatch = useDispatch();

  const onSubmit = async () => {
    await deleteKey('user');
    dispatch(setUser({ auth: false }));
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSubmit}>
        <Text style={{ fontSize: 18, color: '#fff', fontFamily: 'SFPro' }}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(28,28,30)'
  }
});

export default Home;