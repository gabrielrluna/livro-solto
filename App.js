import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar />
      <Home />
    </>
  );
}

const estilos = StyleSheet.create({});
