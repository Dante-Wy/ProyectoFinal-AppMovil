//Se instalo las bibliotecas Formik & Yup, para mejorar la validacion de datows en el siguiente taller.
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginA: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.screnGold}>
      <View style={styles.contForm}>
        <Text style={styles.logo}>Story Book - Login</Text>
        <Text style={styles.titulo}>Nombre de Usuario:</Text>
        <TextInput style={styles.input} onChangeText={setUsername} value={username} placeholder="Ingrese su nombre de usuario"/>

        <Text style={styles.titulo}>Contraseña:</Text>
        <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Ingrese su contraseña"secureTextEntry/>

        <Button title="Ingresar"/>
      </View>
    </View>
  );
};

//nop
const styles = StyleSheet.create({
  contForm: {
    backgroundColor: '#1c2833',
    paddingTop: 60,
    paddingBottom: 60,
    paddingLeft: 40,
    paddingRight: 40,
  },
  logo: {
    color:'#f39c12',
    fontSize: 40,
    textAlign:'center',
    paddingBottom:40,
  },
  titulo: {
    color:'#fdfefe',
    fontSize:14,
    marginBottom:8,
  },
  screnGold: {
    display:'flex',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#34495e',
  },
  input: {
    height:40,
    borderColor:'gray',
    borderWidth:1,
    marginBottom:12,
    paddingHorizontal:8,
  },
});

export default LoginA;
