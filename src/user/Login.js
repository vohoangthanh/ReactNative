import { StyleSheet, Text, View, Image, TextInput, Pressable, Alert } from 'react-native'
import React, { useState, useContext } from 'react'

import { UserContext } from './UserContext';


const Login = (props) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const { navigation } = props
  const [email, setEmail] = useState('thanh');
  const [password, setPassword] = useState('123');

  const { onLogin } = useContext(UserContext);

  const handleLogin = async () => {
    if (email.trim().length === 0) {
      Alert.alert("Không để trống email")
      return;
    }
    if (password.trim().length === 0) {
      Alert.alert("Không để trống password")
      return;

    }
    const resurlt = await onLogin(email, password);
    navigation.navigate('Menu');
    console.log('login: ', resurlt)
    if (!resurlt) {
      Alert.alert('Đăng nhập thất bại')
    }
  };
  return (
    <View style={styles.body}>
      <Image style={styles.imgbacgroud} source={require('../../media/goc.png')} />
      <Image style={styles.imggoc2} source={require('../../media/goc2.png')} />
      <Image style={styles.imggoc3} source={require('../../media/goc3.png')} />
      <View style={styles.contai}>
        <Image style={styles.logo} source={require('../../media/logo.png')} />
      </View>
      <View style={styles.cotaiCS}>
        <TextInput style={styles.txtCS} > </TextInput>
        <Text style={styles.txtChon}>Lựa chọn cơ sở</Text>
      </View>
      <Text style={styles.txtEmail}>
        E-mail
      </Text>
      <View >
        <TextInput 
        value={email} 
        onChangeText={setEmail} style={styles.textEmail} ></TextInput>
        
      </View>
      <Text style={styles.txtEmail}>Password</Text>

      <TextInput 
     value={password}
     onChangeText={setPassword}
    style={styles.textEmail} ></TextInput>

      <Pressable style={styles.pres} onPress={handleLogin}>
        <Text style={styles.txtLogin}>Login</Text>
      </Pressable>

      <View style={styles.contaiSi}>
        <View style={styles.vien} />
        <Text style={styles.txtSigin}>Sigin up with</Text>
      </View>
      <View style={styles.contaiwith}>
        <Pressable style={styles.presGoo} >
          <Image style={styles.anh1} source={require('../../media/gg.png')} />
          <Text style={styles.txtgg}>Login</Text>
        </Pressable>
        <Pressable style={styles.presGoo} >
          <Image style={styles.anh1} source={require('../../media/fb.png')} />

          <Text style={styles.txtgg}>Facebook</Text>
        </Pressable>
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
    padding: 25,
  },
  imgbacgroud: {
    position: 'absolute',
    right: 0.5,
    zIndex: -1,

  },
  imggoc2: {
    position: 'absolute',
    zIndex: -1,
  },
  contai: {
    position: 'absolute',
    marginTop: 70,
    marginLeft: 60,
  },
  imggoc3: {
    position: 'absolute',
    zIndex: -2,
  },
  logo: {
    position: 'absolute',
    width: 260,
    height: 90,
  },
  txtMy: {
    marginTop: 60,
    fontSize: 36,
    color: "#000000",
    fontFamily: "Serif"

  }, cotaiCS: {
    marginTop: 170,
  },
  txtCS: {
    borderWidth: 1,
    borderColor: "#FE724C",
    borderRadius: 10,
    height: 60,
  },
  txtChon: {
    position: 'absolute',
    marginLeft: 85,
    marginTop: 15,
    fontSize: 23,
    color: "#000000",
    fontFamily: "Serif",

  },
  txtEmail: {
    fontSize: 17,
    fontFamily: "Serif",
    marginTop: 25,
  },
  textEmail: {
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    marginTop: 10,
    borderWidth: 0.2,
    height: 60,
  },
  txtUser: {
    marginTop: 30,
    position: 'absolute',
    marginLeft: 20,
    color: '#000000',
    fontSize: 18,
  },
  pres: {
    width: 248,
    height: 60,
    borderRadius: 28,
    marginTop: 40,
    backgroundColor: "#FE724C",
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '15%',
    marginBottom: 50,
  },
  txtLogin: {
    color: 'white',
    fontSize: 20,

  },
  contaiSi: {

    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vien: {
    position: 'absolute',
    width: '100%',
    height: 0.6,
    backgroundColor: 'grey',
  },
  txtSigin: {
    textAlign: 'center',
    width: 120,
    position: 'absolute',
    color: '#383838',
    backgroundColor: 'white',
  },
  contaiwith: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  presGoo: {
    flexDirection: 'row',
    width: 147,
    height: 57,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 2,
  },
  txtgg: {
    marginLeft: 10,
    fontSize: 17,
    color: '#000000'
  },

})