import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const ProductView = ({ imageSource, productName, productNum, productPrice, productReview, star }) => (
    <TouchableOpacity style={{ backgroundColor: '#fff', elevation: 5, borderRadius: 15, padding: 15, paddingBottom: 10, position: 'relative', marginLeft: 5, marginRight: 5, marginTop: 1, marginBottom: 1 }}>
        <Image source={imageSource} style={{ width: 103, height: 98, borderRadius: 24 }} />
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{productName}</Text>
        <Text style={{ color: '#a7a7a7' }}> {productNum} </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#4EC581' }}>{productPrice}</Text>
        <View style={{ position: 'absolute', bottom: 10, right: 10, flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ color: '#FF9416' }}>{productReview}</Text>
            <Image source={require('./assets/img/star.png')} style={{ width: 20, height: 20 }} />
        </View>
    </TouchableOpacity>
);

const Food = () => (
    <SafeAreaView style={{ padding: 10 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ProductView imageSource={require('./assets/img/pro01.png')} productName="Cam" productNum="1kg" productPrice="$17.02" productReview="4.6" />
            <ProductView imageSource={require('./assets/img/pro02.png')} productName="Táo" productNum="1kg" productPrice="$30.02" productReview="4.3" />
            <ProductView imageSource={require('./assets/img/pro2.jpg')} productName="Quýt" productNum="1.5kg" productPrice="$17.02" productReview="4.6" />
            <ProductView imageSource={require('./assets/img/pro01.png')} productName="Cam" productNum="1kg" productPrice="$17.02" productReview="3.6" />
            <ProductView imageSource={require('./assets/img/pro02.png')} productName="Táo" productNum="1kg" productPrice="$30.02" productReview="1.6" />
            <ProductView imageSource={require('./assets/img/pro2.jpg')} productName="Quýt" productNum="1kg" productPrice="$17.02" productReview="4.6" />
            {/* Thêm các sản phẩm khác nếu cần */}
        </ScrollView>
    </SafeAreaView>
);

export default Food;
