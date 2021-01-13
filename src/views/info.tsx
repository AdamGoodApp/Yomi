import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import ReadMore from '@fawazahmed/react-native-read-more';
import Ratings from '../components/Ratings';
import Stats from '../components/Stats';
import Review from '../components/Card/review';
import CardLoading from '../components/Card/cardLoading';

const Info = ({ route, navigation }: any): React.ReactElement => {
  const { manga } = route.params;
  const { 
    title: { english, romaji }, 
    coverImage: { extraLarge }, 
    bannerImage, 
    description ,
    meanScore,
    favourites,
    genres,
    startDate,
    chapters,
    staff: { nodes },
    reviews
  }: IManga = manga;
  const cleanedDesc: string = description.split('<br>')[0];
  const renderItem = ({ item }: any) => <Review review={item} />

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

        <View style={{
          flexDirection: "row", 
          justifyContent: "space-between", 
          borderBottomColor: 'rgb(44,44,46)',
          borderBottomWidth: 0.5, 
          paddingBottom: 28, 
          marginBottom: 28 
        }}>
          <Ratings score={meanScore} ratings={favourites} style={{marginBottom: 12}}/>
          <TouchableOpacity>
            <Image style={{width: 37, height: 37}} source={require('../../assets/text-badge-plus.png')} />
          </TouchableOpacity>
        </View>

        <Stats genres={genres} date={startDate} chapters={chapters} staff={nodes}/>

        {
          reviews.nodes.length > 0 &&
            <View>
              <Text style={{ color: '#fff', marginBottom: 15, fontSize: 18, fontFamily: 'SFProTextRegular' }}>Reviews</Text>

              <FlatList 
              data={reviews.nodes} 
              ListEmptyComponent={<CardLoading />}
              renderItem={renderItem}
              keyExtractor={(item: any) => `${item.id}`} 
              horizontal
              initialNumToRender={3}
              ItemSeparatorComponent={()=> <View style={{marginRight: 18}} />}
              showsHorizontalScrollIndicator={false}
            />
            </View>
        }
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