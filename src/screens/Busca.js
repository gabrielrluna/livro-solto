import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import fundoAlternativo from "../../assets/images/fundoAlternativo.jpg";

const Busca = () => {
  const [fonteCarregada] = useFonts({
    roboto: require("../../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fonteCarregada) return <Text>Fonte sendo carregada</Text>;
  return (
    <SafeAreaView style={styles.container}>
      <View></View>
      <View style={styles.inputView}>
        <TextInput style={styles.input} placeholder="Digite o livro" />
        <Pressable style={styles.inputBotao}>
          <Text style={styles.texto}>
            <AntDesign name="search1" size={20} color="white" />
            Buscar Livro
          </Text>
        </Pressable>
      </View>
      <View style={styles.livroCard}>
        <View style={styles.livroBackground}>
          <Image source={fundoAlternativo} style={styles.fundoAlternativo} />
        </View>
        <View style={styles.titulo}>
          <Text style={styles.textoTitulo}>TITULO CAPITALIZE</Text>
        </View>
        <Pressable style={styles.escolherBotao}>
          <Text style={styles.texto}>
            <AntDesign name="pluscircle" size={20} color="white" />
            Escolher
          </Text>
        </Pressable>
      </View>
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
    width: "70%",
  },
  livroBackground: {
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  fundoAlternativo: {
    height: "80%",
    width: "70%",
  },
  titulo: {
    marginVertical: 8,
    backgroundColor: "#262521",
    justifyContent: "center",
    height: 30,
  },
  textoTitulo: {
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 18,
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
