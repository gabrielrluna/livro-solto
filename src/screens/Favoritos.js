import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import fundoAlternativo from "../../assets/images/fundoAlternativo.jpg";

const Favoritos = () => {
  const [listaFavoritos, setListaFavoritos] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    async function carregarFavoritos() {
      try {
        const dados = await AsyncStorage.getItem("@favoritos");
        const livros = JSON.parse(dados);
        if (dados != null) {
          setListaFavoritos(livros);
          console.log(listaFavoritos);
        }
      } catch (error) {
        console.log("Falha no carregamento: " + error.message);
      }
    }
    carregarFavoritos();
  }, []);

  const [fonteCarregada] = useFonts({
    roboto: require("../../assets/fonts/Roboto-Regular.ttf"),
  });

  const verDetalhes = (livroSelecionado) => {
    navigation.navigate("Detalhes", { livro: livroSelecionado });
  };

  const excluirFavoritos = async () => {
    Alert.alert(
      "Excluir TODOS?",
      "Tem certeza que deseja excluir todos os favoritos?",
      [
        {
          text: "Cancelar",
          onPress: () => {
            return false;
          },
          style: "cancel",
        },
        {
          text: "Sim, excluir tudo!",
          onPress: async () => {
            await AsyncStorage.removeItem("@favoritos");
            setListaFavoritos([]);
          },
          style: "destructive",
        },
      ]
    );
  };

  const excluirUmFavorito = async (indice) => {
    listaFavoritos.splice(indice, 1);
    await AsyncStorage.setItem("@favoritos", JSON.stringify(listaFavoritos));
    const listaDeLivros = JSON.parse(await AsyncStorage.getItem("@favoritos"));
    setListaFavoritos(listaDeLivros);
  };

  if (!fonteCarregada) return <Text>Fonte sendo carregada</Text>;

  return (
    <SafeAreaView style={styles.container}>
      
      <ScrollView showsVerticalScrollIndicator={false}>
          {listaFavoritos.map((filmeFavorito, indice) => {
            return (

      <View style={styles.cardFavorite}>
        <View style={styles.imageView}>
          <Image style={styles.image} source={fundoAlternativo} />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>Título do livro</Text>
        </View>
        <View style={styles.iconView}>
          <Pressable style={styles.yellowButtons} onPress={excluirUmFavorito}>
            <Text>
              <AntDesign name="minuscircle" size={20} color="white" />
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.limparView}>
        <Pressable style={styles.limparBotao} onPress={excluirFavoritos}>
          <Text style={styles.limparTexto}>
            {" "}
            <AntDesign name="close" size={20} color="white" />
            Limpar Tudo{" "}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Favoritos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 8,
    alignItems: "center",
    fontFamily: "roboto",
  },
  cardFavorite: {
    backgroundColor: "#D9D9D9",
    height: "15%",
    width: "95%",
    marginVertical: "2%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 3,
  },
  imageView: {
    backgroundColor: "white",
    height: "90%",
    width: "15%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  titleView: {
    alignItems: "center",
    alignContent: "center",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  iconView: {
    backgroundColor: "#0D0C0C",
    height: 35,
    width: 35,
    padding: 4,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  limparView: {
    width: "95%",
  },
  limparBotao: {
    backgroundColor: "#262521",
    padding: 8,
    borderRadius: 3,
  },
  limparTexto: {
    textAlign: "center",
    fontSize: 18,
    color: "#F7F5ED",
    fontWeight: "bold",
  },
});
