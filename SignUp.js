import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function SignUp() {

    const navigation = useNavigation();

    const back = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={st.container}>

            <View style={st.title}>
                <TouchableOpacity style={st.back} onPress={back}>
                    <Image source={require('./assets/img/left.png')} style={st.backIcon} />
                </TouchableOpacity>
                <Text style={{ color: '#000',flex: 1, textAlign: 'center', marginRight: 40, fontSize: 20, fontWeight: 'bold' }}> Đăng ký </Text>
            </View>

            <Text style={{ color: '#0fc2bf', width: '90%', marginLeft: 'auto', marginRight: 'auto', fontSize: 15, fontWeight: 'bold', marginBottom: 10 }}>So dien thoai/Email</Text>
            <TextInput style={st.input} placeholder='so dien thoai/email'></TextInput>

            <Text style={{ color: '#0fc2bf', width: '90%', marginLeft: 'auto', marginRight: 'auto', fontSize: 15, fontWeight: 'bold', marginBottom: 10 }}> Mật khẩu mới </Text>
            <TextInput style={st.input} placeholder='Nhập mật khẩu'></TextInput>
            <TextInput style={st.input} placeholder='Nhập lại mật khẩu'></TextInput>
            <View style={{ flexDirection: 'row', width: '85%', marginLeft: 'auto', marginRight: 'auto' }}>
                <TouchableOpacity style={st.checkbox}></TouchableOpacity>
                <Text> I greed </Text>
                <Text style={{ color: '#0fc2bf' }}> Điều khoản & dịch vụ của bạn </Text>
            </View>

            <TouchableOpacity style={st.buttonLogin}>
                    <Text style={st.buttonText}>Đăng Ký </Text>
                </TouchableOpacity>
        </View>
    );
}

const st = StyleSheet.create({
    container: {
        backgroundColor: '#F3F5F7',
        flex: 1,
    },
    backIcon: {
        width: 36,
        height: 36,
        marginLeft: 10
    },
    title: {
        paddingRight: 46,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30
    },
    input: {
        height: 60,
        width: '90%',
        borderRadius: 15,
        borderWidth: 1.5,
        marginBottom: 10,
        borderColor: '#0fc2bf',
        padding: 18,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20
    },

    checkbox: {
        width: 18,
        height: 18,
        borderColor: '#0fc2bf',
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 5
    },
    buttonLogin: {
        marginTop: 40,
        width: '90%',
        backgroundColor: '#0fc2bf',
        color: '#fff',
        borderRadius: 30,
        height: 50,
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight:'auto'
    },

    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 15,
    },
});

export default SignUp;