import React, { useState, useEffect } from 'react'
import { Button, ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList, ScrollView, Modal } from 'react-native'
import { Icon } from 'react-native-elements'
import Card from '../../utils/Card';
import Add from '../../utils/Add';

export default function DashBoard({navigation}) {
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
        <View backgroundColor='#282F44'>
            <ImageBackground 
                source={{uri: "https://preview.redd.it/s0l4mtzpcer51.jpg?width=1680&format=pjpg&auto=webp&s=48b266fee2d47328d1b88982d24ffa095a7285af"}}
                //source={{uri: "https://www.begindot.com/wp-content/uploads/2018/07/Minimalism-Mountains-Lighthouse-Clouds-L1-Wallpaper.jpg"}}
                style={styles.imageBackground}>

                    <View style={styles.container}>

                        <Add submit={submit}/>
                            <View style={styles.list}>
                                <FlatList
                                keyExtractor={(item) => item.name}
                                data= {ciudad}
                                renderItem={({ item }) => (
                                     <TouchableOpacity onPress={() => navigation.navigate('Detalles', {name: item.name})}>
                                        <Card item={item} onDelete={onDelete} ><Text > {item.name} </Text></Card>
                                    </TouchableOpacity> 
                                )}
                                />
                            </View>
                    </View>
            </ImageBackground>   
        </View>    
    );
}


const styles = StyleSheet.create({
    imageBackground:{
        justifyContent: 'center'
    },
    container:{
        height: '100%',
        padding: 2
    },
    list:{
        marginTop: 10
    },
    modalToggle:{
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#F7A440',
        alignSelf: 'center',
        borderColor: '#F7A440',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    modalClose:{
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent:{
        flex: 1
    }
})