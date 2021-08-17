import React, { useState } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'

export default function Add({submit}) {
    const [ add, setAdd] = useState('');

    const addReset = () => {
        if (add.length > 0 ) {
            submit(add)
            setAdd("")
        }
      }

    return (
        <View style={styles.addContainer}>
            <View style={styles.addCityContainer}>
                <TextInput placeholder='Agregar ciudad' placeholderTextColor='#707070' style={styles.input}
                    value={add}
                   onChange = {(e) => setAdd(e.nativeEvent.text)}/>
                
                <TouchableOpacity onPress={addReset}>
                    <Icon reverse name='plus' size={20} type='font-awesome'color='#558776'/>
                </TouchableOpacity >
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    addContainer:{
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    addCityContainer:{
        borderRadius: 6,
        backgroundColor: '#FFF',
        height: 80,
        paddingLeft: 20,
        paddingRight: 10,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    input:{
        borderWidth: 1,
        backgroundColor: '#FFF',
        width: '80%',
        borderRadius: 15,
        color: '#000',
        paddingHorizontal: 15
    }
})
