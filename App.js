import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AnunciarLivro from "./src/screens/AnunciarLivro";
import Busca from "./src/screens/Busca";
import Chat from "./src/screens/Chat";
import DetalhesLivro from "./src/screens/DetalhesLivro";
import Favoritos from "./src/screens/Favoritos";
import Home from "./src/screens/Home";
import ListaLivros from "./src/screens/ListaLivros";
import Perfil from "./src/screens/Perfil";
import Privacidade from "./src/screens/Privacidade";
import Sobre from "./src/screens/Sobre";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={Home} name="Home" />
          <Stack.Screen component={AnunciarLivro} name="AnunciarLivro" />
          <Stack.Screen component={Busca} name="Busca" />
          <Stack.Screen component={Chat} name="Chat" />
          <Stack.Screen component={DetalhesLivro} name="DetalhesLivro" />
          <Stack.Screen component={Favoritos} name="Favoritos" />

          <Stack.Screen component={ListaLivros} name="ListaLivros" />
          <Stack.Screen component={Perfil} name="Perfil" />
          <Stack.Screen component={Privacidade} name="Privacidade" />
          <Stack.Screen component={Sobre} name="Sobre" />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const estilos = StyleSheet.create({});
