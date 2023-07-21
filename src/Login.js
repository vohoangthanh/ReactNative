import { StyleSheet, Text, View, Image, TextInput, Pressable, Alert } from 'react-native'
import React, { useState }  from 'react'

const Login = (props) => {
  const {navigation} = props
  const [username, setUsername] = useState('fpoly');
  const [password, setPassword] = useState('123');
  const handleLogin = () => {
      if (username === 'fpoly' && password === '123') {
        navigation.navigate('Menu')
      } else {
          Alert.alert('Login Failed!');
      }
  };
  return (
    <View style={styles.body}>
      <Text>MyFPL</Text>
      
        {/* <View style={styles.textinputuser}>
          <Image style={styles.anh2} source={require('../media/user.png')} />
          <TextInput value={username} onChangeText={setUsername} style={styles.textinput} placeholder='Username'></TextInput>
        </View>
        <View style={styles.textinputuser2}>
          <Image style={styles.anh2} source={require('../media/pass.png')} />
          <TextInput secureTextEntry={true} value={password} onChangeText={setPassword} style={styles.textinput} placeholder='Password'></TextInput>
        </View>
        <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.text2}>Login</Text>
        </Pressable> */}
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  
})