import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import Profile from '../Profile';

interface Props {
  title: string
  profile?: boolean
}

const Header = (props: Props): React.ReactElement => {
  const { title, profile } = props;

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 34, color: '#fff', fontFamily: 'SFProDisplayBold' }}>{title}</Text>

      {profile && <Profile />}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'rgb(44,44,46)',
    borderBottomWidth: 0.5,
    height: 65
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 50
  }
});

export default Header;