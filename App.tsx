/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Index from './src/Index';
import Menu from './src/Menu';

function App(): JSX.Element {


  return (
    <SafeAreaView style={{flex:1}}>
     <Index/>
    </SafeAreaView>
  );
}

export default App;
