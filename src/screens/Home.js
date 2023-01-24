import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useFonts } from "expo-font";

import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import logo from "../../assets/images/logo.png";
import garotaLendo from "../../assets/images/garota-lendo.png";

const Home = ({ navigation }) => {
  const [fonteCarregada] = useFonts({
    roboto: require("../../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fonteCarregada) return <Text>Fonte sendo carregada</Text>;

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.barraLogo}>
        <Image style={estilos.logo} source={logo} />
      </View>
      <View style={estilos.imagemHome}>
        <Image style={estilos.garotaLendo} source={garotaLendo} />
      </View>
      <View style={estilos.viewTexto}>
        <Text style={estilos.texto}>
          Encontre um livro ou ajude alguém a encontrar o seu
        </Text>
      </View>
      <View style={estilos.viewBotoes}>
        <Pressable
          style={estilos.botoes}
          onPress={() => {
            navigation.navigate("AnunciarLivro");
          }}
        >
          <Text style={estilos.textoBotao}>
            <MaterialIcons name="menu-book" size={16} color="white" /> Anunciar
            Livro
          </Text>
        </Pressable>
        <Pressable
          style={estilos.botoes}
          onPress={() => {
            navigation.navigate("Busca");
          }}
        >
          <Text style={estilos.textoBotao}>
            <FontAwesome name="search" size={16} color="white" /> Buscar Livro
          </Text>
        </Pressable>
      </View>
      <View style={estilos.rodape}>
        <Pressable
          style={estilos.botoes}
          onPress={() => {
            navigation.navigate("Privacidade");
          }}
        >
          <Text style={estilos.textoBotao}>Privacidade</Text>
        </Pressable>
        <Pressable
          style={estilos.botoes}
          onPress={() => {
            navigation.navigate("Sobre");
          }}
        >
          <Text style={estilos.textoBotao}>Sobre</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  barraLogo: {
    paddingTop: 25,
    backgroundColor: "#EEBF33",
    width: "100%",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    resizeMode: "contain",
    width: 60,
    height: 60,
  },
  garotaLendo: {
    resizeMode: "contain",
    width: 200,
    height: 200,
  },
  viewTexto: {
    margin: 10,
  },
  texto: {
    fontSize: 18,
    fontFamily: "roboto",
    textAlign: "center",
  },
  viewBotoes: {
    flex: 2,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: "80%",
  },
  botoes: {
    backgroundColor: "#402914",
    padding: 16,
    borderRadius: 3,
  },
  textoBotao: {
    color: "white",
    fontFamily: "roboto",
  },
  rodape: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#EEBF33",
    width: "100%",
  },
});
