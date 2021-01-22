import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Image } from "react-native-expo-image-cache";

interface Props {
  manga: IManga;
  navigation: any;
}

const FavouriteCard = (props: Props): React.ReactElement => {
  const { manga, navigation } = props;
  const { coverImage, title, id } = manga;
  const preview = { uri: '../../../assets/bgcard.png' };
  const uri = coverImage.large;

  const onPress = async () => {
    navigation.navigate('Info', { id: id, prevPage: 'Full' });
  }

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.image} {...{ preview, uri }} transitionDuration={600} />
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  image: {
    width: 170,
    height: 255,
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

export default FavouriteCard;