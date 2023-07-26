import { StyleSheet, Text, TextInput, View, Image, ScrollView, onPress, Pressable } from 'react-native'
import React from 'react'
const TinTuc = (props) => {
    const { navigation } = props
    return (
        <View style={styles.container}>
            <View style={styles.logotitle}>
                <Image style={styles.more} source={require('../media/search.png')} />
                <TextInput style={styles.textinput} placeholder='Tìm kiếm sự kiện,thông báo,..'></TextInput>
                <Image style={{ marginLeft: 60 }} source={require('../media/notice.png')} />
                <Image style={{ marginLeft: 30 }} source={require('../media/account.png')} />
            </View>

            <View style={{ margin: 10, width: '100%', borderRadius: 10, height: '28%' }}>
                <Image style={styles.ti1} source={require('../media/bantinsv.jpg')} />

            </View>

            <Text style={{ color: 'black', fontWeight: 'bold', margin: 10, width: 300, fontSize: 18 }}>
                Khám phá danh mục
            </Text>

            <ScrollView
                style={{margin:5}}
                horizontal={true}>
                <View style={{ flexDirection: 'column', width: 500, height: 140 }}>
                    <View style={{ flexDirection: 'row', height: 80, width: 100 }}>
                     <View style={{flexDirection:'column'}}>
                     <View style={styles.iconmenu}>
                      <Image style={styles.more} source={require('../media/heart.png')} />
                      
                        </View>
                        <Text style={{textAlign:'center',width:60,backgroundColor:'yellow',marginHorizontal:15}}>Text</Text> 
                     </View>
                     <View style={{flexDirection:'column'}}>
                     <View style={styles.iconmenu}>
                      <Image style={styles.more} source={require('../media/heart.png')} />
                      
                        </View>
                        <Text style={{textAlign:'center',width:60,backgroundColor:'yellow',marginHorizontal:15}}>Text</Text> 
                     </View>
                     <View style={{flexDirection:'column'}}>
                     <View style={styles.iconmenu}>
                      <Image style={styles.more} source={require('../media/heart.png')} />
                      
                        </View>
                        <Text style={{textAlign:'center',width:60,backgroundColor:'yellow',marginHorizontal:15}}>Text</Text> 
                     </View>
                     <View style={{flexDirection:'column'}}>
                     <View style={styles.iconmenu}>
                      <Image style={styles.more} source={require('../media/heart.png')} />
                      
                        </View>
                        <Text style={{textAlign:'center',width:60,backgroundColor:'yellow',marginHorizontal:15}}>Text</Text> 
                     </View>
                    </View>
                    <View style={{ flexDirection: 'row', height: 80, width: 100 }}>
                    <View style={{flexDirection:'column'}}>
                     <View style={styles.iconmenu}>
                      <Image style={styles.more} source={require('../media/heart.png')} />
                      
                        </View>
                        <Text style={{textAlign:'center',width:60,backgroundColor:'yellow',marginHorizontal:15}}>Text</Text> 
                     </View>
                     <View style={{flexDirection:'column'}}>
                     <View style={styles.iconmenu}>
                      <Image style={styles.more} source={require('../media/heart.png')} />
                      
                        </View>
                        <Text style={{textAlign:'center',width:60,backgroundColor:'yellow',marginHorizontal:15}}>Text</Text> 
                     </View>
                     <View style={{flexDirection:'column'}}>
                     <View style={styles.iconmenu}>
                      <Image style={styles.more} source={require('../media/heart.png')} />
                      
                        </View>
                        <Text style={{textAlign:'center',width:60,backgroundColor:'yellow',marginHorizontal:15}}>Text</Text> 
                     </View>
                     <View style={{flexDirection:'column'}}>
                     <View style={styles.iconmenu}>
                      <Image style={styles.more} source={require('../media/heart.png')} />
                      
                        </View>
                        <Text style={{textAlign:'center',width:60,backgroundColor:'yellow',marginHorizontal:15}}>Text</Text> 
                     </View>
                    </View>
                    <View style={{ flexDirection: 'row', height: 100, width: 100 }}>

                    </View>
                </View>

            </ScrollView>

            <Text style={{ color: 'black', fontWeight: 'bold', margin: 10, width: 300, fontSize: 18 }}>
                #1 Studio mới được ra đời tại trường
            </Text>
            <Image style={{ width: '96%', height: 200, marginLeft: 5 }} source={require('../media/t5.png')} />
        </View>




    )
}

export default TinTuc

const styles = StyleSheet.create({
    iconmenu:{
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        width: 56, height: 56,
        backgroundColor:'#f1f2f2',
         borderRadius: 28,
        shadowColor: 'white',
      
        elevation: 2,
        marginLeft:20,
        borderWidth:1
       
        
       
    },

    txtlichhoc: {
        color: '#ffffff',

        fontSize: 14


    },
    txtlichhoc2: {
        marginTop: 3,
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',



    },

    itemcon: {
        textAlign: 'center',

        borderRadius: 10,
        alignItems: 'center',
        width: 130,
        height: 150,
        margin: 10,
        position: 'relative'
    },
    itemcon1: {
        marginTop: 10,
        width: '100%',
        height: '100%',
        borderRadius: 15
    },

    scrool: {

        width: '95%',
        height: 150,

        marginTop: -38
    },

    ti1: {
        width: '95%',
        height: '100%',
        borderRadius: 10
    },
    textinput: {
        color: 'black',
        fontWeight: 'bold',
        width: 180,


        fontSize: 12,
        fontFamily: 'Roboto, sans-serif'
    },
    logotitle: {
        alignItems: 'center',

        flexDirection: 'row',
        backgroundColor: '#ffffff',
        width: '60%',
        height: 40,

        borderRadius: 20,
        marginLeft: 15,
        marginTop: 10
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f5f5f5',

    }
})