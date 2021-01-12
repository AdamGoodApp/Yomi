import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { aniApi } from '../lib/network/http';
import { trendingQuery } from '../graphql/media';
import Header from '../components/Header';
import Card from '../components/Card';
import CardLoading from '../components/Card/cardLoading';

const Home = ({ navigation }: any): React.ReactElement => {
  const [ trending, setTrending ] = useState([]);
  const renderItem = ({ item }: any) => <Card manga={item} navigation={navigation} />

  useEffect(() => {
    const get = async () => {
      const {data : {Page: { media }}} = await aniApi(trendingQuery, { perPage: 20 });
      setTrending(media);
    }

    get();
  }, []);
  
  return (
    <View style={styles.container}>
      <Header title="Reading Now" profile />

      <View style={styles.trendingContainer}>
        <Text style={{color: '#fff', fontFamily: 'SFProTextBold', fontSize: 22, marginBottom: 10}}>Trending</Text>

        <FlatList 
          data={trending} 
          ListEmptyComponent={<CardLoading />}
          renderItem={renderItem} 
          keyExtractor={(item: any) => `${item.id}`} 
          horizontal
          initialNumToRender={3}
          ItemSeparatorComponent={()=> <View style={{marginRight: 18}} />}
          showsHorizontalScrollIndicator={false}
        />

      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: '21%',
    paddingLeft: 30,
    paddingRight: 30,
  },
  trendingContainer: {
    marginTop: 30
  },
});

export default Home;