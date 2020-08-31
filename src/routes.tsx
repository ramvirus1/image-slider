import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import ImageList from './components/core/imagesList/imageList';
import ImageDetails from './components/core/imageDetails/imageDetails';

const Stack = createStackNavigator();

export default function Routes () {
    return (
        <View style={styles.container}>
            <NavigationContainer theme={DarkTheme}>
                <Stack.Navigator>
                    <Stack.Screen name="Images" component={ImageList} />
                    <Stack.Screen name="Image Details" component={ImageDetails} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf:'stretch',
      justifyContent: 'center'
    },
  });