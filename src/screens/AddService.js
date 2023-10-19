import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const ServiceRegistrationScreen = () => {
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = () => {
    // Lógica para carregar a imagem do dispositivo
  };

  const handleServiceRegistration = () => {
    // Lógica para enviar os dados do serviço para o servidor
    // Você pode enviar age, description, price e image para o backend aqui
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Idade:</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Descrição do Serviço:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />
      <Text style={styles.label}>Preço do Trabalho:</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Button title="Escolher Imagem" onPress={handleImageUpload} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Cadastrar Serviço" onPress={handleServiceRegistration} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
});

export default AddServiceScreen;
