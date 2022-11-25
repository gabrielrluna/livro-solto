import { StatusBar } from "expo-status-bar";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

const Home = () => {
  const [fonteCarregada] = useFonts({
    roboto: require("../../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fonteCarregada) return <Text>Fonte sendo carregada</Text>;

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.barraLogo}></View>
      <View style={estilos.imagemHome}></View>
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
    </SafeAreaView>
  );
};

export default Home;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  barraLogo: {},
});
