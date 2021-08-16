import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

export default function Card(props) {

    const { item, onDelete, navigation } = props
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>

            <TouchableOpacity onPress={() => onDelete(item.name)}>
                    <Icon reverse name='close' size={15} type='font-awesome'color='#558776'/>
                </TouchableOpacity>
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
        backgroundColor: 'rgba(255,255,255,0.5)',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardContent:{
        marginHorizontal: 18,
        marginVertical: 10,
    }
})
