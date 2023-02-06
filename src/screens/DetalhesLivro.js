import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native";
import React from "react";
import fundoAlternativo from "../../assets/images/fundoAlternativo.jpg";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

const DetalhesLivro = () => {
  return (
    <>
      <StatusBar style={estilos.caixa} />
      <SafeAreaView style={estilos.container}>
        <View style={estilos.caixa}>
          <View style={estilos.fotoContainer}></View>
          <View style={estilos.nome}>
            <Text>Titulo - Autor</Text>
          </View>
          <View style={estilos.botoes}>
            <Pressable style={estilos.favoritar}>
              <AntDesign name="hearto" size={24} color="#402914" />
            </Pressable>
            <Pressable style={estilos.escolher}>
              <Text style={estilos.textoEscolher}>
                <AntDesign name="pluscircle" size={24} color="white" />
                {""} Escolher
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default DetalhesLivro;

const estilos = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  caixa: {
    marginVertical: 20,
    backgroundColor: "#EBE8E1",
    height: 300,
    width: "90%",
    borderColor: "black",
    borderWidth: 3,
  },
  nome: {
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  fotoContainer: {
    height: 220,
    width: 120,
    justifyContent: "center",
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  escolher: {
    width: 100,
    height: 50,
    backgroundColor: "#177567",
    padding: 8,
    borderRadius: 3,
    textAlign: "center",
  },
  textoEscolher: {
    color: "white",
  },
  favoritar: {
    width: 50,
    height: 50,
    backgroundColor: "#EEBF33",
    padding: 8,
    borderRadius: 3,
    textAlign: "center",
  },
});
