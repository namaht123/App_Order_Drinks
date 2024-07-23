import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function Login() {
    const navigation = useNavigation();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [hasErrorUserName, setHasErrorUserName] = useState(false);
    const [hasErrorPassword, setHasErrorPassword] = useState(false);

    const LoginPress = () => {
        if (userName==='Huynh' && password === '123456') {
            navigation.navigate('MainActivity');
        } else {
            setHasErrorUserName(true);
            setHasErrorPassword(true);
        }
    };

    const signUpPress = () => {
        navigation.navigate('SignUp');
    }
    const onFocusHandlerUserName = () => {
        setHasErrorUserName(false);
    }
    const onFocusHandlerPassword = () => {
        setHasErrorPassword(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <Text style={styles.title}> Chào mừng bạn đến với shop chúng tôi ! </Text>
                <Image style={styles.logo} source={require('./assets/logo1.jpg')} />
                <Text style={{ color: '#FF00FF', fontSize: 18 }}> PH35237 Shop </Text>
            </View>

            <View style={styles.view2}>
                <Text style={{ marginBottom: 20 ,color: '#0000FF'}}> Vui lòng đăng nhập tài khoản của quý khách ! </Text>
                <TextInput style={[styles.textInput, hasErrorUserName && {borderColor: 'red'}]} value={userName} onChangeText={(text) => setUserName(text)} onFocus={onFocusHandlerUserName} placeholder='User' />
                <TextInput style={[styles.textInput, hasErrorPassword && {borderColor: 'red'}]} value={password} onChangeText={(text) => setPassword(text)} onFocus={onFocusHandlerPassword} placeholder="Password" secureTextEntry={true} />
                <View style={{ flexDirection: 'row', width: '85%' }}>
                    <TouchableOpacity style={styles.checkbox}></TouchableOpacity>
                    <Text> Lưu tài khoản  </Text>
                    <Text style={{ color: '#ff0000', marginLeft: 'auto' }}> Quên mật khẩu ? </Text>
                </View>
                <TouchableOpacity style={styles.buttonLogin} onPress={LoginPress}>
                    <Text style={styles.buttonText}>Đăng Nhập</Text>
                </TouchableOpacity>
                <View style={styles.or}>
                    <View style={styles.line} />
                    <Text style={styles.text}>or</Text>
                    <View style={styles.line} />
                </View>
            </View>

            <View style={styles.view3}>
                <TouchableOpacity style={styles.buttonKhac}>
                    <Image style={styles.logoSmall} source={require('./assets/img/facebook.png')} />
                    <Text>Đăng Nhập bằng FaceBook</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonKhac}>
                    <Image style={styles.logoSmall} source={require('./assets/img/google.png')} />
                    <Text>Đăng Nhập bằng Google </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <Text> Bạn chưa có tài khoản ?</Text>
                    <Text style={{ color: '#0fc2bf', marginLeft: 5 }} onPress={signUpPress}> Đăng kí </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    view1: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },

    view2: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 30
    },

    textInput: {
        height: 60,
        width: '90%',

        borderRadius: 15,
        borderWidth: 1.5,
        marginBottom: 10,
        borderColor: '#0fc2bf',
        padding: 18,
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
        marginTop: 10,
        width: '90%',
        backgroundColor: '#0fc2bf',
        color: '#fff',
        borderRadius: 30,
        height: 50,
        justifyContent: 'center'
    },

    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 15,
    },

    or: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        marginTop: 10,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#d5d5d5', // Màu của dòng ngang
        marginHorizontal: 10, // Khoảng cách giữa dòng ngang và văn bản
    },
    text: {
        fontSize: 16,
        color: '#000', // Màu của văn bản
    },

    view3: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    buttonKhac: {
        height: 50,
        width: '90%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#d5d5d5',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 10,
        flexDirection: 'row'
    },
    logoSmall: {
        height: 35,
        width: 35,
        marginRight: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    logo: {
        width: 180,
        height: 120,
    }
});

export default Login;
Login.navigationOptions = {
    headerShown: false, // Ẩn tiêu đề
};