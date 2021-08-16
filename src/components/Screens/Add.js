import React, { useState } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'

export default function Add({submit}) {
    const [ add, setAdd] = useState('');

    const añadir = (val) => {
        setAdd(val)
    }
    return (
        <View style={styles.addCityContainer}>
                <TextInput placeholder='Agregar ciudad' placeholderTextColor='#707070' style={styles.input}
                    onChangeText = {añadir}/>
                
                <TouchableOpacity onPress={() => submit(add)}>
                    <Icon reverse name='plus' size={20} type='font-awesome'color='#558776'/>
                </TouchableOpacity >
        </View>
    )
}

const styles = StyleSheet.create({
    addCityContainer:{
        backgroundColor: '#F7A440',
        height: 80,
        paddingLeft: 20,
        paddingRight: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    input:{
        backgroundColor: '#FFF',
        width: '80%',
        borderRadius: 15,
        color: '#000',
        paddingHorizontal: 15
    }
})
