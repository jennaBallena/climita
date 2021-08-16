import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Detalles({navigation, route}) {
    const { name } = route.params;

    return (
        <View style={styles.background}>
            <Text>{ name }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#282F44',
        height: '100%'
    }
})
