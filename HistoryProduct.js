import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';

const ProductView = ({ imageSource, productName, productPrice, num }) => (
    <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginLeft: 15, marginRight: 15, borderRadius: 17, padding: 10, alignItems: 'center', marginTop: 5 }}>
        <Image source={imageSource} style={{ width: 127, height: 111, borderRadius: 24 }} />
        <View style={{ flex: 1, marginLeft: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>{productName}</Text>
            <View style={{flexDirection: 'row'}}>
                <Text style={{justifyContent: 'center',textAlign: 'center', color: '#41AB6F', height: 24, width: 62, borderColor: '#41AB6F', borderWidth:1, borderRadius: 5, marginTop: 20, marginBottom: 20}}>x{num}</Text>
                <View style={{flexDirection: 'row', marginLeft: 'auto', alignItems: 'center'}}>
                    <Image source={require('./assets/img/wall-clock.png')} style={{ width: 20, height: 20}} />
                    <Text style={{color: '#a7a7a7'}}> 01/01/2025 </Text>
                </View>
            </View>
            <Text style={{ fontWeight: 'bold', color: '#41AB6F' }}>{productPrice}</Text>
        </View>
    </View>
);

const HistoryProduct = () => (
    <SafeAreaView style={{ flex: 1, paddingTop: 5 }}>
        <ScrollView horizontal={false}>
            <ProductView imageSource={require('./assets/img/pro1.jpg')} productName="Strawberry" productPrice="$17.02" num="2"/>
            <ProductView imageSource={require('./assets/img/pro3.jpg')} productName="Watermelon" productPrice="$30.02" num="4"/>
            <ProductView imageSource={require('./assets/img/pro2.jpg')} productName="Banana" productPrice="$17.02" num="1"/>
            <ProductView imageSource={require('./assets/img/pro1.jpg')} productName="Strawberry" productPrice="$17.02" num="2"/>
            <ProductView imageSource={require('./assets/img/pro3.jpg')} productName="Watermelon" productPrice="$30.02" num="2"/>
            <ProductView imageSource={require('./assets/img/pro2.jpg')} productName="Banana" productPrice="$17.02" num="2"/>
            <ProductView imageSource={require('./assets/img/drink1.jpg')} productName="Ice Coffee"  productPrice="$17.02"  num="2"/>
            <ProductView imageSource={require('./assets/img/drink2.jpeg')} productName="Hot Coffee" productPrice="$30.02"  num="2"/>
            <ProductView imageSource={require('./assets/img/drink1.jpg')} productName="Banana"  productPrice="$17.02" num="2" />
            <ProductView imageSource={require('./assets/img/drink1.jpg')} productName="Strawberry"  productPrice="$17.02"  num="2"/>
            <ProductView imageSource={require('./assets/img/drink1.jpg')} productName="Watermelon"  productPrice="$30.02"  num="2"/>
            <ProductView imageSource={require('./assets/img/drink1.jpg')} productName="Banana"  productPrice="$17.02" num="2"/>
            {/* Thêm các sản phẩm khác nếu cần */}
        </ScrollView>
    </SafeAreaView>
);

export default HistoryProduct;
