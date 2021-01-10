import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Image } from "react-native-expo-image-cache";

interface Props {
  manga: Manga
}

interface Manga {
  title: string;
  id: number;
  cover: string;
}

const Card = (props: Props): React.ReactElement => {
  const {manga: { title, id, cover }} = props;
  const preview = { uri: '../../../assets/bgcard.png' };
  const uri = cover;

  const onPress = async () => {
    alert('pressed');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.image} {...{preview, uri}} transitionDuration={600} />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
   marginRight: 18,
  },
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