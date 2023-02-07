import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export function ActionModal({ fecharModal }) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={estilos.container}>
      <TouchableOpacity
        style={{ flex: 1, zIndex: 9 }}
        onPress={fecharModal}
      ></TouchableOpacity>
      <View style={estilos.viewBotoes}>
        <TouchableOpacity
          style={estilos.acaoBotao}
          onPress={() => {
            navigation.navigate("SobreStack");
          }}
        >
          <Text style={estilos.acaoTexto}>Sobre</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={estilos.acaoBotao}
          onPress={() => {
            navigation.navigate("DetalhesLivroStack");
          }}
        >
          <Text style={estilos.acaoTexto}>Privacidade</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewBotoes: {
    marginVertical: 20,
    backgroundColor: "black",
  },
  acaoBotao: {
    zIndex: 9,
    backgroundColor: "#FFF",
    borderRadius: 6,
    marginTop: 8,
    marginBottom: 8,
    marginRight: 10,
    marginLeft: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: "rgba(0,0,0, 0.2",
    shadowColor: "rgba(0,0,0, 0.3",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
    shadowOpacity: 0.28,
    shadowRadius: 4,
  },
  acaoTexto: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
