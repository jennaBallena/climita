import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Alert } from 'react-native'
import { Icon } from 'react-native-elements'
import Card from '../../utils/Card';
import Add from '../../utils/Add';

export default function Home({navigation}) {
    const [ciudad, setCiudad] = useState([
        { name: 'Aguascalientes'},
        { name: 'Baja California'},
        { name: 'Baja California Sur'},
        { name: 'Campeche'},
        { name: 'Coahuila'},
        { name: 'Colima'},
        { name: 'Chiapas'},
        { name: 'Chihuahua'},
        { name: 'Durango'},
        { name: 'Distrito Federal'},
    ])

    const onDelete = (name) => {
        setCiudad((prevCiudad) => {
            return prevCiudad.filter(ciudad => ciudad.name != name)
        })
     }
 
     const submit = (name) => {
         setCiudad((prevCiudad) => {
             return [{name: name},
             ...prevCiudad];
         })
     }


    return (
        <View style={ styles.background }>
            <View style={ styles.container }>
                <View style={styles.contentContainer}>
                    <Add submit={submit}/>
                </View>
            </View>
            <View style={styles.flatContainer}>
                <View style={styles.list}>
                            <FlatList
                                keyExtractor={(item) => item.name}
                                data= {ciudad}
                                renderItem={({ item }) => (
                                <TouchableOpacity 
                                    onLongPress={() => Alert.alert('Eliminar ciudad', '¿Estas seguro de eliminar esta ciudad?',[{ text: 'Cancel', style: 'cancel'},
                                    { text: 'Sí', onPress: () => onDelete(item.name) }]) }
                                    onPress={() => navigation.navigate('Detalles', {name: item.name})} >
                                <Card item={item} onDelete={onDelete}><Text> {item.name}</Text></Card>
                                </TouchableOpacity> 
                            )}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#E8E8E8',
        height: '100%'
    },
    container:{
        borderColor: '#FFF',
        backgroundColor: '#282F44',
        height: 80,
        width: '100%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        position: 'absolute',
        zIndex: -1
    },
    contentContainer: {
        height: '100%',
        marginTop: 40,
        paddingBottom: 50
    },
    list:{
        margin: 10
    },
    flatContainer:{
        marginTop: 120
    }
})
