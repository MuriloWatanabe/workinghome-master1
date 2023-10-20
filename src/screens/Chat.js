import React, { Component } from "react";
import { View, Text, TextInput, Button, FlatList, Image, TouchableOpacity} from "react-native";

import user from "../../icons/usuario.png";
import Voltar from "../../icons/voltar.png";

class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      text: "",
      recipientName: "Cliente", // Nome da pessoa para quem você está enviando mensagens
    };
  }

  // Função para enviar uma mensagem
  sendMessage = () => {
    if (this.state.text !== "") {
      const newMessage = {
        id: this.state.messages.length + 1,
        text: this.state.text,
        sender: "Me", // Pode ser 'Me' ou 'Other' dependendo do remetente
      };
      this.setState((prevState) => ({
        messages: [...prevState.messages, newMessage],
        text: "",
      }));
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            padding: 10,
            backgroundColor: "#3b8aeb",
            height: 80,
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Image
                style={{ height: 25, width: 25, marginRight: 10 }}
                source={Voltar}
              ></Image>
            </TouchableOpacity>
          <Image source={user} style={{ height: 40, width: 40 }}></Image>
          <Text style={{ fontSize: 20, color: "white", marginLeft: 5}}>
            {this.state.recipientName}
          </Text>
        </View>
        <FlatList
          data={this.state.messages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 10,
                backgroundColor: item.sender === "Me" ? "#3b8aeb" : "white",
                alignSelf: item.sender === "Me" ? "flex-end" : "flex-start",
                borderRadius: 5,
                margin: 5,
                maxWidth: "70%",
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                }}
              >
                {item.text}
              </Text>
            </View>
          )} style={{marginTop:30}}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 5,
              padding: 10,
            }}
            placeholder="Digite uma mensagem"
            value={this.state.text}
            onChangeText={(text) => this.setState({ text })}
          />
          <Button title="Enviar" onPress={this.sendMessage} />
        </View>
      </View>
    );
  }
}

export default ChatScreen;
