import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View , TouchableOpacity } from 'react-native';
import { validateEmail } from '../../utils/Validation';
import Firebase from '../../utils/Firebase';

export default function LoginForm(props) {
    const { changeForm } = props;
    const [formData, setFormData] = useState(defaultValue());
    const [formError, setFormError] = useState({});

    const login = () => {
        let errors = {};
        if(!formData.email || !formData.password){
            if(!formData.email) errors.email = true;
            if(!formData.password) errors.password = true;
            console.log('Error A: Vacío campo')
        } else if (!validateEmail(formData.email)){
            errors.email = true;
            console.log('Error B: Email inválido')
        } else {
            Firebase
            .auth()
            .signInWithEmailAndPassword(formData.email, formData.password)
            .catch(() => {
                setFormError({ email: true, password: true });
            });
        }
        setFormError(errors);
     };

    const onChange = (e, type) => { setFormData({...formData, [type]: e.nativeEvent.text}); };

    return (
        <>
        <TextInput  style = {[styles.textInput, formError.email && styles.errorEmpty]}
            placeholder='Correo electrónico' placeholderTextColor='#D1CEBD'
            onChange={ (e) => onChange(e, 'email') }/>

        <TextInput  style = {[styles.textInput, formError.password && styles.errorEmpty]}
            placeholder='Contraseña' placeholderTextColor='#D1CEBD' secureTextEntry={true}
            onChange={ (e) => onChange(e, 'password') }/>

        <TouchableOpacity onPress={login} style={styles.boton}>
            <Text style={styles.btnText}>Inicia sesión</Text>
        </TouchableOpacity>


            <TouchableOpacity onPress={changeForm}>
                <Text style={[styles.btnText, styles.register]}>¿No tienes cuenta? Regístrate</Text>
            </TouchableOpacity>
        </>
    );
}

function defaultValue() { return { email: '', password: '' }; }

const styles = StyleSheet.create({
    btnText:{
        color: '#FFF',
        fontSize: 16,
    },
    textInput: {
        height: 50,
        color: '#FFF',
        width: '80%',
        marginBottom: 25,
        backgroundColor: '#558776',
        paddingHorizontal: 20,
        borderRadius: 50,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#558776'
    },
    boton:{
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#F7A440',
        backgroundColor: '#F7A440',
        height: 50,
        width: '40%',
    },
    register: {
        marginTop: 30
    },
    errorEmpty:{
        borderColor: '#940c0c',
        borderWidth: 1.3    
    }
});
