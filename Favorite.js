import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FavoriteProduct from './FavoriteProduct';

const Favorite = () => {
    const navigation = useNavigation();

    const back = () => {
        navigation.navigate('Home');
    }
    return (
        <View style={st.container}>
            <View style={st.title}>
                <TouchableOpacity style={st.back} onPress={back}>
                    <Image source={require('./assets/img/left.png')} style={st.backIcon} />
                </TouchableOpacity>
                <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 18, justifyContent: 'center' }}>Favorite</Text>
            </View>

            <FavoriteProduct/>
        </View>
    )
}

export default Favorite

const st = StyleSheet.create({
    container: {
        backgroundColor: '#F3F5F7',
        flex: 1,
        paddingBottom: 55
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
    }
})