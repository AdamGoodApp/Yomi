import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { getTop7d } from '../lib/network/manga';
import Header from '../components/Header';
import Card from '../components/Card';
import CardLoading from '../components/Card/cardLoading';

const Home = (): React.ReactElement => {
  const [ mangaTop7d, setTop7d ] = useState([]);
  const renderItem = ({ item }: any) => <Card manga={item} />

  useEffect(() => {
    const get = async () => {
      const { top7d }: any = await getTop7d();
      setTop7d(top7d);
    }
  
    get();
  }, []);
  
  return (
    <View style={styles.container}>
      <Header title="Reading Now" profile />

      <View style={styles.trendingContainer}>
        <Text style={{color: '#fff', fontFamily: 'SFProTextBold', fontSize: 22, marginBottom: 10}}>Trending</Text>

        <FlatList 
          data={mangaTop7d} 
          ListEmptyComponent={<CardLoading />}
          renderItem={renderItem} 
          keyExtractor={(item: any) => item.id} 
          horizontal
          initialNumToRender={3}
          ItemSeparatorComponent={()=> <View style={{marginRight: 18}} />}
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