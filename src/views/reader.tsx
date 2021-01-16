import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Modal, Dimensions, Image } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { manganeloPages } from '../lib/network/manga';
import Header from '../components/Reader/header';

const Reader = ({ route, navigation }: any): React.ReactElement => {
  const { params: { page } } = route;
  const [pages, setPages] = useState<[]>([]);
  const [visible, setVisible] = useState<boolean>(true);
  const [headerVisible, setHeaderVisible] = useState<boolean>(true);

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
      setVisible(true);
    };

    getPages();
  }, [page]);

  const handleClose = () => {
    setVisible(false);
    navigation.navigate('Info');
  }

  const handleOnClick = () => {
    setHeaderVisible(!headerVisible);
  }

  return (
    <View style={styles.container}>
      {
        pages.length > 0 &&
        (
          <Modal visible={visible} transparent={true}>
            <ImageViewer 
              imageUrls={pages} 
              saveToLocalByLongPress={false}
              renderHeader={ (currentIndex)  => 
                <Header 
                  handleClose={handleClose} 
                  currentIndex={currentIndex} 
                  total={pages.length} 
                  visible={headerVisible}
                />
              }
              renderImage={(props) => <Image {...props} style={{ width: '100%', height: '100%', marginTop: -90}}/>}
              renderIndicator={() => <></>}
              onClick={handleOnClick}
              enablePreload
            />
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
    position: 'absolute'
  },
  image: {
    width: '100%',
    height: '100%',
  }
});

export default Reader;