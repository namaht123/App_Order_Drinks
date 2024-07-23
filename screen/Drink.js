import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const ProductView = ({ imageSource, productName, productNum, productPrice, productReview, star }) => (
    <TouchableOpacity style={{ backgroundColor: '#fff', elevation: 5, borderRadius: 15, padding: 15, paddingBottom: 10, position: 'relative', marginLeft: 5, marginRight: 5, marginTop: 5, marginBottom: 5 }}>
        <Image source={imageSource} style={{ width: 103, height: 98, borderRadius: 24 }} />
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{productName}</Text>
        <Text style={{ color: '#a7a7a7' }}> {productNum} </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#4EC581' }}>{productPrice}</Text>
        <View style={{ position: 'absolute', bottom: 10, right: 10, flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ color: '#FF9416' }}>{productReview}</Text>
            <Image source={require('./assets/img/star.png')} style={{ width: 18, height: 18 }} />
        </View>
    </TouchableOpacity>
);

const Drink = () => (
    <SafeAreaView style={{ padding: 10 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ProductView imageSource={require('./assets/img/drink1.jpg')} productName="Ice Coffee" productNum="1kg" productPrice="$20.02" productReview="4.6" />
            <ProductView imageSource={require('./assets/img/drink2.jpeg')} productName="Hot Coffee" productNum="1kg" productPrice="$30.02" productReview="4.7" />
            <ProductView imageSource={require('./assets/img/pro4.png')} productName="Táo" productNum="1.5kg" productPrice="$17.02" productReview="4.6" />
            <ProductView imageSource={require('./assets/img/drink1.jpg')} productName="Cam" productNum="2.5kg" productPrice="$17.02" productReview="3.6" />
            <ProductView imageSource={require('./assets/img/quyt1.jpg')} productName="Quýt" productNum="1.5kg" productPrice="$30.02" productReview="5" />
            <ProductView imageSource={require('./assets/img/drink1.jpg')} productName="Ice coffee" productNum="1kg" productPrice="$17.02" productReview="4.5" />
            {/* Thêm các sản phẩm khác nếu cần */}
        </ScrollView>
    </SafeAreaView>
);

export default Drink;
