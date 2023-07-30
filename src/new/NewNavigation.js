import { View, Text, Image } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Lichthi from './Lichthi';
import Menu from './Menu';
import TinTuc from './TinTuc';
import LichHoc from './LichHoc';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const NewNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name='Menu' component={Menu}></Stack.Screen>
      <Stack.Screen name='TinTuc' component={TinTuc}></Stack.Screen>
      <Stack.Screen name='Lichthi' component={Lichthi}></Stack.Screen>
      <Stack.Screen name='LichHoc' component={LichHoc}></Stack.Screen>
    
    </Stack.Navigator>
  )
}

export default NewNavigation
