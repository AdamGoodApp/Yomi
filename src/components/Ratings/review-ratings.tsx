import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

interface Props {
  score: number;
  style?: any;
  ratings?: number;
}

const ReviewRatings = (props: Props): React.ReactElement => {
  const { score, ratings, style } = props;

  const styles = StyleSheet.create({
    container: {
      position: 'relative',
      width: 80,
    },
    imageContainer: {
      flexDirection: 'row',
      position: 'absolute',
      zIndex: 99,
    },
    image: {
      width: 12,
      height: 12,
    },
    bar: {
      backgroundColor: '#fff', 
      width: `${score}%`, 
      height: 12, 
      position: 'absolute',
      zIndex: 0
    },
    seperator: {
      backgroundColor: '#1c1c1e',
      width: 5,
      height: 12
    }
  });

  return(
    <View>
      <View style={[styles.container, style]}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../../assets/star-review.png')} />
          <View style={styles.seperator} />
          <Image style={styles.image} source={require('../../../assets/star-review.png')} />
          <View style={styles.seperator} />
          <Image style={styles.image} source={require('../../../assets/star-review.png')} />
          <View style={styles.seperator} />
          <Image style={styles.image} source={require('../../../assets/star-review.png')} />
          <View style={styles.seperator} />
          <Image style={{...styles.image, marginRight: 0}} source={require('../../../assets/star-review.png')} />
        </View>

        <View style={styles.bar}/>
      </View>
    </View>
  );
}

export default ReviewRatings;