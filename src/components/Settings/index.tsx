import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  onSignOut: () => any;
  onSettingsClose: () => any;
  user: User;
}

interface User {
  createdAt: string,
  email: string,
  id: number,
  name: string,
  picture: string,
}

const Settings = (props: Props): React.ReactElement => {
  const { onSignOut, onSettingsClose, user } = props;

  return (
    <View style={ styles.container }>
      <View style={styles.header}>
        <View style={{width: 35, height: 10}}/>
        <Text style={{ color: '#fff', fontFamily: 'SFProTextBold', fontSize: 17 }}>Account</Text>
        
        <TouchableOpacity onPress={onSettingsClose}>
          <Text style={{ color: '#fff', fontFamily: 'SFProTextBold', fontSize: 17 }}>Done</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <TouchableOpacity>
          <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'SFPro', textTransform: 'capitalize', marginBottom: 3 }}>{user && user.name}</Text>
          <Text style={{ fontSize: 12, color: '#8e8d92', fontFamily: 'SFPro' }}>{user && user.email}</Text>
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
    padding: 13,
    backgroundColor: '#2c2c2e',
    marginTop: 40
  }
});

export default Settings;