import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Image } from "react-native-expo-image-cache";

interface Props {
  manga: IManga
  navigation: any
}

const Card = (props: Props): React.ReactElement => {
  const { manga, navigation } = props;
  const { coverImage, title } = manga;
  const preview = { uri: '../../../assets/bgcard.png' };
  const uri = coverImage.large;

  const onPress = async () => {
    navigation.navigate('Info', { manga: manga });
  }

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.image} {...{ preview, uri }} transitionDuration={600} />
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

export default Card;