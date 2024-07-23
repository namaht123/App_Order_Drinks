import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Payment = () => {
    const navigation = useNavigation();
    const back = () => {
        navigation.navigate('Cart');
    }
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <TouchableOpacity style={styles.back} onPress={back}>
                    <Image source={require('./assets/img/left.png')} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={{flex: 1,textAlign: 'center', fontWeight: 'bold', fontSize: 18, justifyContent: 'center'}}>Payment</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold'}}> Bank name </Text>
                <Text style={{fontWeight: 'bold', color: '#4EC581', marginLeft: 'auto'}}>MB bank</Text>
            </View>
            <View style={{borderWidth: 1, borderColor: '#000', borderRadius: 6, justifyContent: 'center', marginTop: 3, padding: 5}}>
                <Image source={require('./assets/img/mb.jpg')} style={{width: '100%', height: 207}}/>
            </View>

            <View style={{flexDirection: 'row', borderRadius: 24, backgroundColor: '#ffff', padding: 10, paddingLeft: 20, alignItems: 'center', marginTop: 5}}>
                <Image source={require('./assets/img/wallet.png')} style={{width: 50, height: 50, marginRight: 20}}/>
                <Text style={{color: '#000', fontSize: 15}}>Thanh toán khi nhận hàng</Text>
            </View>
            <View style={{flexDirection: 'row', borderRadius: 24, backgroundColor: '#ffff', padding: 10, paddingLeft: 20, alignItems: 'center', marginTop: 5}}>
                <Image source={require('./assets/img/zalopay.png')} style={{width: 50, height: 50, marginRight: 20}}/>
                <Text style={{color: '#000', fontSize: 15}}> Zalo pay</Text>
            </View>
            <View style={{flexDirection: 'row', borderRadius: 24, backgroundColor: '#ffff', padding: 10, paddingLeft: 20, alignItems: 'center', marginTop: 5}}>
                <Image source={require('./assets/img/momo.png')} style={{width: 50, height: 50, marginRight: 20}}/>
                <Text style={{color: '#000', fontSize: 15}}>Momo </Text>
            </View>
            <View style={{flexDirection: 'row', borderRadius: 24, backgroundColor: '#ffff', padding: 10, paddingLeft: 20, alignItems: 'center', marginTop: 5}}>
                <Image source={require('./assets/img/amazon-pay.png')} style={{width: 50, height: 50, marginRight: 20}}/>
                <Text style={{color: '#000', fontSize: 20}}>amazon pay</Text>
            </View>
            <View style={{flexDirection: 'row', borderRadius: 24, backgroundColor: '#ffff', padding: 10, paddingLeft: 20, alignItems: 'center', marginTop: 5}}>
                <Image source={require('./assets/img/paypal.png')} style={{width: 50, height: 50, marginRight: 20}}/>
                <Text style={{color: '#000', fontSize: 20}}>paypal</Text>
            </View>
        </View>
    )
}

export default Payment

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F3F5F7',
        flex: 1,
        paddingLeft:15,
        paddingRight: 15
    },
    backIcon:{
        width:36,
        height: 36,
        marginLeft: 10
    },
    title:{
        paddingRight: 46,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30
    }
})