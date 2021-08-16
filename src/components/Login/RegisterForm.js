import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail } from '../../utils/Validation';
import Firebase from '../../utils/Firebase';

export default function RegisterForm(props) {
    const { changeForm } = props;
    const [formData, setFormData] = useState(defaultValue());
    const [formError, setFormError] = useState({});

    const register = () => {
        let errors =  {};
        //Validar vacio de campos
        if (!formData.email || !formData.password || !formData.repeatPassword){
            if (!formData.email) errors.email = true;
            if (!formData.password) errors.password = true;
            if (!formData.repeatPassword) errors.repeatPassword = true;
        }else if(!validateEmail(formData.email)){
            errors.email = true;
        }else if (formData.password !== formData.repeatPassword){
            errors.password = true;
            errors.repeatPassword = true;
        }else if (formData.password.length < 6) {
            errors.password = true;
            errors.repeatPassword = true;
        }else{
            Firebase
            .auth()
            .createUserWithEmailAndPassword(formData.email, formData.password)
            .catch (() => {
                setFormError({ email: true, password: true, repeatPassword: true})
            })
        }
        setFormError (errors);
    };

    return (
        <>
            <TextInput style={[styles.textInput, formError.email && styles.errorEmpty]}
                placeholder='Correo electrónico' placeholderTextColor='#D1CEBD'
                onChange = {(e) => setFormData({...formData, email: e.nativeEvent.text})}/>

            <TextInput style={[styles.textInput, formError.password && styles.errorEmpty]}
                placeholder='Contraseña' placeholderTextColor='#D1CEBD' secureTextEntry={true}
                onChange = {(e) => setFormData({...formData, password: e.nativeEvent.text})}/>

            <TextInput style={[styles.textInput, formError.repeatPassword && styles.errorEmpty]}
                placeholder='Repetir contraseña' placeholderTextColor='#D1CEBD' secureTextEntry={true}
                onChange = {(e) => setFormData({...formData, repeatPassword: e.nativeEvent.text})}/>

            <TouchableOpacity onPress={register}>
                <Text style={styles.btnText}>Registrarse</Text>
            </TouchableOpacity>

            <View style={styles.login}>
                <TouchableOpacity onPress={changeForm}>
                    <Text style={styles.btnText}>Inicia sesión</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

function defaultValue() { return { email: '', password: '', repeatPassword: '' }; }

const styles = StyleSheet.create({
    btnText:{
        color: '#FFF',
        fontSize: 18,
        marginTop: 20
    }, 
    textInput:{
        height: 50,
        color: '#FFF',
        width: '80%',
        marginTop: 15,
        backgroundColor: '#558776',
        paddingHorizontal: 20,
        borderRadius: 50,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#558776',
    },
    login:{
        flex: 1,
        justifyContent: 'flex-end',
    },
    errorEmpty:{
        borderColor: '#810000',
        borderWidth: 1.3    
    }
});
