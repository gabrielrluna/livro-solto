import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import Home from "./Home";
import DetalhesLivro from "./DetalhesLivro";

export default function Diso() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
		<Stack.Screen component={Home} name="Home" />
          <Stack.Screen
            component={DetalhesLivro}
            name="DetalhesLivro"
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Diso;

const estilos = StyleSheet.create({});
