import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

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
import HomeTeste from "./src/screens/HomeTeste";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              switch (route.name) {
                case "Home":
                  iconName = focused ? "home" : "home-outline";
                  break;

                case "Anunciar Livro":
                  iconName = focused ? "add-circle" : "add-circle-outline";
                  break;

                case "Busca":
                  iconName = focused ? "search" : "search-outline";
                  break;

                case "Favoritos":
                  iconName = focused ? "star" : "star-outline";
                  break;
                case "Perfil":
                  iconName = focused ? "person-sharp" : "person-outline";
                  break;

                default:
                  iconName = focused ? "home" : "home-outline";
                  break;
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#402914",
            tabBarInactiveTintColor: "#402914",
            tabBarStyle: {
              backgroundColor: "#EEBF33",
            },
          })}

          // headerStyle: {
          //   backgroundColor: "#EEBF33",
          // },
        >
          <Tab.Screen component={Home} name="Home" />
          <Tab.Screen component={AnunciarLivro} name="Anunciar Livro" />
          <Tab.Screen component={Busca} name="Busca" />
          {/* <Tab.Screen component={Chat} name="Chat" /> */}
          {/* <Tab.Screen component={DetalhesLivro} name="DetalhesLivro" /> */}
          <Tab.Screen component={Favoritos} name="Favoritos" />

          {/* <Tab.Screen component={ListaLivros} name="ListaLivros" /> */}
          <Tab.Screen component={Perfil} name="Perfil" />
          {/* <Tab.Screen component={Privacidade} name="Privacidade" /> */}
          {/* <Tab.Screen component={HomeTeste} name="HomeTeste" /> */}
          {/* <Tab.Screen component={Sobre} name="Sobre" /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const estilos = StyleSheet.create({
  // menu: {
  //   backgroundColor: "#402914",
  // },
});
