import { StyleSheet, Text, View,Screen } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppRegistry } from 'react-native';
import Login from './Login'
import Menu from './Menu'
import Lichthi from './Lichthi'
const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//tạo hàm tab
const Tab = createBottomTabNavigator();
const Index = () => {

  
  return (
   <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Tab.Screen name="Menu" component={Menu} options={{headerShown: false}}/>
      <Tab.Screen name="Lichthi" component={Lichthi} options={{headerShown: false}}/>
     
    </Tab.Navigator>
    
   </NavigationContainer>
  )
}

export default Index

const styles = StyleSheet.create({})