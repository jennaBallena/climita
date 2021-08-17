import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detalles from '../components/Screens/Detalles';
import Home from '../components/Screens/Home';
import { Icon } from 'react-native-elements';

const Stack = createNativeStackNavigator();

export default function Navigation(props) {
    const {out} = props;
    
    return (
        <Stack.Navigator>

            <Stack.Screen name='Home' component={Home}
             options={{title:'Inicio', headerStyle:{ backgroundColor: '#282F44'}, headerTintColor: '#FFF',
             headerRight: () => ( 
                <TouchableOpacity  onPress={out}>
                    <Icon name='sign-in' type='font-awesome'color='#FFF'/>
                </TouchableOpacity> )}}/>

            <Stack.Screen name='Detalles' component={Detalles}
             options={{title:'Detalles', headerStyle:{ backgroundColor: '#282F44'}, headerTintColor: '#FFF'}}/>

        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#D1CEBD',
        textAlign: 'center'
        }
})