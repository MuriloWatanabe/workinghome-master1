import React from 'react';
import { Text, TextInput, StyleSheet, View, Image, } from 'react-native';
import { Button, Card } from 'react-native-paper';

import Enviar from '../../icons/enviar-mensagem.png'
import Icone from '../../icons/imagem-do-usuario-com-fundo-preto.png'
import Google from '../../icons/google.png'
import Facebook from '../../icons/facebook.png'

export default function Chat ({ navigation }) {
  return (
    <View style={styles.container}>
          <Image source={Icone} style={styles.icone}></Image>
          <View >
        <View style={styles.barmen}>
          <TextInput type="email" name="fale" placeholder="bla" style={styles.text}/>
          <Button mode="elevated" onPress={() => navigation.navigate('Home')} style={styles.botao}>
          <Image source={Enviar} style={styles.ger}></Image>
          </Button>
        </View>
        </View>
      <View>
        <TextInput></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: 'white',
  },

  image:{
    paddingLeft: 10,
    height: 80,
    width: 80,
  },
icone:{
  width: 20,
  height:10,
},
  card: {
    backgroundColor: '#FFFFFF',
    width: '50%',
    height: '50%',
    padding: 10,
    marginTop: 10,
  },

  titleContainer: {
    alignItems: 'center',
  },

  title: {
    fontWeight: 'bold',
    color: '#FF5F0F',
  },

  input: {
    backgroundColor: 'white',
    borderRadius: 12,
    margin: 10,
    width: '100%',
  },

  botao: {
    width: 10,
  },

  link: {
    color: '#FF5F0F',
  },

  barmen: {
  backgroundColor: 'blue',
  color:'black',
  justifyContent: "space-evenly",
  flexDirection: "row",
  height: 40,
  alignItems: "center",
  marginTop:732,
},
  text:{ 
    backgroundColor: 'white',
    borderRadius: 12,
    margin: 10,
    width: 200,
  },

  bola: {
    width: "10%",
    borderRadius: 20,
  },
});