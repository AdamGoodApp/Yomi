import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { manganeloChapters } from '../../lib/network/manga';
import { bookmark, me } from '../../lib/network/user';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  title: string;
  navigation: any;
  route: any;
  mangaID: number;
}

const Chapters = (props: Props): React.ReactElement => {
  const { navigation, route: { params }, title, mangaID } = props;
  const [chapters, setChapters] = useState([]);
  const [bookmarkStore, setBookmark] = useState<any>(null);

  useEffect(() => {
    const getChapters = async () => {
      const { chapters } = await manganeloChapters(title);

      setChapters(chapters);
    };
    
    getChapters();
  }, [title]);

  useEffect(() => {
    const getBookmark = async () => {
      const { bookmark } = await me();
      setBookmark(bookmark);
    };
    
    getBookmark();
  }, [params.reader, title]);

  const handleOnPress = async (page: string) => {
    bookmark({ bookmark: { mangaID: mangaID, chapterID: page }});
    navigation.navigate('Reader', { page: page });
  }

  const setBGColor = (chapter: string) => {
    if(chapter && bookmarkStore) {
      return bookmarkStore.chapterID === chapter ? 'rgb(58,58,60)' : '#1c1c1e';
    } else {
      return '#1c1c1e';
    }
  }

  if (chapters.length > 0) {
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
        {
          chapters.map((item: any, index: number) => (
            <TouchableOpacity style={{...styles.container, backgroundColor: setBGColor(item.href) }} key={index} onPress={() => handleOnPress(item.href)} >
              <View style={{ justifyContent: 'space-between', height: '100%' }}>
                <Text style={{color: '#fff'}}>{item.title}</Text>
  
                <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ alignItems: 'center' }}>
                    <Ionicons name="ios-eye-sharp" size={15} color="#8e8d92" />
                    <Text style={ styles.subText } >{item.views}</Text>
                  </View>
  
                  <View style={{ alignItems: 'center' }}>
                    <Ionicons name="ios-calendar-sharp" size={15} color="#8e8d92" />
                    <Text style={ styles.subText } >{item.uploaded}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )) 
        }
      </View>
    )
  } else {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', height: 60, marginBottom: 50}}>
        <ActivityIndicator size="small" color={'white'} />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1e',
    borderRadius: 8,
    height: 125,
    padding: 12,
    marginBottom: 32,
    width: '48%'
  },
  subText: {
    color: '#8e8d92',
    fontSize: 12,
  }
});

export default Chapters;