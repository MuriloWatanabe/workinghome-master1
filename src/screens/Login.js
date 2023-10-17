import React from 'react';
import { Text, TextInput, StyleSheet, View, Image, } from 'react-native';
import { Button, Card } from 'react-native-paper';

import Logo from '../../icons/logoazultrans.png'
import Google from '../../icons/google.png'
import Facebook from '../../icons/facebook.png'

export default function Cadastro ({ navigation }) {
  return (
    <View style={styles.container}>
        <Image source={Logo} style={styles.logo}>
        </Image>
        <View style={styles.titleContainer}>
          <Text 
            style={{  
              fontWeight: 'bold',
              fontSize: 26,
              color: '#3B8AEB',
              marginTop: 15,
              marginBottom: 15,
            }}> 
              Login 
          </Text>
        </View>
      <Card mode='contained' style={styles.card}>
        <View>
          <TextInput type="email" name="email" placeholder='  Email:' placeholderTextColor="#9F9F9F" style={styles.input}/>
          <TextInput type="password" name="senha" placeholder='  Senha:' placeholderTextColor="#9F9F9F" style={styles.input}/>
        </View>
          <View style={{alignItems: 'center', paddingTop: 5, paddingBottom: 15,}}>
            <Text style={{color: '#837F7F',}}>---------- Outras maneiras de Login ----------</Text>
          </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly',}}>
          <Image source={Facebook} style={{width: 45,height: 45,}}>
          </Image>
          <Image source={Google} style={{width: 45,height: 45,}}>
          </Image>
        </View>
        <View style={{alignItems: 'center', margin: 10, }}>
          <Text style={{color: '#837F7F'}}>
            Não possui conta?
            <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
              Clique Aqui
            </Text> 
          </Text>
        </View>
        <View style={{alignItems: 'center',}}>
          <Button mode="elevated" onPress={() => navigation.navigate('Home')} style={styles.botao}>
            <Text style={{color: '#FFF',}}>Enviar!</Text>
          </Button>
        </View>
      </Card>
      <View style={styles.footer}>
        <Text style={{fontSize: 12, color: '#3B8AEB',}}>
          Termos de privacidade          
        </Text>
        <Text style={{fontSize: 10, color: '#3B8AEB',}}>
          @2023 Working House
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },

  logo: {
    height: 180,
    width: 180,
  },

  card: {
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderColor: '#3B8AEB',
    borderWidth: 2,
    width: '80%',
    padding: 10,
    marginTop: 10,
    marginBottom: 40,
  },

  titleContainer: {
    alignItems: 'center',
    width: '80%',
  },

  input: {
    backgroundColor: '#EEEEEE',
    borderRadius: 12,
    margin: 10,
    width: '90%',
  },

  botao: {
    width: 130,
    backgroundColor: '#3B8AEB',
    marginBottom: 10,
  },

  link: {
    color: '#3B8AEB',
  },

  footer: {
    padding: 12,
    alignItems: 'center',
  },
});