import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import ReadMore from '@fawazahmed/react-native-read-more';
import Ratings from '../Ratings';
import Stats from '../Stats';
import Review from '../Card/review';
import RecommendedCard from '../Card/recommended-card';
import CardLoading from '../Card/cardLoading';
import Chapters from '../Chapters';

interface Props {
  manga: IManga;
  navigation: any;
  route: any;
}

const Full = (props: Props): React.ReactElement => {
  const {
    id,
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
    reviews,
    recommendations
  } = props.manga;
  const cleanedDesc: string = description.split('<br>')[0];
  const renderReview = ({ item }: any) => <Review review={item} />
  const renderCard = ({ item }: any) => <RecommendedCard manga={item} navigation={props.navigation} />
  const scrollRef = useRef<any>();
  const recommendedScrollRef = useRef<any>();

  // Reset scrolls to start position on component render
  useEffect(() => {
    scrollRef.current.scrollTo({x: 0, y: 0});
    recommendedScrollRef.current.scrollToIndex({index: 0});
  });

  return (
    <ScrollView style={styles.container} indicatorStyle={'white'} ref={scrollRef}>
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
            <Image style={{width: 37, height: 37}} source={require('../../../assets/text-badge-plus.png')} />
          </TouchableOpacity>
        </View>

        <Stats genres={genres} date={startDate} chapters={chapters} staff={nodes}/>

        {
          reviews.nodes.length > 0 &&
            <View style={{
              borderBottomColor: 'rgb(44,44,46)',
              borderBottomWidth: 0.5, 
              paddingBottom: 28, 
              marginBottom: 28 
            }}>
              <Text style={{ color: '#fff', marginBottom: 15, fontSize: 18, fontFamily: 'SFProTextRegular' }}>Reviews</Text>

              <FlatList 
                data={reviews.nodes} 
                ListEmptyComponent={<CardLoading />}
                renderItem={renderReview}
                keyExtractor={(item: any) => `${item.id}`} 
                horizontal
                initialNumToRender={3}
                ItemSeparatorComponent={()=> <View style={{marginRight: 18}} />}
                showsHorizontalScrollIndicator={false}
              />
            </View>
        }

        <View style={{
          borderBottomColor: 'rgb(44,44,46)',
          borderBottomWidth: 0.5, 
          paddingBottom: 28, 
          marginBottom: 28 
        }}>
          <Text style={{ color: '#fff', marginBottom: 15, fontSize: 18, fontFamily: 'SFProTextRegular' }}>Recommendations</Text>

          <FlatList 
            ref={recommendedScrollRef}
            data={recommendations.nodes} 
            ListEmptyComponent={<CardLoading />}
            renderItem={renderCard}
            keyExtractor={(item: any) => `${item.mediaRecommendation.id}`} 
            horizontal
            initialNumToRender={3}
            ItemSeparatorComponent={()=> <View style={{marginRight: 18}} />}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{
          borderBottomColor: 'rgb(44,44,46)',
          borderBottomWidth: 0.5, 
          paddingBottom: 28, 
          marginBottom: 28 
        }}>
          <Text style={{ color: '#fff', marginBottom: 15, fontSize: 18, fontFamily: 'SFProTextRegular' }}>Chapters</Text>

          <Chapters navigation={props.navigation} title={english || romaji} mangaID={id} route={props.route}/>
        </View>
      </View>
    </ScrollView>
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

export default Full;