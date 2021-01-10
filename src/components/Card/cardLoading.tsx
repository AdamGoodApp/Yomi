import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardLoading = (): React.ReactElement => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.image} />
      </View>
      <View style={styles.container}>
        <View style={styles.image} />
      </View>
      <View style={{...styles.container, marginRight: 0}}>
        <View style={styles.image} />
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
   marginRight: 18,
  },
  image: {
    width: 140,
    height: 210,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#141414"
  }
});

export default CardLoading;