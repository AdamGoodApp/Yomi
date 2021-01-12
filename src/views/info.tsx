import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import ReadMore from '@fawazahmed/react-native-read-more';
import Ratings from '../components/Ratings';

const Info = ({ route, navigation }: any): React.ReactElement => {
  const { manga } = route.params;
  const { 
    title: { english, romaji }, 
    coverImage: { extraLarge }, 
    bannerImage, 
    description ,
    meanScore,
    favourites
  } = manga;
  const cleanedDesc: string = description.split('<br>')[0];

  return (
    <View style={styles.container}>
      <Image style={styles.bannerImage} source={{uri: bannerImage || extraLarge }} />

      <View style={styles.content}>
        <View style={{ borderBottomColor: 'rgb(44,44,46)', borderBottomWidth: 0.5, paddingBottom: 10, marginBottom: 28}}>
          <Text style={{color: '#fff', fontFamily: 'SFProTextBold', fontSize: 32, marginBottom: 12}}>{english || romaji}</Text>

          <ReadMore 
            numberOfLines={5} 
            style={styles.textStyle} 
            seeMoreText="More" 
            backgroundColor="#000"
            seeMoreStyle={{color: '#fff', fontFamily: 'SFProTextBold'}}
            seeLessStyle={{}}
          >

            <Text style={{color: '#fff', fontFamily: 'SFProTextRegular'}}>{ cleanedDesc }</Text>
          </ReadMore>
        </View>

        <Ratings score={meanScore} ratings={favourites} style={{marginBottom: 12}}/>
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
  },
  textStyle: {
    fontSize: 14,
  },
});

export default Info;