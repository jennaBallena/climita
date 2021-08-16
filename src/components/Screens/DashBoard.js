import React, { useState, useEffect } from 'react'
import { Button, ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList, ScrollView, Modal } from 'react-native'
import { Icon } from 'react-native-elements'
import Card from '../../utils/Card';
import Add from './Add';

export default function DashBoard({navigation}) {
    const [modalOpen, setModalOpen] = useState(false)
    //const { navigation } = props;
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
                        <View style={styles.content}>
                            <Modal visible={modalOpen}>
                                <View style={styles.modal}>
                                <Icon reverse name='close' size={24} type='font-awesome'onPress={() => setModalOpen(false)}/>
                                    <Text>heloo</Text>
                                </View>
                            </Modal>

                            <Icon reverse name='plus' size={24} type='font-awesome'onPress={() => setModalOpen(true)}/>
                            
                            <View style={styles.list}>
                                <FlatList
                                data= {ciudad}
                                renderItem={({ item }) => (
                                     <TouchableOpacity onPress={() => navigation.navigate('Detalles', {name: item.name})}>
                                        <Card item={item} onDelete={onDelete} ><Text > {item.name} </Text></Card>
                                    </TouchableOpacity> 
                                )}
                                />
                            </View>
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
        height: '100%'
    },
    content:{
        padding: 2
    },
    list:{
        marginTop: 10
    }
})