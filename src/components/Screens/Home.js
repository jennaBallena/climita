import React, { useState, useEffect } from 'react'
import { Button, ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import {Picker} from '@react-native-picker/picker';

export default function Home (props) {
    const { navigation } = props;
    const [ciudad, setCiudad] = useState('bcs');
    const [info, setInfo] = useState({
        nomb: '',
        temp:'' ,
        main: '',
        humi: '',
        desc: '',
        icon: ''
    })

    useEffect ( () => {
        fetch_weather()
    },[])

    const fetch_weather = () => {
        fetch (`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=eec8305cb04abca354c0154b7b8b3560`)
        //fetch('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02')
        .then (data => data.json())
        .then(results => {
            setInfo({
                nomb: results.name,
                temp: (results.main.temp -273.15).toFixed(2)+" °C", 
                main: results.weather[0].main,
                desc: results.weather[0].description,
                icon: results.weather[0].icon
        })
        })
        .catch (err => {
            alert(err.message)
        })
    }
    return (
        <View>
            <ImageBackground 
                source={{uri: "https://preview.redd.it/s0l4mtzpcer51.jpg?width=1680&format=pjpg&auto=webp&s=48b266fee2d47328d1b88982d24ffa095a7285af"}}
                //source={{uri: "https://www.begindot.com/wp-content/uploads/2018/07/Minimalism-Mountains-Lighthouse-Clouds-L1-Wallpaper.jpg"}}
                style={styles.imageBackground}>

            <View style={styles.addCityContainer}>
                <TextInput placeholder='Agregar ciudad' placeholderTextColor='#D1CEBD' style={styles.input}/>
                <TouchableOpacity style={styles.addCityButton}>
                    <Icon reverse name='plus' size={20} type='font-awesome'color='#F7A440'/>
                </TouchableOpacity>
            </View>

            <View style = {pickerSelectStyles.inputAndroid}>
            <Picker
                  selectedValue = {ciudad}
                  onValueChange={(itemValue, itemIndex) => setCiudad(itemValue)}
                  onPress={fetch_weather}>
                  <Picker.Item label="Seleccione una opción..."/>
                  <Picker.Item label="Veracruz" value="ver"/>
                  <Picker.Item label="Sonora" value="son"/>
                  <Picker.Item label="Baja California sur" value="bcs"/>
                  <Picker.Item label="San Luis Potosi" value="slp"/>
            </Picker>
            </View>

            <View style={styles.box}>
                <View style={styles.boxHolder}>
                   <Image source={{uri: 'http://openweathermap.org/img/wn/'+info.icon+'@2x.png'}}
                        style={styles.imageHeader}/>
                    <View>
                        <Text style={styles.textDetails}>{info.nomb}</Text>
                        <Text style={styles.textDetails}>{info.temp}</Text>
                        <Text style={styles.textDetails}>{info.main}</Text>
                        <Text style={styles.textDetails}>{info.desc}</Text>
                    </View>
                </View>
            </View >

            <Button title='Más detalles' />

           </ImageBackground>
        </View>
        
    );
}

const styles = StyleSheet.create({
    imageBackground:{
        height: '100%',
        width: '100%',
    },
    addCityContainer:{
        height: 100,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    input:{
        width: '80%',
        borderColor: '#FFF',
        borderWidth: 1,
        borderRadius: 15,
        color: '#FFF',
        paddingHorizontal: 15
    },
    addCityButton:{
        marginLeft:"5%",
        height:"35%",
        width:"8%",
        justifyContent:"center",
        alignItems:"center"
      },
    box:{
        height: 250,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    boxHolder:{
        height: '80%',
        width: '90%',
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 15,
        alignItems: 'center',
        flexDirection: 'row'
    },
    imageHeader:{
        height:"80%",
        width:"50%"
    },
    textDetails:{
        fontSize:20,
        color:"#282F44",
        marginLeft:"5%",
        marginTop:"3%"
    }
})

const pickerSelectStyles = StyleSheet.create({
    inputAndroid:{
        marginEnd: 15,
        marginStart: 15,
        borderRadius: 8,
        backgroundColor: 'rgba(255,255,255,0.5)'
     } 
});