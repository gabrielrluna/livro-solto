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
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import logo from "../../assets/images/logo.png";
import fundoAlternativo from "../../assets/images/fundoAlternativo.jpg";

const Home = ({ navigation }) => {
  const [fonteCarregada] = useFonts({
    roboto: require("../../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fonteCarregada) return <Text>Fonte sendo carregada</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.barraLogo}>
        <Pressable
          style={styles.botoes}
          onPress={() => {
            navigation.navigate("Sobre");
          }}
        >
          <Text style={styles.textoBotao}>Sobre</Text>
        </Pressable>

        <Image style={styles.logo} source={logo} />

        <Pressable
          style={styles.botoes}
          onPress={() => {
            navigation.navigate("Privacidade");
          }}
        >
          <Text style={styles.textoBotao}>Privacidade</Text>
        </Pressable>
      </View>

      <View style={styles.livroCard}>
        <View style={styles.livroBackground}>
          <Image source={fundoAlternativo} style={styles.fundoAlternativo} />
        </View>
        <View style={styles.titulo}>
          <Text style={styles.textoTitulo}>TITULO CAPITALIZE</Text>
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
