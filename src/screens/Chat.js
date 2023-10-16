import React from 'react';
import { Text, TextInput, StyleSheet, View, Image, } from 'react-native';
import { Button, Card } from 'react-native-paper';

import Logo from '../../icons/logoazultrans.png'
import Google from '../../icons/google.png'
import Facebook from '../../icons/facebook.png'

export default function Chat ({ navigation }) {
  return (
    <View style={styles.container}>
        <Image source={Logo} style={styles.image}>
        </Image>
        <View style={styles.titleContainer}>
        </View>
      <Card style={styles.card}>
        
        <View >
          <TextInput type="email" name="fale" style={styles.input}/>
        </View>
        <View style={{alignItems: 'center',}}>
          <Button mode="elevated" onPress={() => navigation.navigate('Home')} style={styles.botao}>
            <Text style={{color: '#FF5F0F',}}>Enviar</Text>
          </Button>
        </View>
      </Card>
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