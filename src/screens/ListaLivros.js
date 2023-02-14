import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  AppRegistry,
  View,
  Image,
  ActivityIndicator,
  FlatList,
  ScrollView,
} from "react-native";
import serverApi from "../api/serverApi";
import itemSeparador from "../components/itemSeparador";
import cardLivro from "../components/cardLivro";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ListaLivros = ({ route }) => {
  const { texto } = route.params;
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    async function getLivros() {
      try {
        const resposta = await fetch(`${serverApi}/livros.json`);
        const dados = await resposta.json();

        let listaDeLivros = [];

        for (const livro in dados) {
          const objetoLivro = {
            id: livro,
            titulo: dados[livro].titulo,
            capa: dados[livro].capa,
            descricao: dados[livro].descricao,
            genero: dados[livro].genero,
            dono: dados[livro].dono,
          };
          listaDeLivros.push(objetoLivro);
          if (genero) {
            listaDeLivros = listaDeLivros.filter(
              (cadaLivro) => cadaLivro.genero === genero
            );
          }
        }
        setResultados(resposta.data.results);
      } catch (error) {
        console.log("Deu ruim aí hein chapa " + error.message);
      }
    }
    getLivros();
  }, []);

  if (!fonteCarregada) return <Text>Fonte sendo carregada</Text>;
  return (
    <View style={styles.viewFilmes}>
      <FlatList
        ItemSeparatorComponent={itemSeparador}
        ListEmptyComponent={
          <View>
            <Text style={styles.textoTitulo}>Não há filmes!</Text>
          </View>
        }
        data={resultados}
        renderItem={({ item }) => {
          return <cardLivro filme={item} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ListaLivros;

const styles = StyleSheet.create({
  livroCard: {
    backgroundColor: "#D9D9D9",
    height: "60%",
    width: "60%",
    marginVertical: 8,
  },
  livroBackground: {
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  fundoAlternativo: {
    height: "70%",
    width: "75%",
  },
  titulo: {
    marginVertical: 8,
    backgroundColor: "#5A3F26",
    justifyContent: "center",
    height: 30,
  },
  textoTitulo: {
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 18,
  },
  yellowButtonsView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  yellowButtons: {
    backgroundColor: "#EEBF33",
    border: 1,
    borderColor: "#402914",
    width: "49%",
    padding: 8,
    marginBottom: 8,
  },
  brownText: {
    color: "#402914",
    textAlign: "center",
  },
  escolherBotao: {
    backgroundColor: "#177567",
    padding: 8,
    borderRadius: 3,
    textAlign: "center",
  },
  texto: {
    fontSize: 18,
    fontFamily: "roboto",
    textAlign: "center",
    color: "white",
  },
});
