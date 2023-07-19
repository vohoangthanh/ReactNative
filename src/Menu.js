import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const Menu = () => {
    return (
        <View style={styles.item}>
            <View style={styles.logotitle}>
                <Image style={styles.logo} source={require('../media/logo1.png')} />
                <Image style={styles.more} source={require('../media/more.png')} />
            </View>
            <ScrollView style={styles.scrool} >
                <View style={styles.menu}>
                    <View style={styles.itemcon}>
                        <Image style={styles.itemcon1} source={require('../media/lichhoc.png')} />
                        <Text style={styles.txtlichhoc}>Lịch học</Text>
                    </View>
                    <View style={styles.itemcon}>
                        <Image style={styles.itemcon1} source={require('../media/lichthi.png')} />
                        <Text style={styles.txtlichhoc}>Lịch thi</Text>
                    </View>
                </View>
                <View style={styles.menu}>
                    <View style={styles.itemcon}>
                        <Image style={styles.itemcon1} source={require('../media/news.png')} />
                        <Text style={styles.txtlichhoc}>Tin tức</Text>
                    </View>
                    <View style={styles.itemcon}>
                        <Image style={styles.itemcon1} source={require('../media/lichhoc.png')} />
                        <Text style={styles.txtlichhoc}>Lịch học</Text>
                    </View>
                </View>
                <View style={styles.menu}>
                    <View style={styles.itemcon}>
                        <Image style={styles.itemcon1} source={require('../media/lichhoc.png')} />
                        <Text style={styles.txtlichhoc}>Lịch học</Text>
                    </View>
                    <View style={styles.itemcon}>
                        <Image style={styles.itemcon1} source={require('../media/lichhoc.png')} />
                        <Text style={styles.txtlichhoc}>Lịch học</Text>
                    </View>
                </View>
              

            </ScrollView>

        </View>
    )
}

export default Menu


const styles = StyleSheet.create({
    menu:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '5%',
    },
    txtlichhoc: {
        width: '100%',
        height: '30%',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',

    },

    itemcon: {
        textAlign: 'center',
        backgroundColor: 'rgb(255, 165, 0)',
        borderRadius: 20,
        alignItems: 'center',
        width: '35%',
        height: 150,
    },
    itemcon1: {
        width: '70%',
        height: '70%',
    },
   
    scrool: {
        top: '5%',
        width: '100%',
        height: '90%',
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
    }

})