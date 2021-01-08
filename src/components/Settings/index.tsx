import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  onSignOut: () => any;
  onSettingsClose: () => any;
}

const Settings = (props: Props): React.ReactElement => {
  const { onSignOut, onSettingsClose } = props;

  return (
    <View style={ styles.container }>
      <View style={styles.header}>
        <View style={{width: 35, height: 10}}/>
        <Text style={{ color: '#fff', fontFamily: 'SFProTextBold', fontSize: 16 }}>Account</Text>
        
        <TouchableOpacity onPress={onSettingsClose}>
          <Text style={{ color: '#fff', fontFamily: 'SFProTextBold', fontSize: 17 }}>Done</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={onSignOut}>
          <Text style={{ fontSize: 18, color: '#fff', fontFamily: 'SFPro' }}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(29,29,30)',
    height: '100%',
    color: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2c2c2e',
    height: 55,
    padding: 18,
  },
  contentContainer: {
    padding: 15,
    backgroundColor: '#2c2c2e',
    marginTop: 40
  }
});

export default Settings;