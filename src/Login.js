import { StyleSheet, Text, View, Image, TextInput, Pressable, Alert } from 'react-native'
import React, { useState }  from 'react'

const Login = (props) => {
  const {navigation} = props
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
      if (username === 'fpoly' && password === '123') {
        navigation.navigate('Menu')
      } else {
          Alert.alert('Login Failed!');
      }
  };
  return (
    <View style={styles.body}>
      <View style={styles.top}></View>
      <View style={styles.bottom}>
        <View style={styles.bottomview2}>
          <Image style={styles.anhmonan} source={require('../media/anh.png')} />
        </View>
        <Text style={styles.text}>MyFPL</Text>
        <View style={styles.textinputuser}>
          <Image style={styles.anh2} source={require('../media/user.png')} />
          <TextInput value={username} onChangeText={setUsername} style={styles.textinput} placeholder='Username'></TextInput>
        </View>
        <View style={styles.textinputuser2}>
          <Image style={styles.anh2} source={require('../media/pass.png')} />
          <TextInput secureTextEntry={true} value={password} onChangeText={setPassword} style={styles.textinput} placeholder='Password'></TextInput>
        </View>
        <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.text2}>Login</Text>
        </Pressable>
        <Text style={styles.text3}>Forgot your password?</Text>
      </View>
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
  bottom: {
    borderRadius: 450,
    width: '200%',
    height: '200%',
    alignItems: 'center',
    backgroundColor: '#feb02a'
  },
  top: {
    width: '100%',
    height: '26%',
  },
  anhmonan: {
    top: '5%',
    borderRadius: 50,
    width: '85%',
    height: '85%',
  },
  bottomview2: {
    alignItems: "center",
    backgroundColor: '#AAEEFF',
    borderRadius: 50,
    width: '20%',
    height: '11%',
    top: '-5.5%'
  },
  text: {
    color: '#7C85FF',
    fontFamily: 'Yu Gothic UI',
    fontStyle: 'normal',
    fontSize: 36,
    top: '-2%',
  },
  textinputuser: {
    backgroundColor: 'white',
    borderRadius: 16,
    width: '41%',
    height: '3.5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  anh2: {
    marginLeft: '2%',
    marginRight: '7%',
  },
  textinputuser2: {
    backgroundColor: 'white',
    borderRadius: 16,
    width: '41%',
    height: '3.5%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },
  button: {
    alignItems: 'center',
    width: '13%',
    height: '4.5%',
    borderRadius: 25,
    backgroundColor: '#fc8a03',
    marginBottom: '2.5%',
  },
  text2: {
    color: '#FFF',
    fontFamily: 'Yu Gothic UI',
    fontStyle: 'normal',
    lineHeight: 24,
    fontSize: 24,
    top: '35%',
  },
  text3: {
    color: '#FFF',
    fontStyle: 'normal',
    fontSize: 18,
  },
})