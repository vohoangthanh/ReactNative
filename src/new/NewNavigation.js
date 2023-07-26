import { View, Text ,Image} from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Lichthi from './Lichthi';
import Menu from './Menu';
import TinTuc from './TinTuc';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// const HomeStack = () =>{
//   return(
//     <Stack.Navigator  screenOptions={{headerShown: false}} >
//       <Stack.Screen name='ListtNew' component={ListtNew}></Stack.Screen>
//       <Stack.Screen name='Detail' component={Detail}></Stack.Screen>
//     </Stack.Navigator>
//   )
// }
const NewNavigation = () =>{
  return(
    <Stack.Navigator  screenOptions={{headerShown: false}} >
      <Stack.Screen name='Lichthi' component={Lichthi}></Stack.Screen>
      <Stack.Screen name='Menu' component={Menu}></Stack.Screen>
      <Stack.Screen name='TinTuc' component={TinTuc}></Stack.Screen>
      
    </Stack.Navigator>
  )
}
// const NewNavigation = () => {
//   const options = ({route}) => ({
//     tabBarIcon: ({ focused, color, size }) => {
//       if (route.name === 'HomeStack') {
//         return focused ?
//           <Image source={require('../../../media/home.png')}/>
//           : <Image source={require('../../../media/homenot.png')} />
//       } else if (route.name === 'Explore') {
//         if (focused) {
//           return <Image source={require('../../../media/exseclect.png')} />
//         }
//         return <Image source={require('../../../media/ex.png')} />
//       }else if (route.name === 'Book') {
//         if (focused) {
//           return <Image source={require('../../../media/bookselect.png')} />
//         }
//         return <Image source={require('../../../media/book.png')} />
//       }else if (route.name === 'ProfileStack') {
//         if (focused) {
//           return <Image source={require('../../../media/proselect.png')} />
//         }
//         return <Image source={require('../../../media/pro.png')} />
//       }
//     },
//     tabBarLabel: ({ focused, color, size }) => {
//       if (route.name === 'HomeStack') {
//         return focused ? <Text style={{ color: 'blue' }}>Home</Text>
//           : <Text>Home</Text>
//       } else if (route.name === 'Explore') {
//         return focused ? <Text style={{ color: 'blue' }}>Explore</Text>
//           : <Text>Explore</Text>
//       }
//       else if (route.name === 'Book') {
//         return focused ? <Text style={{ color: 'blue' }}>Book</Text>
//           : <Text>Book</Text>
//       }
//       else if (route.name === 'ProfileStack') {
//         return focused ? <Text style={{ color: 'blue' }}>Profile</Text>
//           : <Text>Profile</Text>
//       }
//     }
//   })

//   return (
//     <Tab.Navigator  screenOptions={options} >
//       <Tab.Screen name='HomeStack' component={HomeStack} />
//       <Tab.Screen name='Explore' component={Explore}/>
//       <Tab.Screen name='Book' component={Book}/>
//       <Tab.Screen name='ProfileStack' component={ProfileStack}/>
//     </Tab.Navigator >
//   )
// }


export default NewNavigation
