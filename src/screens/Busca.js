import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { useEffect } from "react";
import serverApi from "../api/serverApi";

import fundoAlternativo from "../../assets/images/fundoAlternativo.jpg";

const Busca = ({ navigation }, { genero }) => {
  const [texto, setTexto] = useState("");
  const inputTexto = (valor) => {
    setTexto(valor);
  };
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
        console.log("Deu ruim a�� hein chapa " + error.message);
      }
    }
    getLivros();
  }, [genero]);

  if (!fonteCarregada) return <Text>Fonte sendo carregada</Text>;
  return (
    <SafeAreaView style={styles.container}>
      <View></View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="livro..."
          onChangeText={inputTexto}
        />
        <Pressable style={styles.inputBotao}>
          <Text style={styles.texto}>
            <AntDesign name="search1" size={20} color="white" />
            Buscar Livro
          </Text>
        </Pressable>
      </View>
      <ScrollView style={styles.scrollView} horizontal={true}>
        {livros.map(({ id, titulo, genero, dono, capa }) => (
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
              {{ capa } && (
                <Image
                  source={fundoAlternativo}
                  style={styles.fundoAlternativo}
                />
              )}
            </View>
            <View style={styles.titulo}>
              <Text style={styles.textoTitulo}> {titulo} </Text>
            </View>
            <View style={styles.yellowButtonsView}>
              <Pressable
                style={styles.yellowButtons}
                onPress={() => {
                  navigation.navigate("DetalhesLivroStack");
                }}
              >
                <Text style={styles.brownText}>
                  <AntDesign name="infocirlceo" size={16} color="#5A3F26" />
                  {""} Detalhes
                </Text>
              </Pressable>
              <Pressable style={styles.yellowButtons}>
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
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Busca;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 8,
    alignItems: "center",
    fontFamily: "roboto",
    textAlign: "center",
  },
  barraSuperior: {
    paddingTop: 25,
    backgroundColor: "#EEBF33",
    width: "90%",
    height: 90,
  },
  inputView: {
    width: "100%",
    marginTop: 30,
    alignItems: "center",
  },
  input: {
    border: "none",
    borderBottomWidth: 2,
    width: "90%",
  },
  inputBotao: {
    marginVertical: 8,
    backgroundColor: "#402914",
    padding: 8,
    borderRadius: 3,
    width: "90%",
  },
  textoBotao: {
    color: "white",
    textAlign: "center",
  },
  livroCard: {
    backgroundColor: "#D9D9D9",
    height: "80%",
    width: "40%",
    marginHorizontal: 20,
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
  scrollView: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
