import React from 'react';
import { Text, TextInput, StyleSheet, View, Image, TouchableOpacity, } from 'react-native';
import { Button, Card } from 'react-native-paper';

import Enviar from '../../icons/enviar-mensagem.png'
import Icone from '../../icons/imagem-do-usuario-com-fundo-preto.png'
import Google from '../../icons/google.png'
import Facebook from '../../icons/facebook.png'


export default function Chat ({ navigation }) {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.icone}>
           <Image source={Icone} style={styles.icone}></Image>
        </TouchableOpacity>
            </Card>
          <View >
         <View style={styles.barmen}>
            <TextInput type="email" name="fale" placeholder="Enviar mensagem" style={styles.text}/>      
          <View>
         <TouchableOpacity onPress={() => navigation.navigate("Chat")} style={styles.botao}>
            <Image source={Enviar}></Image>
          </TouchableOpacity>
       </View>
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

icone:{
  width: 60,
  height:60,
  marginLeft: 5,
},

  input: {
    backgroundColor: 'white',
    borderRadius: 12,
    margin: 10,
    width: '100%',
  },

  botao: {
    width: 10,
    height: 10,
    backgroundColor:"#CEC8C8",
    margin: 60,
    marginLeft:10,
  },

  barmen: {
  backgroundColor: 'white',
  justifyContent: "space-evenly",
  flexDirection: "row",
  height: 45,
  alignItems: "center",
  marginTop:640,
},

  text:{ 
    backgroundColor: '#CEC8C8',
    borderRadius: 10,
    margin: 10,
    width: 200,
    height: 30,
  },

  card:{ 
    backgroundColor: "#3B8AEB",
    width: '100%',
    height: '10%',
    marginTop: -10,
    marginBottom: 23,
    borderRadius: -1,
  },
  Enviar:{
    width: 2,
    height: 1,
  },

});