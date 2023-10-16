import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Ger from "../../icons/gertrudes.png";
import Stars from "../../icons/estrelas.png";
import fot from "../../icons/limpeza1.jpeg"
import fot2 from "../../icons/limpeza2.jpeg"

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}><Text>Chat</Text></TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Image source={Ger} style={styles.ger}></Image>
        <Text style={styles.nome}>Dna. Gertrudes</Text>
        <Text style={styles.idade}>72 anos</Text>
        <Text style={styles.dia}>Diarista</Text>
      </View>
      <View style={styles.notes}>
        <View style={styles.ava}>
          <Text>Avaliações sobre você</Text>
          <View style={styles.bla}>
            <Text>5.0</Text>
            <View style={styles.avad}>
              <Image source={Stars} style={{ height: 20, width: 85 }}></Image>
              <Text style={{ fontSize: 10 }}>53 avaliações</Text>
            </View>
          </View>
        </View>
        <View style={styles.serv}>
          <Text>Serviços realizados</Text>
          <Text style={{ fontSize: 23, fontWeight: "bold" }}>69</Text>
        </View>
      </View>
      <View style={styles.local}>
        <Text style={{ fontWeight: "500" }}>Endereço: </Text>
        <TouchableOpacity>
          <Text
            style={{
              marginBottom: 3,
              color: "#3b8aeb",
              fontSize: 15,
              fontWeight: "500",
            }}
          >
            {" "}
            Av. Getúlio Vargas 369, Bucarein
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.desc}>
        <Text style={{ marginBottom: 3, fontSize: 15, fontWeight: "500" }}>
          Descrição:
        </Text>
        <Text>
          Limpeza comum: a remoção de pó, resíduos de substâncias orgânicas e
          inorgânicas e a organização do local, fazem parte da limpeza comum.
          Geralmente, as tarefas incluem limpezas básicas ou de manutenção, com
          foco naquilo que é visto rapidamente. Mesmo assim, os procedimentos
          envolvem a remoção seca ou molhada da{" "}
          <TouchableOpacity>
            <Text style={{ color: "#3b8aeb", fontSize: 15, fontWeight: "500" }}>
              Ver mais
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
      <View style={styles.tabela}>
        <View style={styles.tit}>
          <Text style={{ fontWeight: "700", color: "white", marginLeft: 5 }}>
            Serviços realizados
          </Text>
          <Text></Text>
        </View>
        <View style={styles.a}>
          <Text style={{ marginLeft: 5 }}>Limpeza simples</Text>
          <Text style={{ marginRight: 5 }}>R$110,00</Text>
        </View>
        <View style={styles.b}>
          <Text style={{ marginLeft: 5 }}>Limpeza completa</Text>
          <Text style={{ marginRight: 5 }}>R$150,00</Text>
        </View>
        <View style={styles.a}>
          <Text style={{ marginLeft: 5 }}>Limpeza completa + área externa</Text>
          <Text style={{ marginRight: 5 }}>R$200,00</Text>
        </View>
      </View>
      <View style={styles.imagens}>
        <View style={styles.plus}>
          <Text></Text>
          <TouchableOpacity>
            <Text
              style={{
                marginBottom: 3,
                color: "#3b8aeb",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              +Adicionar imagens
            </Text>
          </TouchableOpacity>
        </View>
          <View style={styles.fotos}>
            <Image source={fot} styles={{height:100,width:50}}></Image>
            <Image source={fot2} styles={{height:500,width:50}}></Image>
          </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    padding: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: "#eee",
    borderRadius: 20,
    paddingHorizontal: 16,
    marginHorizontal: 10,
  },
  nome: {
    color: "#3b8aeb",
    fontWeight: "bold",
    fontSize: 20,
  },
  ger: {
    height: 150,
    width: 150,
  },
  idade: {
    color: "#3b8aeb",
    fontSize: 16,
  },
  notes: {
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },
  bla: {
    justifyContent: "space-evenly",
    display: "flex",
    flexDirection: "row",
  },
  avad: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  serv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  local: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  dia: {
    fontSize: 12,
  },
  tabela: {
    borderWidth: 1,
    borderColor: "#3b8aeb",
    marginTop: 25,
  },
  tit: {
    backgroundColor: "#3b8aeb",
    color: "white",
  },
  a: {
    backgroundColor: "#F1EEEE",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    height: 40,
    alignItems: "center",
  },
  b: {
    backgroundColor: "#E5DEDE",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    height: 40,
    alignItems: "center",
  },
  plus: {
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },
  imagens: {
    marginTop:15,
  },
  fotos: {
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent:'center',
  },
});

export default HomeScreen;
// display: 'flex',
// flexDirection: 'column',
// justifyContent: 'center',
// alignItems: 'center',
