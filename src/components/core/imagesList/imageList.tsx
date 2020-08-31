import React, { useEffect, useState} from 'react';
import { StyleSheet, View, FlatList, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import ImageHolder from '../../common/imageHolder/imageHolder';

import { fetchImageList } from '../../../actionCreators/imageListCreators';
import { ImageItem } from '../../../interfaces';

export default function ImageList({ navigation }) {

  const dispatch = useDispatch();
  const [isRefreshing , setRefreshState] = useState(false);

  const imageList = useSelector((state : any ) => {
    return state?.imageListReducer?.imageList
  });

  useEffect(() => {
    dispatch(fetchImageList())
  },[]);

  useEffect(() => {
    setRefreshState(false);
  },[imageList]);

  const onRefresh = () => {
    setRefreshState(true);
    dispatch(fetchImageList())
  };

  const onImageClick = (item: object) => {
    navigation.navigate('Image Details', { itemDetail: item });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={imageList}
        renderItem={(item) => <ImageHolder detail={item?.item} onPress={() => onImageClick(item?.item)}/>}
        keyExtractor={(item : ImageItem) => item?.id.toString()}
        numColumns={2}
        horizontal={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            title="Pull to refresh"
            tintColor="red"
            titleColor="red"
          />
        }
      />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: 'stretch'
    }
});
