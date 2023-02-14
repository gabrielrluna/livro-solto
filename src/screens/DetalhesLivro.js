import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import fundoAlternativo from "../../assets/images/fundoAlternativo.jpg";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import serverApi from "../api/serverApi";
import { useState } from "react";
import { useEffect } from "react";

const DetalhesLivro = ({ genero }, { navigation }) => {
  const [fonteCarregada] = useFonts({
    roboto: require("../../assets/fonts/Roboto-Regular.ttf"),
  });

  const [livros, setLivros] = useState([]);
  useEffect(() => {
    async function getLivros() {
      try {
        const resposta = await fetch(`${serverApi}/livros.json`);
        const dados = await resposta.json();

        let listaDeLivros = [];

        for (const livro in dados) {
          const objetoLivro = {
            id: livro,
            titulo: dados[livro].titulo,
            capa: dados[livro].capa,
            descricao: dados[livro].descricao,
            genero: dados[livro].genero,
            dono: dados[livro].dono,
          };
          listaDeLivros.push(objetoLivro);
          if (genero) {
            listaDeLivros = listaDeLivros.filter(
              (cadaLivro) => cadaLivro.genero === genero
            );
          }
        }
        setLivros(listaDeLivros);
      } catch (error) {
        console.log("Deu ruim aí­ hein chapa " + error.message);
      }
    }
    getLivros();
  }, [genero]);

  if (!fonteCarregada) return <Text>Fonte sendo carregada</Text>;

  return (
    <>
      <StatusBar style={styles.caixa} />
      {livros.map(({ id, titulo, genero, dono, capa, descricao }) => (
        <SafeAreaView
          style={styles.container}
          key={id}
          id={id}
          titulo={titulo}
          dono={dono}
          genero={genero}
          descricao={descricao}
          capa={capa}
        >
          <View style={styles.caixa}>
            <View style={styles.fotoContainer}></View>
            <View style={styles.nome}>
              <Text> {titulo} </Text>
            </View>
            <View style={styles.botoes}>
              <Pressable style={styles.favoritar}>
                <AntDesign name="hearto" size={16} color="#402914" />
              </Pressable>
              <Pressable style={styles.escolher}>
                <Text style={styles.textoEscolher}>
                  <AntDesign name="pluscircle" size={16} color="white" />
                  {""} Escolher
                </Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.infos}>
            <Text> </Text>
            <Text>{genero}</Text>
            <Text> </Text>
            <Text>|</Text>
            <Text> </Text>
            <Text>{dono}</Text>
          </View>

          <View>
            <Text style={styles.descTitle}>Descrição:</Text>
            <Text style={styles.descText}>{descricao}</Text>
          </View>
        </SafeAreaView>
      ))}
    </>
  );
};

export default DetalhesLivro;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  caixa: {
    marginVertical: 20,
    backgroundColor: "#EBE8E1",
    width: "90%",
    borderColor: "black",
    borderWidth: 3,
  },
  nome: {
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  fotoContainer: {
    height: 220,
    width: 120,
    justifyContent: "center",
  },
  botoes: {
    marginVertical: 5,
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  escolher: {
    width: 100,
    height: 40,
    backgroundColor: "#177567",
    padding: 8,
    borderRadius: 3,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  textoEscolher: {
    color: "white",
    fontSize: 16,
    fontFamily: "roboto",
    textAlign: "center",
  },
  favoritar: {
    width: 40,
    height: 40,
    backgroundColor: "#EEBF33",
    padding: 8,
    borderRadius: 3,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  infos: {
    flexDirection: "row",
  },
  descTitle: {
    fontWeight: "bold",
  },
  descText: {
    textAlign: "justify",
  },
});
