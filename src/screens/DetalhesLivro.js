import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native";
import React from "react";
import fundoAlternativo from "../../assets/images/fundoAlternativo.jpg";

const DetalhesLivro = () => {
  return (
    <>
      <StatusBar style={estilos.caixa} />
      <View style={estilos.caixa}>
        <View style={estilos.fotoContainer}></View>
        <View style={estilos.nome}>
          <Text>Titulo - Autor</Text>
        </View>
        <View>
          <Pressable></Pressable>
          <Pressable></Pressable>
        </View>
      </View>
    </>
  );
};

export default DetalhesLivro;

const estilos = StyleSheet.create({
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
});
