import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { manganeloChapters } from '../../lib/network/manga';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  title: string;
  navigation: any;
}

const Chapters = (props: Props): React.ReactElement => {
  const { navigation, title } = props;
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const mangaChapters = async () => {
      const { chapters } = await manganeloChapters(title);
      setChapters(chapters);
    };
    
    mangaChapters();
  }, [title]);

  const handleOnPress = (page: string) => {
    navigation.navigate('Reader', { page: page });
  }
  
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
      {
        chapters.length > 0 &&
        chapters.map((item: any, index: number) => (
          <TouchableOpacity style={styles.container} key={index} onPress={() => handleOnPress(item.href)} >
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