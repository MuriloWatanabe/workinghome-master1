import React from 'react';
import {  TextInput, StyleSheet, View, Image, TouchableOpacity, } from 'react-native';
import {  Card } from 'react-native-paper';

import Enviar from '../../icons/enviar-mensagem.png'
import Icone from '../../icons/imagem-do-usuario-com-fundo-preto.png'


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
            <Image source={Enviar} style={{height: 30, width:30}}></Image>
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
    width: 50,
    height: 50,
    backgroundColor:"#CEC8C8",
    margin: 60,
    marginLeft:10,
    borderRadius:25,
    alignItems: "center",
    justifyContent:"center"
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

});