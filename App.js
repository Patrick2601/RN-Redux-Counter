/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from './src/screens/HomeScreen';
// import AboutScreen from './src/screens/AboutScreen';
// import Flexbox from './src/screens/Flexbox';
// import StackNavigation from './src/components/StackNavigation';
// import TabNavigation from './src/components/TabNavigation';
import {AuthProvider} from './src/Context/AuthContext';
import AppNav from './src/Navigation/AppNav';
import {store} from './src/Redux/Store';
import {Provider} from 'react-redux';
import {Counter} from './src/screens/Counter';
import Buttons from './src/components/Buttons';
import {increment, decrement} from './src/screens/Counter';

const App = () => {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>

    // <Provider store={store}>
    //   <Counter />
    // </Provider>

    // <Provider
    //   store={store}
    //   style={{
    //     flex: 1,
    //   }}>
    //   <Counter />
    // </Provider>
  );
};

export default App;
