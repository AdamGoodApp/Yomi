import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { getMonth } from '../../lib/date';
import GenreIcon from './genre-icon';

interface Props {
  genres: [string];
  date: { year: number, month: number, day: number }
  chapters: number
  staff: [{ name: { full: string }}]
}

const Stats = (props: Props): React.ReactElement => {
  const { genres, date: { year, month, day }, chapters, staff} = props;
  // const { name: { full } } = staff[0];
  const author = staff[0];
  const name = author ? author.name.full : '';

  return(
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>genre</Text>
        <GenreIcon genre={ genres[0] }/>
        <Text style={{textAlign: 'center', color: '#fff', fontFamily: 'SFProTextRegular'}}>{ genres[0] }</Text>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.text}>released</Text>
        <Text style={styles.date}>{ year }</Text>
        <Text style={{color: '#fff', fontFamily: 'SFProTextRegular', textAlign: 'center'}}>{ getMonth(month) } {day}</Text>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.text}>Length</Text>
        <Text style={styles.date}>{ chapters || 'X' }</Text>
        <Text style={{color: '#fff', fontFamily: 'SFProTextRegular'}}>Chapters</Text>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.text}>author</Text>
        <Text style={{color: '#fff', fontFamily: 'SFProTextRegular', textAlign: 'center'}}>{ name }</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'rgb(44,44,46)',
    borderBottomWidth: 0.5, 
    paddingBottom: 28, 
    marginBottom: 28,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemContainer: {
    alignItems: 'center',
    width: 90,
    borderRightColor: 'rgb(44,44,46)',
    borderRightWidth: 0.5,
  },
  text: {
    color: '#8e8d92', 
    textTransform: 'uppercase', 
    fontFamily: 'SFProTextBold', 
    fontSize: 12,
    marginBottom: 8
  },
  date: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'SFProTextBold'
  }
});

export default Stats;