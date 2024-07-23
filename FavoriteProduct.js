import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';

const ProductView = ({ imageSource, productName, type, productNum, productPrice, productReview, star }) => (
    <View style={{ backgroundColor: '#fff', elevation: 5, borderRadius: 15, paddingBottom: 10, marginLeft: 5, marginRight: 5, marginTop: 5, marginBottom: 5, height: 490 }}>
        <Image source={imageSource} style={{ width: '80%', height: 260, borderRadius: 24, marginLeft: 'auto', marginRight: 'auto', marginTop: 25 }} />
        <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
            <View style={{ borderTopLeftRadius: 24, borderTopRightRadius: 24, height: 121, backgroundColor: 'rgba(142, 232, 181, 0.5)', padding: 15, width: '100%' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{productName}</Text>
                <Text style={{ color: '#a7a7a7' }}>{type}</Text>
                <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
                    <Text style={{ color: '#FF9416', fontSize: 20 }}>{productReview}</Text>
                    <Image source={require('./assets/img/star.png')} style={{ width: 20, height: 20 }} />
                </View>

                
            </View>
            <View style={{width:'100%', backgroundColor: '#69DD9B', height: 150, borderBottomLeftRadius: 17, borderBottomRightRadius: 17, padding: 15}}>
                <Text style={{color: '#fff'}}> dfggrg thtrhtrh htjrtr hthte herer hgr gre greghe fvf ukyuy he eter hthj jtk yhth  b trh yj rht dfbf erh ehr ehe bfd dgh trh j kyukil i py te rgeg erg ehg  be hert wef we fsdg hrer5 th rtu u7 fg fg we dfb db f fdhg fnd s j m bd </Text>
            </View>
        </View>
    </View>
);

const FavoriteProduct = () => (
    <SafeAreaView style={{ padding: 10 }}>
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
            <ProductView imageSource={require('./assets/img/pro01.png')} productName="Cam" type="ngọt , thanh mát" productReview="4.3" />
            <ProductView imageSource={require('./assets/img/quyt1.jpg')} productName="Quýt " type="ngon , vitamin C" productReview="4.3" />
            <ProductView imageSource={require('./assets/img/c1.jpg')} productName="Coffe hot" type="sweet , nóng" productReview="4.6" />
            <ProductView imageSource={require('./assets/img/c2.jpg')} productName="Coffe ice" type="sweet" productReview="3.6" />
            <ProductView imageSource={require('./assets/img/pro4.png')} productName="táo" type="sweet" productReview="1.6" />
            <ProductView imageSource={require('./assets/img/pro2.jpg')} productName="Banana" type="sweet" productReview="4.6" />
            {/* Thêm các sản phẩm khác nếu cần */}
        </ScrollView>
    </SafeAreaView>
);

export default FavoriteProduct;
