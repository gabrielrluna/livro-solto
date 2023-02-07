import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native";
import React from "react";
import fundoAlternativo from "../../assets/images/fundoAlternativo.jpg";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const DetalhesLivro = () => {
  const [fonteCarregada] = useFonts({
    roboto: require("../../assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fonteCarregada) return <Text>Fonte sendo carregada</Text>;

  return (
    <>
      <StatusBar style={styles.caixa} />
      <SafeAreaView style={styles.container}>
        <View style={styles.caixa}>
          <View style={styles.fotoContainer}></View>
          <View style={styles.nome}>
            <Text>Titulo</Text>
          </View>
          <View style={styles.botoes}>
            <Pressable style={styles.favoritar}>
              <AntDesign name="hearto" size={16} color="#402914" />
            </Pressable>
            <Pressable style={styles.escolher}>
              <Text style={styles.textoEscolher}>
                <AntDesign name="pluscircle" size={16} color="white" />
                {""} Escolher
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.infos}>
          <Text>Autor</Text>
          <Text> </Text>
          <Text>|</Text>
          <Text> </Text>
          <Text>Gênero</Text>
          <Text> </Text>
          <Text>|</Text>
          <Text> </Text>
          <Text>Dono</Text>
        </View>

        <View>
          <Text style={styles.descTitle}>Descrição:</Text>
          <Text style={styles.descText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
            commodo sem. Donec sed auctor nisl. Proin varius ipsum risus, ut
            porta leo aliquet sed. Curabitur ultricies efficitur cursus. Aenean
            commodo tincidunt risus, ac dictum eros feugiat ac. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Morbi ultrices
            efficitur mattis. Sed vitae commodo dolor.
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default DetalhesLivro;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  caixa: {
    marginVertical: 20,
    backgroundColor: "#EBE8E1",
    width: "90%",
    borderColor: "black",
    borderWidth: 3,
  },
  nome: {
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  fotoContainer: {
    height: 220,
    width: 120,
    justifyContent: "center",
  },
  botoes: {
    marginVertical: 5,
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  escolher: {
    width: 100,
    height: 40,
    backgroundColor: "#177567",
    padding: 8,
    borderRadius: 3,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  textoEscolher: {
    color: "white",
    fontSize: 16,
    fontFamily: "roboto",
    textAlign: "center",
  },
  favoritar: {
    width: 40,
    height: 40,
    backgroundColor: "#EEBF33",
    padding: 8,
    borderRadius: 3,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  infos: {
    flexDirection: "row",
  },
  descTitle: {
    fontWeight: "bold",
  },
  descText: {
    textAlign: "justify",
  },
});
