import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import Home from "./Home";
import DetalhesLivro from "./DetalhesLivro";
import ListaLivros from "./ListaLivros";

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
    </Stack.Navigator>
  );
}

export function AnunciarLivroStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen
        component={AnunciarLivro}
        name="AnunciarLivroStack"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const estilos = StyleSheet.create({});
