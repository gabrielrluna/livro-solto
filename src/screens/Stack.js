import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Import de todas as screens
import Home from "./Home";
import Busca from "./Busca";
import AnunciarLivro from "./AnunciarLivro";
import Favoritos from "./Favoritos";
import Perfil from "./Perfil";
import DetalhesLivro from "./DetalhesLivro";
import ListaLivros from "./ListaLivros";
import Sobre from "./Sobre";
import Privacidade from "./Privacidade";

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        component={Home}
        name="HomeStack"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={DetalhesLivro}
        name="DetalhesLivroStack"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={ListaLivros}
        name="ListaLivrosStack"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Sobre}
        name="SobreStack"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Privacidade}
        name="PrivacidadeStack"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export function AnunciarLivroStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        component={AnunciarLivro}
        name="AnunciarLivroStack"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export function BuscaStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        component={Busca}
        name="BuscaStack"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export function FavoritosStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        component={Favoritos}
        name="FavoritosStack"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export function PerfilStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        component={Perfil}
        name="PerfilStack"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
const estilos = StyleSheet.create({});
