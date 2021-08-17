import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, Card } from 'react-native'

export default function Detalles({navigation, route}) {
    const { name } = route.params;

    const [info, setInfo] = useState({
        nomb: '',
        coun: '',
        temp:'' ,
        main: '',
        humi: '',
        desc: '',
        wind: '',
        temp_max: '',
        temp_min: '',
        icon: ''
    })

    useEffect ( () => {
        fetch_weather()
    },[])

    const fetch_weather = () => {
        fetch (`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=eec8305cb04abca354c0154b7b8b3560`)
        //fetch('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02')
        .then (data => data.json())
        .then(results => {
            setInfo({
                nomb: results.name + ", ",
                coun: results.sys.country,
                temp: (results.main.temp -273.15).toFixed(2), 
                main: results.weather[0].main,
                desc: results.weather[0].description,
                icon: results.weather[0].icon,
                wind: results.wind.speed + " Km/h",
                humi: results.main.humidity + "%",
                temp_max: (results.main.temp_max - 273.15).toFixed(2) + " °C",
                temp_min: (results.main.temp_min - 273.15).toFixed(2) + " °C"
        })
        })
        .catch (err => {
            alert('Verifique si existe la ciudad')
        })
    }

    return (
        <View style={styles.container}>

            <View style={styles.temperatureView}>
                <Text style={styles.temperatureText}>{info.temp}</Text>
                <Text style={[styles.temperatureText, {fontSize: 14}]}>°C</Text>
            </View>

                <Text style={styles.nameCity}>{[info.nomb, info.coun]}</Text>
        
            <View styles={styles.cardContainer}>
                <View style={styles.cardHolder}>
                    <Image source={{uri: 'http://openweathermap.org/img/wn/'+info.icon+'@2x.png'}}
                        style={styles.cardIcon}/>
                    <Text style={styles.textCard}>{info.main}</Text>
                    <Text style={styles.textCard}>{info.desc}</Text>
                </View>
            </View>

            <View style={styles.info}>
                <Text style={styles.infoText}>Información adicional:</Text>

                <View style={styles.addtionalInfo}>

                    <View style={styles.card}>
                        <Text style={styles.text}>Temperatura máxima</Text>
                        <Text style={[styles.text, {color: '#e0e0e0'}]}>{info.temp_max}</Text>
                    </View>

                    <View style={styles.cardA}>
                        <Text style={styles.text}>Temperatura miníma</Text>
                        <Text style={[styles.text, {color: '#e0e0e0'}]}>{info.temp_min}</Text>
                    </View>

                    <View style={styles.cardB}>
                        <Text style={styles.text}>Viento</Text>
                        <Text style={[styles.text, {color: '#e0e0e0'}]}>{info.wind}</Text>
                    </View>

                    <View style={styles.cardD}>
                        <Text style={styles.text}>Humedad</Text>
                        <Text style={[styles.text, {color: '#e0e0e0'}]}>{info.humi}</Text>
                    </View>
                    
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#282F44',
        height:'100%',
        flex: 1,
        alignItems: 'center'
    },
    temperatureView: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
    },
    temperatureText: {
        color: '#FFF',
        fontSize: 50,
    },
    nameCity:{
        color: '#FFF'
    },
    cardContainer:{
        margin: 10,
        alignItems: 'center',
    },
    cardHolder:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 10,
        width: 230,
        height: 160,
        backgroundColor: '#CC6E30'
    },
    textCard:{
        color: 'white',
        fontSize: 20,
    },
    cardIcon:{
        height:"50%",
        width:"50%"
    },
    info: {
        alignItems: 'center',
        borderRadius: 20,
        width: 330,
        height: 220,
        backgroundColor: 'rgba(255,255,255,0.4)',
    },
    infoText: {
        color: 'white',
        margin: 15,
        fontSize: 18,
        fontWeight: 'bold',
    },
    addtionalInfo:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    card:{
        alignItems: 'center',
        margin: 5,
        minWidth: 150,
    },
    text:{
        color: '#F1F1F1',
        margin: 5,
        marginLeft: 15,
        fontSize: 14,
    },
    cardA:{
        alignItems: 'center',
        margin: 5,
        minWidth: 150,
    },
    cardB:{
        alignItems: 'center',
        margin: 5,
        minWidth: 150,
    },
    cardD:{
        alignItems: 'center',
        margin: 5,
        minWidth: 150,
    }
})
