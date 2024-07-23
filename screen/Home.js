import React, { useCallback, useState } from 'react'
import { Image, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Drink from './Drink'
import FilterProduct from './FilterProduct'
import Food from './Food'
import RandomProduct from './RandomProduct'
const Home = () => {
    const [reloading, setreloading] = useState(false)
    // hàm xử lý quá trình reload
    const onReload = useCallback(() => {
        setreloading(true);
        console.log("bắt đầu reload");


        setTimeout(() => {
            setreloading(false);
            console.log('Kết thúc reload');
        }, 1000);


    }, []);

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20, marginTop: 30, alignItems: 'center' }}>
                <TouchableOpacity>
                    <Image source={require('./assets/img/tool.png')} style={{ width: 30, height: 30, }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 'auto' }}>
                    <Image source={require('./assets/img/User.png')} style={{ width: 50, height: 50, }} />
                </TouchableOpacity>
            </View>
            <View style={{ width: '65%', marginLeft: 15 }}>
                <Text style={{ fontSize: 32, color: '#4EC581', fontWeight: 'bold' }}>Find the best product for you</Text>
            </View>
            <TextInput style={{ height: 50, borderRadius: 24, borderWidth: 1, borderColor: '#4EC581', margin: 15, paddingLeft: 20, backgroundColor: '#fff' }} />


            {/* ========================================================================== */}
            <FilterProduct />
            {/* ========================================================================== */}

            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView horizontal={false}
                    refreshControl={
                        <RefreshControl refreshing={reloading}
                            onRefresh={onReload} />
                    }>
                    {/* ========================================================================== */}
                    <RandomProduct />
                    {/* ========================================================================== */}

                    <Text style={{ color: '#a7a7a7', fontSize: 20, marginLeft: 15 }}>Food</Text>

                    {/* ========================================================================== */}
                    <Food />
                    {/* ========================================================================== */}

                    <Text style={{ color: '#a7a7a7', fontSize: 20, marginLeft: 15 }}> Juice </Text>

                    {/* ========================================================================== */}
                    <Drink />
                    {/* ========================================================================== */}
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F5F7'
    }
})