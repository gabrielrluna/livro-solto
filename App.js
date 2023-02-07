import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import AnunciarLivro from "./src/screens/AnunciarLivro";
import Busca from "./src/screens/Busca";
import Chat from "./src/screens/Chat";
import Favoritos from "./src/screens/Favoritos";
import Home from "./src/screens/Home";
import ListaLivros from "./src/screens/ListaLivros";
import DetalhesLivro from "./src/screens/DetalhesLivro";
import Perfil from "./src/screens/Perfil";
import Privacidade from "./src/screens/Privacidade";
import Sobre from "./src/screens/Sobre";
import HomeTeste from "./src/screens/HomeTeste";

/* Stack  */
import { HomeStack } from "./src/screens/Stack";
import { Ionicons } from "@expo/vector-icons";
import { func } from "prop-types";

const App = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            unmountOnBlur: true,
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
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#402914",
            tabBarInactiveTintColor: "#402914",
            tabBarStyle: {
              position: "absolute",
              backgroundColor: "#EEBF33",
              height: 60,
              paddingBottom: 10,
              paddingTop: 10,
            },
          })}
        >
          <Tab.Screen
            component={HomeStack}
            name="Home"
            options={{ headerShown: false }}
          />
          <Tab.Screen
            component={AnunciarLivro}
            name="Anunciar Livro"
            options={{ headerShown: false }}
          />
          <Tab.Screen
            component={Busca}
            name="Busca"
            options={{ headerShown: false }}
          />

          <Tab.Screen
            component={Favoritos}
            name="Favoritos"
            options={{ headerShown: false }}
          />

          <Tab.Screen
            component={Perfil}
            name="Perfil"
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
