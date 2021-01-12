import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Info = ({ route, navigation }: any): React.ReactElement => {
  const { manga } = route.params;
  const { 
    title: { english, romaji }, 
    coverImage: { extraLarge }, 
    bannerImage, 
    description 
  } = manga;
  const cleanedDesc: string = description.split('<br>')[0];

  return (
    <View style={styles.container}>
      <Image style={styles.bannerImage} source={{uri: bannerImage || extraLarge }} />

      <View style={styles.content}>
        <View>
          <Text style={{color: '#fff', fontFamily: 'SFProTextBold', fontSize: 32, marginBottom: 12}}>{english || romaji}</Text>

          <Text style={{color: '#fff', fontFamily: 'SFProTextRegular'}}>{ cleanedDesc }</Text>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  bannerImage: {
    width: '100%',
    height: 240,
    resizeMode: 'cover'
  },
  content: {
    paddingLeft: 32,
    paddingRight: 32,
    marginTop: 26
  }
});

export default Info;