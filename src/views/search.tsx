import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { aniApi } from '../lib/network/http';
import { searchQuery } from '../graphql/media';
import Header from '../components/Header';
import Card from '../components/Card';
import CardLoading from '../components/Card/cardLoading';

const Search = ({ navigation }: any): React.ReactElement => {
  const [ manga, setManga ] = useState([]);
  const [searchTerm, setSearchTerm] = useState<any>(null);
  const renderItem = ({ item }: any) => <Card manga={item} navigation={navigation} />

  useEffect(() => {
    const search = async () => {
      const {data : {Page: { media }}} = await aniApi(searchQuery, { perPage: 20, term: searchTerm });

      setManga(media);
    }

    search();
  }, [searchTerm]);

  console.log(searchTerm);
  
  return (
    <View style={styles.container}>
      <Header title="Search" />

      <View style={styles.searchContainer}>
        <Ionicons name="ios-search" size={19} color="#9898a0" style={{ position: 'absolute', top: 6, left: 8, zIndex: 99 }} />

        <TextInput
          style={styles.input}
          onChangeText={text => setSearchTerm(text)}
          value={searchTerm}
          placeholder='Manga'
          placeholderTextColor='rgba(255, 255, 255, 0.6)'
          autoCapitalize='none'
          autoCompleteType='off'
          caretHidden={false}
          clearButtonMode='while-editing'
          keyboardAppearance='dark'
          keyboardType='default'
          textContentType='none'
        />
      </View>

      {
        searchTerm != "" &&
        <FlatList 
          data={manga} 
          ListEmptyComponent={<CardLoading />}
          renderItem={renderItem} 
          keyExtractor={(item: any) => `${item.id}`} 
          horizontal
          initialNumToRender={3}
          ItemSeparatorComponent={()=> <View style={{marginRight: 18}} />}
          showsHorizontalScrollIndicator={false}
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
    paddingLeft: 30,
    paddingRight: 30,
  },
  searchContainer: {
    marginTop: 30,
    flexDirection: 'row',
    position: 'relative',
    marginBottom: 30
  },
  input: {
    color: '#fff',
    backgroundColor: '#1c1c1e',
    height: 35,
    borderRadius: 8,
    fontSize: 16,
    fontFamily: 'SFProTextRegular',
    paddingLeft: 35,
    flex: 1,
  }
});

export default Search;