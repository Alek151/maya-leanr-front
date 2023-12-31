import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
 
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Button1Screen = () => {
  const [buttonsEnabled, setButtonsEnabled] = useState(false);
  const navigation = useNavigation();

  const handleBocinaPress = () => {
    setButtonsEnabled(true);
  };

  const handleVocalesPress = () => {
    navigation.navigate('Vocales'); 
  };

  const handleAbecedarioPress = () => {
    navigation.navigate('Abecedario'); 
  };

  const handleNumerosPress = () => {
    navigation.navigate('numeros'); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.paypalButton]}
        onPress={handleBocinaPress}
      >
        <FontAwesome name="volume-up" size={windowWidth > 600 ? 64 : 32} color="white" />
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.enabledButton]}
          disabled={!buttonsEnabled}
          onPress={handleVocalesPress}
        >
          <Text style={[styles.buttonText, { fontSize: windowWidth > 600 ? 28 : 16 }]}>Vocales</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.enabledButton]}
          disabled={!buttonsEnabled}
          onPress={handleAbecedarioPress}
        >
        
          <Text style={[styles.buttonText, { fontSize: windowWidth > 600 ? 28 : 16 }]}>Abecedario</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.enabledButton]}
          disabled={!buttonsEnabled}
          onPress={handleNumerosPress}
        >
        
          <Text style={[styles.buttonText, { fontSize: windowWidth > 600 ? 28 : 16 }]}>Numeros</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: windowWidth > 600 ? 40 : 20, // Ajusta el margen superior para tablets
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    paddingVertical: windowWidth > 600 ? 60 : 40, // Aumenta el espacio vertical para tablets
    paddingHorizontal: windowWidth > 600 ? 60 : 40, // Aumenta el espacio horizontal para tablets
    borderRadius: 10, // Establece un radio de borde fijo para botones cuadrados
    elevation: 5,
  },
  paypalButton: {
    backgroundColor: '#0070BA', // Cambia el color de fondo de los botones de PayPal
  },
  enabledButton: {
    backgroundColor: '#4CAF50', // Cambia el color de fondo de los botones habilitados
    opacity: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: windowWidth > 600 ? 24 : 16, // Aumenta el tamaño de la fuente para tablets
  },
});

export default Button1Screen;
