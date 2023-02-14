import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import fundoAlternativo from "../../assets/images/fundoAlternativo.jpg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { useEffect } from "react";
import serverApi from "../api/serverApi";

const cardLivro = ({ livro }) => {
  const [titulo, capa] = livro;
  const navigation = useNavigation();
  const detalhes = () => {
    navigation.navigate("DetalhesLivroStack", { livro });
  };
  const salvar = async () => {
    const livrosFavoritos = await AsyncStorage.getItem("@favoritos");
    let listaDeLivros = JSON.parse(livrosFavoritos);
    if (!listaDeLivros) {
      listaDeLivros = [];
    }
    for (let livroExistente in listaDeLivros) {
      if (listaDeLivros[livroExistente].id == livro.id) {
        Alert.alert("Já favoritado", "Esse livro já era um favorito");
        Vibration.vibrate();
        return;
      }
    }
    listaDeLivros.push(livro);
    await AsyncStorage.setItem("@favoritos", JSON.stringify(listaDeLivros));
    Alert.alert(`O filme "${livro.title}" foi adicionado aos favoritos.`);
  };
  return (
    <View
      style={styles.livroCard}
      key={id}
      id={id}
      titulo={titulo}
      dono={dono}
      genero={genero}
      capa={capa}
    >
      <View style={styles.livroBackground}>
        {capa && (
          <Image source={fundoAlternativo} style={styles.fundoAlternativo} />
        )}
      </View>
      <View style={styles.titulo}>
        <Text style={styles.textoTitulo}> {titulo} </Text>
      </View>
      <View style={styles.yellowButtonsView}>
        <Pressable style={styles.yellowButtons} onPress={detalhes}>
          <Text style={styles.brownText}>
            <AntDesign name="infocirlceo" size={16} color="#5A3F26" />
            {""} Detalhes
          </Text>
        </Pressable>
        <Pressable style={styles.yellowButtons} onPress={salvar}>
          <Text style={styles.brownText}>
            <AntDesign name="hearto" size={16} color="#5A3F26" />
            {""} Favoritar
          </Text>
        </Pressable>
      </View>
      <Pressable style={styles.escolherBotao}>
        <Text style={styles.texto}>
          <AntDesign name="pluscircle" size={18} color="white" />
          {""} Escolher
        </Text>
      </Pressable>
    </View>
  );
};

export default cardLivro;

const styles = StyleSheet.create({
  livroCard: {
    backgroundColor: "#D9D9D9",
    height: "60%",
    width: "60%",
    marginVertical: 8,
  },
  livroBackground: {
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  fundoAlternativo: {
    height: "70%",
    width: "75%",
  },
  titulo: {
    marginVertical: 8,
    backgroundColor: "#5A3F26",
    justifyContent: "center",
    height: 30,
  },
  textoTitulo: {
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 18,
  },
  yellowButtonsView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  yellowButtons: {
    backgroundColor: "#EEBF33",
    border: 1,
    borderColor: "#402914",
    width: "49%",
    padding: 8,
    marginBottom: 8,
  },
  brownText: {
    color: "#402914",
    textAlign: "center",
  },
  escolherBotao: {
    backgroundColor: "#177567",
    padding: 8,
    borderRadius: 3,
    textAlign: "center",
  },
  texto: {
    fontSize: 18,
    fontFamily: "roboto",
    textAlign: "center",
    color: "white",
  },
});
