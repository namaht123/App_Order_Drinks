import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import HistoryProduct from './HistoryProduct'

const History = () => {
    const navigation = useNavigation();
    const back = () => {
        navigation.navigate("Cart")
    }
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <TouchableOpacity style={styles.back} onPress={back}>
                    <Image source={require('./assets/img/left.png')} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 18, justifyContent: 'center' }}>History</Text>
            </View>

            {/* ============================================= */}
            <HistoryProduct/>
            {/* ============================================= */}


            <View style={{backgroundColor: '#fff', borderRadius: 24, padding: 20, position: 'absolute', bottom: 0, width: '100%'}}>
                <TouchableOpacity style={{backgroundColor: '#41AB6F', borderRadius: 5, justifyContent: 'center', height: 47, elevation: 5}}>
                    <Text style={{color: '#fff', textAlign: 'center'}}>Download</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default History

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F3F5F7',
        flex: 1,
        position: 'relative',
        paddingBottom: 90
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