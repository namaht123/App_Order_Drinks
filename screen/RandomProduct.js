import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const ProductView = ({ imageSource, productName, productNum, productPrice, productReview, star }) => {
    const navigation = useNavigation();

    const handleProductPress = () => {
        // Chuyển đến màn hình chi tiết sản phẩm hoặc màn hình mong muốn
        // Ví dụ: Chuyển đến màn hình có tên 'Details_Product'
        navigation.navigate('Details_Product');
    };

    return (
        <TouchableOpacity
            style={{ backgroundColor: '#fff', elevation: 5, borderRadius: 15, padding: 15, paddingBottom: 10, position: 'relative', marginLeft: 5, marginRight: 5, marginTop: 5, marginBottom: 5 }}
            onPress={handleProductPress}
        >
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
};

const RandomProduct = () => (
    <SafeAreaView style={{ padding: 10 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ProductView imageSource={require('./assets/img/pro4.png')} productName="Táo Canada" productNum="400gram" productPrice="$80.66" productReview="4.6" />
            <ProductView imageSource={require('./assets/img/cam1.jpg')} productName="Cam sành " productNum="1.5 kg" productPrice="$60" productReview="4.3" />
            <ProductView imageSource={require('./assets/img/quyt1.jpg')} productName="Quýt" productNum="15gram" productPrice="$100" productReview="4.6" />
            <ProductView imageSource={require('./assets/img/c1.jpg')} productName="coffe hot !" productNum="250ml" productPrice="$17.02" productReview="3.6" />
            <ProductView imageSource={require('./assets/img/c2.jpg')} productName="coffe ice" productNum="250ml" productPrice="$30.02" productReview="1.6" />
            <ProductView imageSource={require('./assets/img/pro2.jpg')} productName="Banana" productNum="1kg" productPrice="$17.02" productReview="4.6" />
            {/* Thêm các sản phẩm khác nếu cần */}
        </ScrollView>
    </SafeAreaView>
);

export default RandomProduct;
