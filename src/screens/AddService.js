import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Button,
  Platform,
  ScrollView, // Importando ScrollView
  TouchableOpacity,
} from "react-native";

import Voltar from "../../icons/voltar.png";
import * as ImagePicker from "expo-image-picker";

export default function Serviço({ navigation }) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView>

    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.exit}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
              <Image
                style={{ height: 30, width: 30, marginTop: 5 }}
                source={Voltar}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.down}>
          <View style={styles.titulo}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 35,
                color: "white",
                marginTop: 15,
              }}
              >
              Bem vindo ao
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 35,
                color: "white",
              }}
              >
              WorkingHouse
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.main}>
        <View style={styles.form}>
          <View style={styles.men}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 25,
                color: "#3B8AEB",
              }}
              >
              Vamos criar seu perfil
            </Text>
          </View>
          <View style={styles.avi}>
            <Text>Coloque todos os seus dados nos campos abaixo</Text>
          </View>
            <View style={{alignItems:'center',marginBottom: 10}}>
              {image && (
                <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200, marginTop:10, borderRadius:100,marginBottom: 10,borderWidth: 4,
                  borderColor: "#3b8eab", }}
                />
                )}
            <Button
              title="Adicione sua imagem aqui"
              onPress={pickImage}
              style={{ backgroundColor: "#3b8aeb", borderRadius: 25,  }}
              />
              </View>
          <View style={styles.inps}>
            <TextInput placeholder=" Nome" style={styles.inp}></TextInput>
            <TextInput placeholder=" Idade" style={styles.inp}></TextInput>
            <TextInput placeholder=" Serviço" style={styles.inp}></TextInput>
            <TextInput
              placeholder=" Localização"
              style={styles.inp}
              ></TextInput>
            <TextInput placeholder=" Valor" style={styles.inp}></TextInput>
            <TextInput placeholder=" Descrição" style={styles.inp}></TextInput>
          </View>
        </View>
      </View>
    </View>
</ScrollView>
  );
}

const styles = StyleSheet.create({
  inp: {
    borderRadius: 25,
    marginBottom: 10,
    height: 50,
    width: 350,
    borderWidth: 1,
    borderColor: "#3b8eab",
  },

  inps: {
    flexDirection: "column",
    justifyContent: "center",
  },

  form: {
    justifyContent: "center",
    backgroundColor: "white",
    borderStyle: "solid",
    borderColor: "#3B8AEB",
    borderWidth: 2,
    width: "94%",
    display: "flex",
    alignItems: "center",
    borderRadius: 25,
    padding: 20,
    marginBottom: 200,
  },

  main: {
    alignItems: "center",
  },

  header: {
    marginBottom: 40,
  },

  titulo: {
    alignItems: "center",
  },

  container: {
    backgroundColor: "#3b8aeb",
  },

  avi: {
    marginBottom: 10,
  },
});
