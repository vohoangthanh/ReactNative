import { Pressable, StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import { getSchedule } from './NewService'

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


const LichHoc = () => {
    const [schedule, setSchedule] = useState([]);
    const ongetSchedule = async () => {
        const schedule = await getSchedule();
        setSchedule(schedule);
        //  console.log("Lichthi :48 >"+schedule);
    }
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }
    useEffect(() => {
        ongetSchedule();

    }, []);

    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [dayreal, setDayreal] = useState('Today');
    const [day1, setDay] = useState(moment().format('DD'));
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'windows');
        setDate(currentDate);
        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate().toString().padStart(2, '0');
        let fDate1 = months[tempDate.getMonth()].slice(0, 3);
        let fDate2 = tempDate.getFullYear();
        let fDate3 = daysOfWeek[tempDate.getDay()];
        setDay(fDate);
        setMonth(fDate1);
        setYear(fDate2);
        setDayreal(fDate3);

        if (selectedDate) {
            setSelectedDate(selectedDate.getDate());
        } else {
            setSelectedDate(null);
        }
        setDate(selectedDate || date);


    }
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    const renderItem = (value) => {
        const { item } = value
        const isItemSelected = item._id === selectedDate;

        return (
            <View style={[styles.itemdate, isItemSelected && styles.selectedItem]}>
                <Text style={{ fontSize: 12, lineHeight: 18, color: '#BCC1CD' }}>{item.day1.charAt(0)} </Text>
                <Text style={{ fontSize: 16, lineHeight: 18, color: '#212525', marginTop: 2, }}>{item.day} </Text>
            </View>
        )
    }
    const renderItem2 = (value) => {
        const { item } = value
        const currentTime = moment();
        const itemTime = moment(item.timeend, 'HH:mm');

        const isPastTime = itemTime.isBefore(currentTime.startOf('minute'));
        return (
            <View style={[styles.flat2view1, isPastTime && styles.pastItem]}>
                <View>
                    <Text style={{ fontSize: 16, lineHeight: 18, color: '#212525', marginBottom: 6, }}>{item.timestart} </Text>
                    <Text style={{ fontSize: 16, lineHeight: 18, color: '#BCC1CD' }}>{item.timeend} </Text>
                </View>
                <View style={styles.flat2view2}>
                    <View style={styles.flat2view6}>
                        <View style={styles.flat2view3}>
                            <Text style={{ fontSize: 18, lineHeight: 19, fontWeight: 600, color: '#212525', marginBottom: 4, }}>Mã Môn: {item.subjectcode} </Text>
                            <Image style={styles.anh1} source={require('../../media/2cham.png')} />
                        </View>
                        <Text style={{ fontSize: 14, lineHeight: 18, color: '#212525', marginBottom: 15, }}>Ca Học: {item.shift} </Text>
                        <Text style={{ fontSize: 14, lineHeight: 18, color: '#212525', marginBottom: 15, }}>Ngày: {item.date} </Text>
                        <View style={styles.flat2view4}>
                            <Image style={styles.anh2} source={require('../../media/location.png')} />
                            <Text style={{ fontSize: 14, lineHeight: 18, color: '#212525', marginBottom: 7, marginLeft: 10, }}>Phòng: {item.adress} </Text>
                        </View>
                        <View style={styles.flat2view5}>
                            <Image style={styles.anh2} source={require('../../media/avatar.png')} />
                            <Text style={{ fontSize: 14, lineHeight: 18, color: '#212525', marginBottom: 6, marginLeft: 10, }}>Giảng Viên: {item.teacher} </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }



    return (
        <View style={styles.body}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => showMode('date')}>
                    <View style={styles.topview1}>
                        <Text style={styles.topview1text}>{day1}</Text>
                        <View>
                            <Text style={styles.topview2text2}>{month} {year}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {show && (
                    <DateTimePicker
                        testID='dateTimePicker'
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display='calendar'
                        onChange={onChange}
                    />)}
                <Pressable style={styles.button}>
                    <Text style={styles.buttontext}>{dayreal}</Text>
                </Pressable>
            </View>
            <View style={styles.mid}>
                <View style={styles.flat1}>
                    <FlatList data={DATAmau1} showsHorizontalScrollIndicator={false} horizontal={true} renderItem={renderItem} keyExtractor={(item, index) => item.id} />
                </View>
                <View style={styles.midview1}>
                    <View style={styles.midview2}>
                        <Text style={styles.midview2text1}>Time</Text>
                        <Text style={styles.midview2text1}>Course</Text>
                    </View>
                    <Image style={styles.anh2} source={require('../../media/sapxep.png')} />
                </View>
                <View style={styles.flat2}>
                    <FlatList onRefresh={onRefresh} refreshing={refreshing} data={schedule} showsVerticalScrollIndicator={false} renderItem={renderItem2} keyExtractor={(item, index) => item._id} />
                </View>
            </View>
        </View >
    )
}

