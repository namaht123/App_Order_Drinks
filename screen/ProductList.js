import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const ProductView = ({ imageSource, productName, productPrice, num }) => (
    <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginLeft: 15, marginRight: 15, borderRadius: 17, padding: 10, alignItems: 'center', marginTop: 5 }}>
        <Image source={imageSource} style={{ width: 127, height: 111, borderRadius: 24 }} />
        <View style={{ flex: 1, marginLeft: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>{productName}</Text>
            <View style={{ flexDirection: 'row', marginBottom: 5, marginTop: 5 }}>
                <TouchableOpacity style={{ backgroundColor: '#4EC581', width: 24, height: 24, borderRadius: 7, alignItems: 'center' }}>
                    <Text style={{ color: '#fff' }}>-</Text>
                </TouchableOpacity>
                <TextInput style={{ width: 62, height: 24, borderRadius: 8, borderWidth: 1, borderColor: '#41AB6F', textAlign: 'center', marginLeft: 5, marginRight: 5 }}> 0 </TextInput>
                <TouchableOpacity style={{ backgroundColor: '#4EC581', width: 24, height: 24, borderRadius: 7, alignItems: 'center' }}>
                    <Text style={{ color: '#fff' }}>+</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ fontWeight: 'bold', color: '#41AB6F' }}>{productPrice}</Text>
        </View>
    </View>
);

const ProductsList = () => (
    <SafeAreaView style={{ flex: 1, paddingTop: 5 }}>
        <ScrollView horizontal={false}>
            <ProductView imageSource={require('./assets/img/c1.jpg')} productName="Coffe hot" productPrice="$17.02" />
            <ProductView imageSource={require('./assets/img/pro4.png')} productName="Táo Canada" productPrice="$30.02" />
            <ProductView imageSource={require('./assets/img/quyt1.jpg')} productName="Quýt" productPrice="$100"  />
            <ProductView imageSource={require('./assets/img/pro2.jpg')} productName="Cam " productPrice="$17.02" />
            <ProductView imageSource={require('./assets/img/c2.jpg')} productName="coffe ice"  productPrice="$30.02"  />
            <ProductView imageSource={require('./assets/img/pro2.jpg')} productName="Cam" productPrice="$17.02" />
            {/* Thêm các sản phẩm khác nếu cần */}
        </ScrollView>
    </SafeAreaView>
);

export default ProductsList;
