import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ProductsList from './ProductList';

const Cart = () => {
    const navigation = useNavigation();
    const payMent = () => {
        navigation.navigate('Payment');
    };

    const back = () => {
        navigation.navigate('Details_Product');
    }

    const goToHistory = () =>{
        navigation.navigate('History');
    }
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <TouchableOpacity style={styles.back} onPress={back}>
                    <Image source={require('./assets/img/left.png')} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 18, justifyContent: 'center' }}>Cart</Text>
            </View>

            <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 17, marginLeft: 15, marginRight: 15, marginBottom: 5, marginTop: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={{ color: '#A7A7A7' }}> Thông tin giỏ hàng </Text>
                    <View style={{ marginLeft: 'auto', flexDirection: 'row' }}>
                        <Text style={{ color: '#ff0000' }}> Update </Text>
                        <Image source={require('./assets/img/update.png')} style={{ width: 40, height: 40 }} />
                    </View>
                </View>
                <Text style={{ fontWeight: 'bold',fontStyle: 'italic', fontSize: 20 }}>Hoàng Ngọc Huỳnh - 0886092364 </Text>
                <Text> MD5 - Kí túc xã Mỹ Đình , Nguyễn Cơ Thạch, Hà Nội  </Text>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Image source={require('./assets/img/time.png')} style={{ width: 18, height: 18, marginRight: 5 }} />
                    <Text style={{ color: '#4EC581' }}> 1:11 - 1/1/2024</Text>
                </View>
            </View>
           
            <ProductsList />
            

            <View style={{ backgroundColor: '#fff', marginTop: 5, marginLeft: 15, marginRight: 15, padding: 10, flexDirection: 'row', borderRadius: 17, alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold' }}>Voucher</Text>
                <TextInput style={{ width: 210, height: 31, borderWidth: 1, borderColor: '#4EC581', borderRadius: 12, marginLeft: 5, marginRight: 5 }} />
                <TouchableOpacity style={{ backgroundColor: '#4EC581', borderRadius: 12, width: 72, height: 31, justifyContent: 'center' }}>
                    <Text style={{ color: '#fff', textAlign: 'center' }}>Add</Text>
                </TouchableOpacity>
            </View>
            <Pressable onPress={payMent}>
                <View style={{ paddingLeft: 15, flexDirection: 'row', paddingRight: 15, marginTop: 5, marginBottom: 5, }}>
                    <Text style={{ color: '#a7a7a7' }}>Phương thức thanh toán: </Text>
                    <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 'auto' }}>
                        <Image source={require('./assets/img/credit-card.png')} style={{ width: 18, height: 18, marginRight: 5 }} />
                        <Text style={{ color: '#4EC581' }}>Vn Pay</Text>
                    </View>
                </View>
            </Pressable>
            <View style={{ flexDirection: 'row', backgroundColor: '#fff', alignItems: 'center', padding: 15, borderRadius: 17 }}>
                <Text style={{ fontWeight: 'bold' }}>Total:</Text>
                <Text style={{ fontWeight: 'bold', color: '#41AB6F', flex: 1, textAlign: 'center' }}>$ 100.06</Text>
                <TouchableOpacity onPress={goToHistory} style={{ backgroundColor: '#4EC581', borderRadius: 12, width: 171, height: 47, marginLeft: 'auto', justifyContent: 'center' }}>
                    <Text style={{ color: '#fff', textAlign: 'center' }}>Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
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
    }
})