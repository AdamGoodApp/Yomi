import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

interface Props {
  score: number;
  style: {};
  ratings: number;
}

const Ratings = (props: Props): React.ReactElement => {
  const { score, ratings, style } = props;

  const styles = StyleSheet.create({
    container: {
      position: 'relative',
      width: 94,
    },
    imageContainer: {
      flexDirection: 'row',
      position: 'absolute',
      zIndex: 99,
    },
    image: {
      width: 15,
      height: 15,
    },
    bar: {
      backgroundColor: '#fff', 
      width: `${score}%`, 
      height: 15, 
      position: 'absolute',
      zIndex: 0
    },
    seperator: {
      backgroundColor: '#000',
      width: 5,
      height: 15
    }
  });

  return(
    <View>
      <View style={[styles.container, style]}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../../assets/star.png')} />
          <View style={styles.seperator} />
          <Image style={styles.image} source={require('../../../assets/star.png')} />
          <View style={styles.seperator} />
          <Image style={styles.image} source={require('../../../assets/star.png')} />
          <View style={styles.seperator} />
          <Image style={styles.image} source={require('../../../assets/star.png')} />
          <View style={styles.seperator} />
          <Image style={{...styles.image, marginRight: 0}} source={require('../../../assets/star.png')} />
        </View>

        <View style={styles.bar}/>
      </View>

      <Text style={{color: '#8e8d92', fontSize: 12, marginTop: 8}}>{ratings} Ratings</Text>
    </View>
  );
}

export default Ratings;