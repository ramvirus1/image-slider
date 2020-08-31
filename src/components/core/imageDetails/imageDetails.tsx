import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';

import { IMAGE_ID_URL } from '../../../constants';

export default function ImageDetails({ route }){
    const { itemDetail } = route?.params;

    const openLink = (url : string) => Linking.openURL(url);

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source= {{ uri: `${IMAGE_ID_URL(itemDetail?.id)}` }}/>
            <View style={styles.hairline}>
                <Text style={styles.text}>{`Author : ${itemDetail?.author}`}</Text>
            </View>
            <TouchableOpacity style={styles.hairline} onPress={() => openLink(itemDetail?.author_url)}>
                <Text style={styles.text}>{'Click here to View Author URL'}</Text>
            </TouchableOpacity>
            <View style={styles.hairline}>
                <Text style={styles.text}>{`File Name : ${itemDetail?.filename}`}</Text>
            </View>
            <View style={styles.hairline}>
                <Text style={styles.text}>{`Format : ${itemDetail?.format}`}</Text>
            </View>
            <TouchableOpacity style={styles.hairline} onPress={() => openLink(itemDetail?.post_url)}>
                <Text style={styles.text}>{'Click here to View Post URL'}</Text>
            </TouchableOpacity> 
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image:{
        width:400,
        height:600,
        resizeMode:'cover'
    },
    hairline:{
        padding: 10,
        borderBottomColor: "red",
        borderBottomWidth: 1
    },
    text:{
        fontWeight:'bold',
        color:'white'
    },
    container: {
        flex: 1,
        margin: 1,
        backgroundColor: '#000',
    },
})