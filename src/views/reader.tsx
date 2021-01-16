import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Modal, Dimensions } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { manganeloPages } from '../lib/network/manga';

const Reader = ({ route, navigation }: any): React.ReactElement => {
  const { params: { page } } = route;
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const getPages = async() => {
      const { result } = await manganeloPages(page);
      const windowWidth = Dimensions.get("window").width;
      const windowHeight = Dimensions.get("window").height - 260;
      const images = result.map((url: string) => {
        return {
          url: url,
          width: windowWidth,
          height: windowHeight,
          props: {
            source: {
              headers: {
                Referer: 'https://manganelo.com/chapter',
              }
            },
          }
        }
      });

      setPages(images);
    };

    getPages();
  }, [page]);

  const handleCLose = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      {
        pages.length > 0 &&
        (
          <Modal visible={true} transparent={true}>
            <ImageViewer imageUrls={pages}/>
          </Modal>
        )
      }
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: '21%',
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default Reader;