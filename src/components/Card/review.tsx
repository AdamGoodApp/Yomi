import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import ReviewRatings from '../Ratings/review-ratings';
import { parseDate } from '../../lib/date';

interface Props {
  review: IReviews
}

const Review = (props: Props): React.ReactElement => {
  const { review: { createdAt, score, summary, user: { name } } } = props;

  return(
    <View style={styles.container}>
      <Text style={{ color: '#fff' }}>{ summary }</Text>

      <View>
        <ReviewRatings score={score} />
        <Text style={{color: '#8e8d92', marginLeft: 90, fontSize: 12, textTransform: 'none'}}>{parseDate(createdAt)}, {name}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: 362,
    backgroundColor: '#1c1c1e',
    borderRadius: 8,
    padding: 15,
    justifyContent: 'space-between'
  },
});

export default Review;