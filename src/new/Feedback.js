import { StyleSheet, Text, View ,TextInput,Button,Alert} from 'react-native'
import React, { useState, useCallback } from 'react'
import { addFeedback } from './NewService';

const Feedback = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');

    const save = useCallback(async () => {
        const data = {
            title,
            date,
            email,
            status,
            name,
        };
        const response = await addFeedback(data);
        console.log(response);
        // tự viết
        Alert.alert('Thêm thành công');
        setTitle('');
        setDate('');
        setEmail('');
        setStatus('');
        setName('');
    }, [title, date, email, status, name]);
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nội dung phản hồi:</Text>
            <TextInput
                style={styles.input}
                multiline={true}
                numberOfLines={4}
                onChangeText={text => setTitle(text)}
                value={title}
            />
            <Text style={styles.label}>Tên người dùng:</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setName(text)}
                value={name}
            />
            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <Text style={styles.label}>Date:</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setDate(text)}
                value={date}
            />
            <Text style={styles.label}>Status:</Text>
            <TextInput
                style={styles.input}
                onChangeText={Number => setStatus(Number)}
                value={status}
            />
            <Button
                title="Gửi phản hồi"
                onPress={save}
            />
        </View>
    );
}

export default Feedback

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 5,
        marginBottom: 10,
        paddingHorizontal: 5
    }
});