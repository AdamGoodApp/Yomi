import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { View } from 'react-native';
import { aniApi } from '../lib/network/http';
import { mangaQuery} from '../graphql/media';
import Full from '../components/Full';

const Info = ({ route, navigation }: any): React.ReactElement => {
  const { id } = route.params;
  const [manga, setManga]: any = useState(null);

  useEffect(() => {
    const getManga = async () => {
      const {data : { Media }} = await aniApi(mangaQuery, { id: id });
      setManga(Media);
    }

    getManga();
  },[id]);

  return(
    <View style={{flex: 1, backgroundColor: '#000', justifyContent: 'center'}}>
      {
        manga ?  <Full manga={manga} navigation={navigation} route={route}/> : <ActivityIndicator size="small" color={'white'} />
      }
    </View>
  );
};

export default Info;