import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Props {
  id: number;
}

const Info = ({ route, navigation }: any): React.ReactElement => {
  const { id } = route.params;
  const [manga, setManga] = useState(undefined);

  useEffect(() => {
    const getManga = async () => {

    };

    getManga();
  },[id]);

  return <View style={styles.container}></View>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  }
});

export default Info;