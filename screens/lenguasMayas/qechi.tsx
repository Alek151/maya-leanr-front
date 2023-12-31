import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LenguaComponent from '../components/lenguaComponent';

const AprenderIdiomas = ({route}) => {
  const [responseData, setResponseData] = useState(null);
  const { id, testRoute } = route.params;
  const idUser = id;
  const lengua_id = 1;
  const lengua = testRoute;
  // Verifica si responseData es un array antes de usar map
  const categorias = [
    { id: 'frutasVerduras', nombre: 'Frutas y Verduras' },
    { id: 'profesiones', nombre: 'Profesiones' },
    { id: 'saludos', nombre: 'Saludos' },
    { id: 'numeros', nombre: 'Números' },
    { id: 'familia', nombre: 'Familia' },
    { id: 'transportes', nombre: 'Transportes' },
  ];
  
  const contenidoCategoria = {
    frutasVerduras: [
      { nombre: 'Xk´ox', tipo: 'Fruta', traduccion: 'Maíz', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Xikin', tipo: 'Fruta', traduccion: 'Banana', audio: require('../../assets/sound/audio.mp3') },
      { nombre: "K'ox", tipo: 'Verdura', traduccion: 'Calabaza', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Tumàat', tipo: 'Fruta', traduccion: 'Tomate', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Ajuw', tipo: 'Verdura', traduccion: 'Ajo', audio: require('../../assets/sound/grabacion.mp3') },
    ],
    profesiones: [
      { nombre: 'Sasil', tipo: 'Profesión', traduccion: 'Doctor(a)', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Tatawinik', tipo: 'Profesión', traduccion: 'Maestro(a)', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Tatinamit', tipo: 'Profesión', traduccion: 'Ingeniero(a)', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Achichinik', tipo: 'Profesión', traduccion: 'Agricultor(a)', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: "Tz'irinik", tipo: 'Profesión', traduccion: 'Carpintero(a)', audio: require('../../assets/sound/grabacion.mp3') },
    ],
    saludos: [
      { nombre: 'Xjòok', tipo: 'Saludo', traduccion: 'Buenos días', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Xajàaxik', tipo: 'Saludo', traduccion: 'Hola, ¿cómo estás?', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Kanik', tipo: 'Saludo', traduccion: 'Hola', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'B´anik', tipo: 'Saludo', traduccion: '¿Qué tal?', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Ri q´ij', tipo: 'Saludo', traduccion: 'Buenas noches', audio: require('../../assets/sound/grabacion.mp3') },
    ],
    numeros: [
      { nombre: 'Jun', tipo: 'Número', traduccion: 'Uno', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Kab´lajuj', tipo: 'Número', traduccion: 'Dos', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Oxlajun', tipo: 'Número', traduccion: 'Tres', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Kab´lajun chik', tipo: 'Número', traduccion: 'Cuatro', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Waqsaj', tipo: 'Número', traduccion: 'Cinco', audio: require('../../assets/sound/grabacion.mp3') },
    ],
    familia: [
      { nombre: 'Ixik', tipo: 'Familiar', traduccion: 'Madre', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Atitik', tipo: 'Familiar', traduccion: 'Padre', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Nawal', tipo: 'Familiar', traduccion: 'Hermano(a)', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Tata', tipo: 'Familiar', traduccion: 'Abuelo(a)', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Nohok', tipo: 'Familiar', traduccion: 'Tío(a)', audio: require('../../assets/sound/grabacion.mp3') },
    ],
    transportes: [
      { nombre: "K'ol", tipo: 'Transporte', traduccion: 'Caminar', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Xink´aaj', tipo: 'Transporte', traduccion: 'Bicicleta', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Bixab', tipo: 'Transporte', traduccion: 'Automóvil', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Bus', tipo: 'Transporte', traduccion: 'Autobús', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Avión', tipo: 'Transporte', traduccion: 'Avión', audio: require('../../assets/sound/grabacion.mp3') },
    ],
};


  return (
    <View style={styles.container}>
      <LenguaComponent data={contenidoCategoria} category={categorias} idUser={id} lengua={lengua} lengua_id={lengua_id}/>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AprenderIdiomas;