import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { me } from '../lib/network/user';
import { aniApi } from '../lib/network/http';
import { getFavourites } from '../graphql/media';
import Header from '../components/Header';
import FavouriteCard from '../components/Card/favouriteCard';

const Library = ({ navigation }: any): React.ReactElement => {
  const [ manga, setManga ] = useState([]);
  const renderItem = ({ item }: any) => <FavouriteCard manga={item} navigation={navigation} />

  useEffect(() => {
    const favouritesList = async () => {
      const { favourites } = await me();
      const {data : {Page: { media }}} = await aniApi(getFavourites(favourites), { perPage: 50 });

      setManga(media);
    }

    favouritesList();
  }, []);

  navigation.addListener(
    'didFocus',
    () => {
      console.log('LOOOOL');
    }
  )
  
  return (
    <View style={styles.container}>
      <View style={{paddingLeft: 30, paddingRight: 30, marginBottom: 30}}>
        <Header title="Library" />
      </View>

      {
        manga &&
          <FlatList 
            data={manga} 
            ListEmptyComponent={<ActivityIndicator size="small" color={'white'} />}
            renderItem={renderItem} 
            keyExtractor={(item: any) => `${item.id}`} 
            initialNumToRender={3}
            showsHorizontalScrollIndicator={true}
            numColumns={2}
            horizontal={false}
            columnWrapperStyle={{marginBottom: 30, justifyContent: 'space-between'}}
            style={{ paddingLeft: 30, paddingRight: 30, marginBottom: 80 }}
            indicatorStyle="white"
          />
      }
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: '21%',
  },
});

export default Library;