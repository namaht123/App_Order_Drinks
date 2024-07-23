import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Setting = () => {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <TouchableOpacity style={styles.back} onPress={back}>
                    <Image source={require('./assets/img/left.png')} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 18, justifyContent: 'center' }}>Cart</Text>
            </View>
        </View>
    )
}

export default Setting

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