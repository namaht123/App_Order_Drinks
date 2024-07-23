import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
function Details_Product() {
    const navigation = useNavigation();
    const addToCart = () => {
        navigation.navigate('Cart');
    };

    const back = () => {
        navigation.navigate('MainActivity');
    }

    return (
        <View style={styles.container}>
            <View>
                <Image source={require('./assets/img/pro01.png')} style={{ width: '100%', height: 240, zIndex: 0 }} />
                <TouchableOpacity style={styles.back} onPress={back}>
                    <Image source={require('./assets/img/left.png')} style={styles.backIcon} />
                </TouchableOpacity>
            </View>

            <View style={styles.informationProduct}>
                <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView
                        horizontal={false}>
                        <View style={{ backgroundColor: '#fff', borderRadius: 24, margin: 15, padding: 10, elevation: 5 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 }}>Cam</Text>
                            <Text style={{ textAlign: 'center', color: '#A7A7A7', marginBottom: 15 }}> $ 17.00/kg</Text>
                            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                <Text style={{ flex: 1, textAlign: 'center' }}>$17.02</Text>
                                <Text style={{ flex: 1, textAlign: 'center' }}>14 Calories</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', flex: 1, alignContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                                    <Text>4.6 </Text>
                                    <Image source={require('./assets/img/star.png')} style={{ width: 14, height: 14 }} />
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
                                <TouchableOpacity style={{ backgroundColor: '#4EC581', width: 24, height: 24, borderRadius: 7, alignItems: 'center' }}>
                                    <Text style={{ color: '#fff' }}>-</Text>
                                </TouchableOpacity>
                                <TextInput style={{ width: 62, height: 24, borderRadius: 8, borderWidth: 1, borderColor: '#41AB6F', textAlign: 'center', marginLeft: 5, marginRight: 5 }}> 0 </TextInput>
                                <TouchableOpacity style={{ backgroundColor: '#4EC581', width: 24, height: 24, borderRadius: 7, alignItems: 'center' }}>
                                    <Text style={{ color: '#fff' }}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ backgroundColor: '#fff', borderRadius: 24, elevation: 5, marginLeft: 15, marginRight: 15 }}>
                            <View style={{ flexDirection: 'row', paddingLeft: 50 }}>
                                <View style={{ width: 90, height: 50, backgroundColor: '#fff', borderRadius: 100, justifyContent: 'center', position: 'absolute', zIndex: 1, left: 30, top: 20 }}>
                                    <Text style={{ textAlign: 'center' }}> Details </Text>
                                    <Image source={require('./assets/img/star.png')} style={{ width: 14, height: 14, marginLeft: 'auto', marginRight: 'auto' }} />
                                </View>
                                <Text style={{ position: 'absolute', zIndex: 1, top: 30, left: 150 }}> Review ( 4.6 ) </Text>
                            </View>
                            <View style={{ borderRadius: 24, backgroundColor: '#4EC581', paddingLeft: 10, paddingRight: 10, height: 200, position: 'relative', marginTop: 50 }}>
                                <Text style={{ color: '#fff', marginTop: 25 }}>
                                    dfggrg thtrhtrh htjrtr hthte herer hgr gre greghe fvf ukyuy he eter hthj jtk yhth  b trh yj rht dfbf erh ehr ehe bfd dgh trh j kyukil i py te rgeg erg ehg  be hert wef we fsdg hrer5 th rtu u7 fg fg we dfb db f fdhg fnd s j m bd vawew w h jy ku mh ngf fdb sv sdv sdfcds vdf hr tyj ytj gh nh ngf beg e ffdv cxv  gerg bf bdf wf wf f j k jtr f ewf dqdq d f f sfds fdf dsf br th yju6 7iu jhg gh
                                </Text>
                            </View>
                        </View>

                        <View style={{ borderRadius: 24, backgroundColor: '#fff', elevation: 5, margin: 15, paddingTop: 10 }}>
                            <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>Similar products</Text>
                            <View style={{ width: '90%', height: 1, backgroundColor: '#D4D4D4', marginLeft: 'auto', marginRight: 'auto', marginTop: 5 }}></View>
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <View style={{ flex: 1, position: 'relative' }}>
                                    <Image source={require('./assets/img/pro2.jpg')} style={{ width: 144, height: 123, marginLeft: 'auto', marginRight: 'auto', marginBottom: 10, marginTop: 10 }} />
                                    <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>Banana (800g) </Text>
                                    <Text style={{ color: '#A7A7A7', marginLeft: 10 }}>$ 1.06/kg </Text>
                                    <Text style={{ color: '#41AB6F', marginLeft: 10, fontWeight: 'bold' }}>$ 1.06 </Text>
                                    <TouchableOpacity style={{ backgroundColor: '#41AB6F', height: 36, width: 32, position: 'absolute', bottom: 1, right: 1, borderTopLeftRadius: 12, borderBottomRightRadius: 12, justifyContent: 'center' }}>
                                        <Text style={{ color: '#fff', textAlign: 'center' }}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ height: '90%', width: 1, backgroundColor: '#A7A7A7' }}></View>
                                <View style={{ flex: 1, position: 'relative' }}>
                                    <Image source={require('./assets/img/pro3.jpg')} style={{ width: 144, height: 123, marginLeft: 'auto', marginRight: 'auto', marginBottom: 10, marginTop: 10 }} />
                                    <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>Chuoi (800g) </Text>
                                    <Text style={{ color: '#A7A7A7', marginLeft: 10 }}>$ 1.06/kg </Text>
                                    <Text style={{ color: '#41AB6F', marginLeft: 10, fontWeight: 'bold', marginBottom: 10 }}>$ 1.06 </Text>
                                    <TouchableOpacity style={{ backgroundColor: '#41AB6F', height: 36, width: 32, position: 'absolute', bottom: 0, right: 0, borderTopLeftRadius: 12, borderBottomRightRadius: 24, justifyContent: 'center' }}>
                                        <Text style={{ color: '#fff', textAlign: 'center' }}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
                <View style={{ flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 24, elevation: 5, padding: 20, alignItems: 'center' }}>
                    <Text style={{ flex: 1, fontSize: 20, fontWeight: 'bold' }}>$ 17.02</Text>
                    <TouchableOpacity style={{ backgroundColor: '#4EC581', borderRadius: 11, width: 152, height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={addToCart}>
                        <Image source={require('./assets/img/shopping-cart.png')} style={{ width: 25, height: 25, marginRight: 10 }} />
                        <Text style={{ color: '#fff' }}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        backgroundColor: '#fff'
    },
    back: {
        position: 'absolute',
        top: 25, // Điều chỉnh tọa độ top cho phù hợp với màn hình của bạn
        left: 20, // Điều chỉnh tọa độ left cho phù hợp với màn hình của bạn
        zIndex: 1,
    },
    backIcon: {
        width: 30,
        height: 30,
    },

    informationProduct: {
        borderRadius: 24,
        backgroundColor: '#F3F5F7',
        flex: 1,
        elevation: 5
    }
})

export default Details_Product;
