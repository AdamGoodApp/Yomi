import React from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
  manga: { mediaRecommendation: IManga };
  navigation: any;
}

const RecommendedCard = (props: Props): React.ReactElement => {
  const { manga: { mediaRecommendation }, navigation } = props;
  const { coverImage: {large}, title, id } = mediaRecommendation;

  const onPress = async () => {
    navigation.navigate('Info', { id: id });
  }

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.image} source={{uri: large }}  />
        <Text style={styles.title}>{ title.english || title.romaji }</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  image: {
    width: 140,
    height: 210,
    borderRadius: 8,
    marginBottom: 10
  },
  title: {
    color: '#fff', 
    fontSize: 13,
    fontFamily: 'SFPro',
    maxWidth: 140
  }
});

export default RecommendedCard;