export default LichHoc

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#faf9f9',
        width: '100%',
        height: '100%',
    },
    top: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 36,
        width: '100%',
        height: '15%',
    },
    mid: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '75%',
        padding: 24,
    },
    topview1: {
        justifyContent: 'space-around',
        width: '33%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    topview1text: {
        top: -4,
        color: 'rgba(33, 37, 37, 1)',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontSize: 44,
        width: 100,
    },
    topview2text1: {
        lineHeight: 21,
        color: 'rgba(188, 193, 205, 1)',
        fontFamily: 'Yu Gothic UI',
        fontStyle: 'normal',
        fontSize: 14,
    },
    topview2text2: {
        lineHeight: 21,
        color: 'rgba(188, 193, 205, 1)',
        fontFamily: 'Yu Gothic UI',
        fontStyle: 'normal',
        fontSize: 14,
    },
    button: {
        width: '22%',
        borderRadius: 10,
        height: 40,
        backgroundColor: '#e9f5ef',
        alignItems: 'center',
    },
    buttontext: {
        marginTop: 8,
        lineHeight: 24,
        color: '#4DC591',
        fontFamily: 'Yu Gothic UI',
        fontStyle: 'normal',
        fontSize: 16,

    },
    flat1: {
        height: '11%',
    },
    flat2: {
        marginTop: '4%',
        marginRight: -24,
    },

    flat2view1: {
        marginBottom: 16,
        height: 155,
        flexDirection: 'row',
    },
    flat2view2: {
        backgroundColor: '#F6F6F5',
        borderRadius: 16,
        marginLeft: '9%',
        width: '76%',
    },
    flat2view3: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        
    },
    flat2view4: {
        flexDirection: 'row',
    },
    flat2view5: {
        flexDirection: 'row',
    },
    flat2view6: {
        marginLeft: 16,
        marginTop: 5,
    },
    anh1: {
        marginRight: 8,
    },
    midview1: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    midview2: {
        width: '32%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    midview2text1: {
        color: '#BCC1CD',
        fontFamily: 'Yu Gothic UI',
        fontStyle: 'normal',
        fontSize: 16,
    },
    itemdate: {
        alignItems: 'center',
        width: 40,
        height: 57,
        borderRadius: 10,
        marginRight: 5,
        backgroundColor: '#FFFFFF',
    },
    selectedItem: {
        backgroundColor: 'black',
    },
    pastItem: {
        opacity: 0.3,
    },
})

var DATAmau1 = [
    {
        "id": 1,
        "day": "1",
        "day1": "Friday"
    }, {
        "id": 2,
        "day": "2",
        "day1": "Saturday"
    }, {
        "id": 3,
        "day": "3",
        "day1": "Sunday"
    }, {
        "id": 4,
        "day": "4",
        "day1": "Monday"
    }, {
        "id": 5,
        "day": "5",
        "day1": "Tuesday"
    }, {
        "id": 6,
        "day": "6",
        "day1": "Wednesday"
    }, {
        "id": 7,
        "day": "7",
        "day1": "Thursday"
    }, {
        "id": 8,
        "day": "8",
        "day1": "Friday"
    }, {
        "id": 9,
        "day": "9",
        "day1": "Saturday"
    }, {
        "id": 10,
        "day": "10",
        "day1": "Sunday"
    }, {
        "id": 11,
        "day": "11",
        "day1": "Monday"
    },
    {
        "id": 12,
        "day": "12",
        "day1": "Friday"
    }, {
        "id": 13,
        "day": "13",
        "day1": "Saturday"
    }, {
        "id": 14,
        "day": "14",
        "day1": "Sunday"
    }, {
        "id": 15,
        "day": "15",
        "day1": "Monday"
    }, {
        "id": 16,
        "day": "16",
        "day1": "Tuesday"
    }, {
        "id": 17,
        "day": "17",
        "day1": "Wednesday"
    }, {
        "id": 18,
        "day": "18",
        "day1": "Thursday"
    }, {
        "id": 19,
        "day": "19",
        "day1": "Friday"
    }, {
        "id": 20,
        "day": "20",
        "day1": "Saturday"
    }, {
        "id": 21,
        "day": "21",
        "day1": "Sunday"
    }, {
        "id": 22,
        "day": "22",
        "day1": "Monday"
    }, {
        "id": 23,
        "day": "23",
        "day1": "Tuesday"
    }, {
        "id": 24,
        "day": "24",
        "day1": "Wednesday"
    }, {
        "id": 25,
        "day": "25",
        "day1": "Friday"
    }, {
        "id": 26,
        "day": "26",
        "day1": "Saturday"
    }, {
        "id": 27,
        "day": "27",
        "day1": "Sunday"
    }, {
        "id": 28,
        "day": "28",
        "day1": "Monday"
    }, {
        "id": 29,
        "day": "29",
        "day1": "Tuesday"
    }, {
        "id": 30,
        "day": "30",
        "day1": "Wednesday"
    }]
