import React from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { setOpen } from '../../store/actions/Settings';

const Settings = (): React.ReactElement => {
  const dispatch = useDispatch();

  return (
    <View>
      <TouchableOpacity onPress={() => dispatch(setOpen({ open: true }))}>
        <Image style={styles.image} source={require('../../../assets/profile.jpg')} />
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  image: {
    width: 45,
    height: 45,
    borderRadius: 50
  }
});

export default Settings;