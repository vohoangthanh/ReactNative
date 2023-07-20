import { StyleSheet, Text,TextInput, View, Image, ScrollView, onPress,Pressable } from 'react-native'
import React from 'react'

const Menu = (props) => {
    const {navigation} = props
    const handleLogin = () => {
        navigation.navigate('Lichthi')
    }
    return (
        <View style={styles.item}>
            <View style={styles.logotitle}>
            <Image style={styles.more} source={require('../media/search.png')} />
            <TextInput style={styles.textinput} placeholder='Chọn dịch vụ bạn cần'></TextInput>
                
            </View>

            <Text style={styles.messUr}>Thông báo của bạn</Text>
            <View style={styles.title1}>
            <View style={{backgroundColor:'#ffffff',paddingRight:10}}>
            <Image style={styles.man} source={require('../media/man.png')} />
            </View>
            <View style={{flexDirection:'column',marginTop:20,marginLeft:10}}>
            <Text style={{fontWeight:700,fontSize:16,margin:3}} >Lập trình Android 2</Text>
            <Text style={{fontWeight:400,fontSize:12,margin:3}} >Toà T(T1102)</Text>
            <Text style={{fontWeight:700,fontSize:14,margin:3}}>Hôm nay:15g15 - 5g15</Text>
            </View>
            <View style={{flexDirection:"column",marginLeft:50,width:50}}>
            <Text style={{fontWeight:'bold',textAlign:'center',color:'#ffffff',fontSize:19,marginTop:20}}>20</Text>
            <Text style={{fontWeight:"bold",textAlign:'center',color:'#ffffff',fontSize:19,margin:1}}>July</Text>
            </View>
            </View>
            <Text style={styles.messUr2}>Thông báo của trường</Text>
            <View style={styles.title2}>
           
            <View style={{flexDirection:'column',marginTop:20,marginLeft:10}}>
            <Text style={{color:'#333333',fontWeight:500,fontSize:16,margin:3}} >Nhận chứng chỉ quốc phòng</Text>
            <Text style={{fontWeight:400,fontSize:12,margin:3}} >Hạn cuối nhận bằng từ ngày 30/06 , sinh viên đem theo thẻ sinh viên và email trường để nhận chứng chỉ tại phòng công tác sinh viên</Text>
            
            </View>
            </View>
            <View style={{flexDirection:'row',marginLeft:10,marginBottom:10}}>
                
            <View style={{flexDirection:'column',width:170,marginTop:5,marginLeft:10 ,backgroundColor:'#ffffff'}}>
            <Text style={{color:'#333333',fontWeight:500,fontSize:16,margin:3}} >Sự kiện GoldenBee</Text>
            <Text style={{fontWeight:400,width:160,fontSize:12,margin:3}} >Tổ chức tại Công viên phần mềm với nhiều ca sĩ mới</Text>
            <Image style={{marginLeft:50,marginTop:5,marginBottom:5}} source={require('../media/goldenbee.png')} />
            </View>
             
            <View style={{flexDirection:'column',width:170,marginTop:5,marginLeft:10,backgroundColor:'#ffffff'}}>
            <Text style={{color:'#333333',fontWeight:500,fontSize:16,margin:3}} >Thông báo ngày thi</Text>
            <Text style={{fontWeight:400,width:160,fontSize:12,margin:3}} >Sinh viên kiểm tra lịch trên AP từ ngày mai</Text>
            <Image style={{marginLeft:50,marginTop:5,marginBottom:5}} source={require('../media/lịch.png')} />
            </View> 
            </View>

            <Text style={styles.messUr2}>Mục lục</Text>
           
            
            <ScrollView style={styles.scrool} horizontal ={true} >
                <View style={styles.menu}>
                    <Pressable style={styles.itemcon} onPress = {handleLogin}>
                        <Image style={styles.itemcon1} source={require('../media/lichhoc.png')} />
                        <Text style={styles.txtlichhoc}>Lịch Thi</Text>
                    </Pressable>
                    <View style={styles.itemcon}>
                        <Image style={styles.itemcon1} source={require('../media/lichthi.png')} />
                        <Text style={styles.txtlichhoc}>Lịch Học</Text>
                    </View>
                </View>
                <View style={styles.menu}>
                    <View style={styles.itemcon}>
                        <Image style={styles.itemcon1} source={require('../media/news.png')} />
                        <Text style={styles.txtlichhoc}>Tin tức</Text>
                    </View>
                    <View style={styles.itemcon}>
                        <Image style={styles.itemcon1} source={require('../media/lichhoc.png')} />
                        <Text style={styles.txtlichhoc}>Hoá đơn</Text>
                    </View>
                </View>
                <View style={styles.menu}>
                    <View style={styles.itemcon}>
                        <Image style={styles.itemcon1} source={require('../media/lichhoc.png')} />
                        <Text style={styles.txtlichhoc}>Giải đáp</Text>
                    </View>
                    <View style={styles.itemcon}>
                        <Image style={styles.itemcon1} source={require('../media/lichhoc.png')} />
                        <Text style={styles.txtlichhoc}>Điểm</Text>
                    </View>
                </View>
              

            </ScrollView>

        </View>
    )
}

export default Menu

/* Roboto */

const styles = StyleSheet.create({
    title2:{
        width:'90%',
        height:'14%',
        backgroundColor:'#ffffff',
        
        margin:15,
        flexDirection:'row'
    },
    man:{
        marginTop:20,
        marginLeft:10
    },
    title1:{
        width:'90%',
        height:'14%',
        backgroundColor:'#c1ffc1',
        
        margin:15,
        flexDirection:'row'
    },
    messUr:{
        color:'black',
        fontWeight:'bold',
       
        
        fontSize:18,
        fontFamily: 'Roboto, sans-serif',
        marginTop:30,
        marginLeft:20
    },
    
    messUr2:{
        color:'black',
        fontWeight:'bold',
       
        
        fontSize:18,
        fontFamily: 'Roboto, sans-serif',
        marginTop:5,
        marginLeft:20
    },
    textinput:{
        color:'black',
        fontWeight:'bold',
        width:250,
        
        fontSize:16,
        fontFamily: 'Roboto, sans-serif'
    },
    menu:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '1%',
        
    },
    txtlichhoc: {
        marginTop:3,
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',

    },

    itemcon: {
        textAlign: 'center',
        backgroundColor: '#FFA07A',
        borderRadius: 10,
        alignItems: 'center',
        width:60,
        height: 60,
        margin:10
    },
    itemcon1: {
        marginTop:10,
        width: '30%',
        height: '30%',
    },
   
    scrool: {
      
        width: '95%',
        height: '90%',
    },

    item: {
        width: '100%',
        height: '100%',
        backgroundColor:'#f5f5f5'
    },
   
    logotitle: {
        alignItems: 'center',
      
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        width: '90%',
        height: '6%',
        borderRadius:20,
        marginLeft:15,
        marginTop:15
    },
  

})