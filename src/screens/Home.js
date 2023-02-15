import {
  Pressable,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Vibration,
  Modal,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";

import { Entypo } from "@expo/vector-icons";
import { useState } from "react";

import logo from "../../assets/images/logo.png";
import fundoAlternativo from "../../assets/images/fundoAlternativo.jpg";
import { useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { ActionModal } from "../components/ActionModal";

import serverApi from "../api/serverApi";

const Home = ({ navigation }, { genero }) => {
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
        console.log("Deu ruim a� hein chapa " + error.message);
      }
    }
    getLivros();
  }, [genero]);

  const salvar = async () => {
    const livrosFavoritos = await AsyncStorage.getItem("@favoritos");
    let listaDeLivros = JSON.parse(livrosFavoritos);
    if (!listaDeLivros) {
      listaDeLivros = [];
    }
    // for (let livroExistente in listaDeLivros) {
    //   if (listaDeLivros[livroExistente].id == livros.id) {
    //     Alert.alert("Ops!", "Você já salvou este Livro!");
    //     Vibration.vibrate();
    //     return;
    //   }
    // }

    listaDeLivros.push(livros);

    await AsyncStorage.setItem("@favoritos", JSON.stringify(listaDeLivros));

    Alert.alert("Favoritos", "Livro salvo com sucesso!");
  };

  const [visibleModal, setVisibleModal] = useState(false);
  const [fonteCarregada] = useFonts({
    roboto: require("../../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fonteCarregada) return <Text>Fonte sendo carregada</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.barraLogo}>
        <Image style={styles.logo} source={logo} />

        <TouchableOpacity onPress={() => setVisibleModal(true)}>
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </TouchableOpacity>

        <Modal
          visible={visibleModal}
          transparent={true}
          onRequestClose={() => setVisibleModal(false)}
          animationType="slide"
        >
          <ActionModal fecharModal={() => setVisibleModal(false)} />
        </Modal>
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
              {capa && (
                <Image
                  source={fundoAlternativo}
                  style={styles.fundoAlternativo}
                />
              )}
            </View>
            <View style={styles.titulo}>
              <Text style={styles.textoTitulo}>{titulo}</Text>
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
        ))}
      </ScrollView>
      {""}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    alignContent: "center",
  },
  barraLogo: {
    padding: 8,
    backgroundColor: "#EEBF33",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  logo: {
    resizeMode: "contain",
    width: 60,
    height: 60,
  },

  viewTexto: {
    margin: 10,
  },
  texto: {
    fontSize: 18,
    fontFamily: "roboto",
    textAlign: "center",
  },

  botoes: {
    backgroundColor: "#402914",
    padding: 16,
    borderRadius: 3,
    width: "30%",
    justifyContent: "center",
  },
  textoBotao: {
    color: "white",
    fontFamily: "roboto",
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
