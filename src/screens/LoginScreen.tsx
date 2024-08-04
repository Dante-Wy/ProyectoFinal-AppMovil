import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RegistrerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StoryBoock's</Text>
      <Text>Nombre de Usuario:</Text>

      <Text>Contraseña</Text>

    </View>
  );
};

//style
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34495e',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  title: {
    color: '#b03a2e',
    fontSize: 46,
    
  },
  input: {
    color: 'withe',
  },
  
});

export default RegistrerScreen;
