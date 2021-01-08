import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';

const Home = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Header title="Reading Now" profile />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: '21%',
    paddingLeft: 30,
    paddingRight: 30,
  }
});

export default Home;