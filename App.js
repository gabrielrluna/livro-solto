import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import express from "express";
// import cors from "cors";

// const app = express();
// const porta = process.env.PORT || 2112;

// //Configurar requisições de diferentes origens CORS
// app.use(cors());

// //Configurar suporte a JSON
// app.use(express.json());

// //Configurar suporte a dados de imputs e formulários
// app.use(express.urlencoded({ extended: true }));

// //ROTAS

// //Raiz da API
// app.get("/", (req, res) => {
//   res.setDefaultEncoding(`Página Inicial da API`);
// });

/* Stack  */
import {
  HomeStack,
  AnunciarLivroStack,
  BuscaStack,
  FavoritosStack,
  PerfilStack,
  LoginStack,
  CadastroStack,
} from "./src/screens/Stack";

import { Ionicons } from "@expo/vector-icons";

const App = () => {
  const Tab = createBottomTabNavigator();

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
            component={AnunciarLivroStack}
            name="Anunciar Livro"
            options={{ headerShown: false }}
          />
          <Tab.Screen
            component={BuscaStack}
            name="Busca"
            options={{ headerShown: false }}
          />

          <Tab.Screen
            component={FavoritosStack}
            name="Favoritos"
            options={{ headerShown: false }}
          />

          <Tab.Screen
            component={PerfilStack}
            name="Perfil"
            options={{ headerShown: false }}
          />

          <Tab.Screen
            component={LoginStack}
            name="Login"
            options={{ headerShown: false }}
          />

          <Tab.Screen
            component={CadastroStack}
            name="Cadastro"
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
