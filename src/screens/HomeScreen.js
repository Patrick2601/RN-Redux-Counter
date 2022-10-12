/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Linking,
  Pressable,
  Image,
} from 'react-native';
import {store} from '../Redux/Store';
import {Provider} from 'react-redux';
import Counter from './Counter';

function HomeScreen() {
  // const route=useRoute()
  // const navigation=useNavigation()
  // console.log('route...',route)
  // console.log('navigation...',navigation)

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#bdc6a0',
        }}>
        <Text style={{fontSize: 20, marginTop: 20, color: 'black', flex: 1}}>
          Home Screen
        </Text>

        <Provider
          store={store}
          style={{
            flex: 1,
          }}>
          <Counter />
        </Provider>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
