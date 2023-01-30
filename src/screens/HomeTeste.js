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

const HomeTeste = ({ navigation }) => {
  const [fonteCarregada] = useFonts({
    roboto: require("../../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fonteCarregada) return <Text>Fonte sendo carregada</Text>;

  return <SafeAreaView style={estilos.container}></SafeAreaView>;
};

export default HomeTeste;

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
