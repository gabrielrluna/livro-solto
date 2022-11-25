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

import logo from "../../assets/images/logo.png";
import garotaLendo from "../../assets/images/garota-lendo.png";

const Home = () => {
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
      <View style={estilos.texto}>
        <Text>Encontre um livro ou ajude alguém a encontrar o seu</Text>
      </View>
      <View style={estilos.viewBotoes}>
        <Pressable style={estilos.botoes}>
          <Text>Anunciar Livro</Text>
        </Pressable>
        <Pressable style={estilos.botoes}>
          <Text>Buscar Livro</Text>
        </Pressable>
      </View>
      <View style={estilos.rodape}>
        <Pressable style={estilos.botoesRodape}>
          <Text>Privacidade</Text>
        </Pressable>
        <Pressable style={estilos.botoesRodape}>
          <Text>Sobre</Text>
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
    backgroundColor: "#EEBF33",
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 60,
    height: 60,
  },
  imagemHome: {},
  garotaLendo: {
    width: 128,
    height: 128,
  },
  texto: {},
  viewBotoes: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  botoes: {},
  rodape: {
    flex: 0.5,
    flexDirection: "row",
    backgroundColor: "#EEBF33",
    width: "100%",
  },
  botoesRodape: {},
});
