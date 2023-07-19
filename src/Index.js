import { StyleSheet, Text, View,Screen } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppRegistry } from 'react-native';
import Login from './Login'
import Menu from './Menu'
import Lichthi from './Lichthi'
const Stack = createNativeStackNavigator()
const Index = () => {

  
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}}/>
      <Stack.Screen name="Lichthi" component={Lichthi} options={{headerShown: false}}/>
     
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Index

const styles = StyleSheet.create({})