import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';

import { ImageProps, ImageItem } from '../../../interfaces';

import { IMAGE_ID_URL } from '../../../constants';

export default function ImageHolder(props : ImageProps){
    const { detail, onPress } = props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <ImageBackground
          source={{ uri: `${IMAGE_ID_URL(detail?.id)}` }}
          style={styles.image}
        >
        <Text style={styles.authorName}>
          {detail?.author}
        </Text>
      </ImageBackground>
      </TouchableOpacity>
    ) 
}

const styles = StyleSheet.create({
    container:{
      margin:1
    },
    image: {
      width: 200,
      height: 300,
      resizeMode: 'cover',
      position: "relative",
    },
    authorName : {
      fontWeight: "bold",
      color: "white",
      position: "absolute",
      alignSelf: 'center',
    }
});