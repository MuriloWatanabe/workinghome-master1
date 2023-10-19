import React from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";

import Enviar from "../../icons/enviar-mensagem.png";
import Icone from "../../icons/imagem-do-usuario-com-fundo-preto.png";

export default function Chat({ navigation }) {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.icone}
        >
          <Image source={Icone} style={styles.icone}></Image>
        </TouchableOpacity>
      </Card>
      <View>
        <View style={styles.barmen}>
          <View style={styles.text}>
            <TextInput
              placeholder="Mensagem"
              type="text"
              name="fale"
              style={{ width: 300, height: 30, backgroundColor: "grey", borderRadius:25, color: "white" }}
            ></TextInput>
          </View>
          <TouchableOpacity>
            <View style={styles.botao}>
              <Image source={Enviar} style={{ height: 30, width: 30 }}></Image>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "white",
  },

  icone: {
    width: 60,
    height: 60,
    marginLeft: 5,
  },

  input: {
    backgroundColor: "white",
    borderRadius: 12,
    margin: 10,
    width: "100%",
  },

  barmen: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 640,
    justifyContent: "center",
  },

  card: {
    backgroundColor: "#3B8AEB",
    width: "100%",
    height: "10%",
    marginTop: -10,
    marginBottom: 23,
    borderRadius: -1,
  },
});
