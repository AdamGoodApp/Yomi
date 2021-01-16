import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface Props {
  handleClose: any;
  currentIndex: any;
  total: any;
  visible: boolean;
}

const Header = (props: Props): React.ReactElement => {
  const { handleClose, currentIndex, total, visible } = props;

  if (visible) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={handleClose}>
          <Feather name="chevron-left" size={38} color="white" />
        </TouchableOpacity>
  
        <Text style={{color: '#fff', fontSize: 16}}>{currentIndex + 1} of {total}</Text>
        <View style={{width: 50}} />
      </View>
    )
  } else {
    return <View  style={{height: 90}} />
  }
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    backgroundColor: '#121212',
    paddingTop: 48,
    paddingLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

export default Header;