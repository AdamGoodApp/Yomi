import React from 'react';
import { Image } from 'react-native';
import { Ionicons, MaterialIcons, MaterialCommunityIcons, FontAwesome5, Fontisto } from '@expo/vector-icons';

interface Props {
  genre: string;
}

const GenreIcon = (props: Props): React.ReactElement => {
  const { genre } = props;

  switch(genre) {
    case 'Action':
      return <MaterialCommunityIcons name="boxing-glove" size={30} color="white" />
    case 'Adventure':
      return <Ionicons name="ios-trophy-sharp" size={30} color="white" />
    case 'Comedy':
      return <FontAwesome5 name="laugh-squint" size={30} color="white" />
    case 'Drama':
      return <MaterialCommunityIcons name="drama-masks" size={30} color="white" />
    case 'Ecchi':
      return <Image source={require('../../../assets/18.png')} style={{width: 30, height: 30}} />
    case 'Fantasy':
      return <Ionicons name="ios-color-wand" size={30} color="white" />
    case 'Horror':
      return <Fontisto name="blood-drop" size={30} color="white" />
    case 'Mahou Shoujo':
      return <Image source={require('../../../assets/moon.png')} style={{width: 30, height: 30}} />
    case 'Mecha':
      return <MaterialCommunityIcons name="robot" size={30} color="white" />
    case 'Mystery':
      return <MaterialCommunityIcons name="head-question-outline" size={30} color="white" />
    case 'Psychological':
      return <MaterialCommunityIcons name="brain" size={30} color="white" />
    case 'Romance':
      return <Ionicons name="ios-heart-sharp" size={30} color="white" />
    case 'Sci-Fi':
      return <FontAwesome5 name="space-shuttle" size={30} color="white" />
    case 'Slice of Life':
      return <MaterialIcons name="family-restroom" size={30} color="white" />
    case 'Sports':
      return <MaterialCommunityIcons name="soccer" size={30} color="white" />
    case 'Supernatural':
      return <FontAwesome5 name="ghost" size={30} color="white" />
    case 'Thriller':
      return <MaterialCommunityIcons name="knife" size={30} color="white" />
    case 'Music':
      return <Ionicons name="ios-musical-notes-sharp" size={30} color="white" />
    default:
      return <MaterialIcons name="science" size={30} color="white" />
  }
};


export default GenreIcon;

// Action, Adventure, Comedy, Drama, Ecchi, Fantasy, Horror, 
// Mahou Shoujo, Mecha, Music, Mystery, Psychological, 
// Romance, Sci-Fi, Slice of Life, Sports, Supernatural, Thriller.