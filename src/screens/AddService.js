import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Button,
  ScrollView, // Importando ScrollView
  TouchableOpacity,
} from "react-native";

import Voltar from "../../icons/voltar.png";
import * as ImagePicker from "expo-image-picker";
import logo from "../../icons/logobranca.png";

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
                  style={{ height:40, width:40, margin: 5 }}
                  source={Voltar}
                ></Image>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.down}>
            <View>
              <Image source={logo} style={{ height: 200, width: 200 }}></Image>
            </View>
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
            <View style={{ alignItems: "center", marginBottom: 10 }}>
              {image && (
                <Image
                  source={{ uri: image }}
                  style={{
                    width: 200,
                    height: 200,
                    marginTop: 10,
                    borderRadius: 100,
                    marginBottom: 10,
                    borderWidth: 4,
                    borderColor: "#3b8eab",
                  }}
                />
              )}
              <Button
                title="Adicione sua imagem aqui"
                onPress={pickImage}
                style={{ backgroundColor: "#3b8aeb", borderRadius: 25 }}
              />
            </View>
            <View style={styles.inps}>
              <TextInput placeholder="  Nome" style={styles.inp}></TextInput>
              <TextInput placeholder="  Idade" style={styles.inp}></TextInput>
              <TextInput placeholder="  Serviço" style={styles.inp}></TextInput>
              <TextInput
                placeholder="  Localização"
                style={styles.inp}
              ></TextInput>
              <TextInput placeholder="  Valor" style={styles.inp}></TextInput>
              <TextInput
                placeholder="  Descrição"
                style={styles.inp}
              ></TextInput>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderRadius: 25,
                  borderColor: "#3b8aeb",
                  backgroundColor: "#3b8aeb",
                  height: 50,
                  width: 120,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  marginTop: 15,
                }} onPress={() => navigation.navigate("Home")}
              >
                <View>
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 20,
                      color: "white",
                    }}
                  >
                    Enviar
                  </Text>
                </View>
              </TouchableOpacity>
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
    marginBottom: 20,
  },

  main: {
    alignItems: "center",
  },

  header: {
    marginBottom: 40,
  },

  down: {
    alignItems: "center",
  },

  container: {
    backgroundColor: "#3b8aeb",
  },

  avi: {
    marginBottom: 10,
  },
});
