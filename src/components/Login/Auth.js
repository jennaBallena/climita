import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const changeForm = () => {
        setIsLogin(!isLogin);
    };

    return(
        <KeyboardAwareScrollView>
            <View style={styles.view}>            
                <Image style={styles.logo} source={require('../../assets/presentacion.png')}/>
                <Text style={styles.title}>Climita</Text>
                { isLogin ? <LoginForm changeForm={changeForm}/> : <RegisterForm changeForm={changeForm}/> }
    
            </View>
        </KeyboardAwareScrollView>
    );
}
const styles = StyleSheet.create({
    view: {
        height: '100%',
        alignItems: 'center'
    },
    logo: {
        borderColor: '#FFF',
        width: '90%',
        height: 215,
        marginTop: 15,
    },
    title: {
        marginTop: 10,
        marginBottom: 20,
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
});