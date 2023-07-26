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

import Menu from './src/new/Menu';
import Login from './src/user/Login';
import Lichthi from './src/new/Lichthi';
import { UserContext, UserProvider } from './src/user/UserContext';
import AppNavigation from './src/navigation/Appnavigaiton';
import { NewProvider } from './src/new/NewContext';



function App(): JSX.Element {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UserProvider>
        <NewProvider>
          <AppNavigation></AppNavigation>
        </NewProvider>
      </UserProvider>



    </SafeAreaView>
  );
}

export default App;
