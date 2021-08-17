import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import { Icon } from 'react-native-elements'

export default function Card(props) {

    const { item, onDelete, navigation } = props

    return (
        <View style={styles.card} >
            <View style={styles.cardContent}>{props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#FFF',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 6,
        marginVertical: 6,
        height: 100
    },
    cardContent:{
        marginHorizontal: 18,
        marginVertical: 10,
    }
})
