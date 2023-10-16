import React from 'react';
import { Text, TextInput, StyleSheet, View, Image, } from 'react-native';
import { Button, Card } from 'react-native-paper';

import Logo from '../../icons/logoazultrans.png'
import Google from '../../icons/google.png'
import Facebook from '../../icons/facebook.png'

export default function Cadastro ({ navigation }) {
  return (
    <View style={styles.container}>
        <Image source={Logo} style={styles.image}>
        </Image>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> Login </Text>
        </View>
      <Card style={styles.card}>
        
        <View>
          <TextInput type="email" name="email" placeholder='Email:' style={styles.input}/>
          <TextInput type="password" name="senha" placeholder='Senha:' style={styles.input}/>
        </View>
        <View>
          <Image>
          </Image>
          <Image>
          </Image>
        </View>
        <View style={{alignItems: 'center',}}>
          <Button mode="elevated" onPress={() => navigation.navigate('Home')} style={styles.botao}>
            <Text style={{color: '#FF5F0F',}}>Enviar</Text>
          </Button>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: 'white',
  },

  image:{
    height: 180,
    width: 180,
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
    backgroundColor: '#EEEEEE',
    borderRadius: 12,
    margin: 10,
    width: '90%',
  },

  botao: {
    width: 130,
    backgroundColor: '#6304AE',
  },

  link: {
    color: '#FF5F0F',
  },
});