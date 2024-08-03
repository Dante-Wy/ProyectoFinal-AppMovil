import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RegistrerScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Ya funciona</Text>
    </View>
  );
};

//style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RegistrerScreen; // Exportación por defecto
