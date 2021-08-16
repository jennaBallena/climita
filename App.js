import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, View, StatusBar, TouchableOpacity, LogBox } from 'react-native';
import firebase from './src/utils/Firebase';
import 'firebase/auth';
import Auth from './src/components/Login/Auth';
import { NavigationContainer  } from '@react-navigation/native';
import Navigation from './src/Navigation/Navigation';

LogBox.ignoreAllLogs();

export default function App() {
    const [user, setUser] = useState(undefined);

    useEffect (() => {
        firebase.auth().onAuthStateChanged ((response) =>{
            setUser(response);
        });
    }, []);

    if (user === undefined) return null;

    return(
       <>
       <StatusBar barStyle="light-content"/>
            <SafeAreaView style = {styles.background}>
                {user ? <LogOut/> : <Auth/>}
            </SafeAreaView>
       </>
    );
}

function LogOut() {
    const out = () => {
        firebase.auth().signOut();
    }
    return(
        <NavigationContainer>
            <Navigation out={out}/>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#282F44',
        height: '100%'
    }
})