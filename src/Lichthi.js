import { StyleSheet, Text, View, Image, TouchableOpacity, LayoutAnimation } from 'react-native'
import React, { useState } from 'react'

import Collapse from '@kunukn/react-collapse'
const Lichthi = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(value => !value);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }
  return (
    <View style={styles.item}>
      <View style={styles.logotitle}>
        <Image style={styles.logo} source={require('../media/logo1.png')} />
        <Image style={styles.more} source={require('../media/more.png')} />
      </View>
      <View style={styles.itemcon}>
        <View style={styles.itemcon1}>
          <View style={styles.itemne}>
            <View>
              <Text style={styles.txttitle}>26/7/2023</Text>
            </View>
            <View>
              <Text style={styles.txttitle}>MOB306</Text>
            </View>
            <View>
              <Text style={styles.txttitle}>Ca 3</Text>
            </View>
          </View>
        </View>
        <View style={styles.itemcon1}>
          <View style={styles.itemne}>
            <View>
              <Text style={styles.txttitle}>26/7/2023</Text>
            </View>
            <View>
              <Text style={styles.txttitle}>MOB306</Text>
            </View>
            <View>
              <Text style={styles.txttitle}>Ca 3</Text>
            </View>
          </View>
        </View>
        <View style={styles.itemcon1}>
          <View style={styles.itemne}>
            <View>
              <Text style={styles.txttitle}>26/7/2023</Text>
            </View>
            <View>
              <Text style={styles.txttitle}>MOB306</Text>
            </View>
            <View>
              <Text style={styles.txttitle}>Ca 3</Text>
            </View>
          </View>
        </View>
        <View style={styles.itemcon1}>
          <View style={styles.itemne}>
            <View>
              <Text style={styles.txttitle}>26/7/2023</Text>
            </View>
            <View>
              <Text style={styles.txttitle}>MOB306</Text>
            </View>
            <View>
              <Text style={styles.txttitle}>Ca 3</Text>
            </View>
          </View>
        </View>


      </View>
    </View>
  )
}


export default Lichthi

const styles = StyleSheet.create({
  itemne: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  txttitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    top: '50%'
  },
  itemcon1: {
    borderRadius: 10,
    width: '90%',
    height: '100%',
    backgroundColor: 'lightblue',
    marginTop: '5%',

  },
  itemcon: {
    marginTop: '5%',
    width: '100%',
    height: '7%',
    alignItems: 'center',
  },
  item: {
    width: '100%',
    height: '100%',
  },
  more: {
    width: '5%',
    height: '70%',
    left: '-30%'
  },
  logotitle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#f27321',
    width: '100%',
    height: '7%',
  },
  logo: {
    left: '10%',
    width: '10%',
    height: '100%',
  },

  hidden: {
    height: 0,
  },
  list: {
    overflow: 'hidden'
  },
});