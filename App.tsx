/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Menu from './src/Menu';
import Lichthi from './src/Lichthi';

function App(): JSX.Element {


  return (
    <SafeAreaView>
      <View>
       <Lichthi/>
      </View>
      
    </SafeAreaView>
  );
}

export default App;
