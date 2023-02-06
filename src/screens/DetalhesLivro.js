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
      <StatusBar style={estilos.caixa} />
      <SafeAreaView style={estilos.container}>
        <View style={estilos.caixa}>
          <View style={estilos.fotoContainer}></View>
          <View style={estilos.nome}>
            <Text>Titulo - Autor</Text>
          </View>
          <View style={estilos.botoes}>
            <Pressable style={estilos.favoritar}>
              <AntDesign name="hearto" size={24} color="#402914" />
            </Pressable>
            <Pressable style={estilos.escolher}>
              <Text style={estilos.textoEscolher}>
                <AntDesign name="pluscircle" size={24} color="white" />
                {""} Escolher
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={estilos.infos}>
          <Text>Ano</Text>
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
          <Text>Descrição:</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
            commodo sem. Donec sed auctor nisl. Proin varius ipsum risus, ut
            porta leo aliquet sed. Curabitur ultricies efficitur cursus. Aenean
            commodo tincidunt risus, ac dictum eros feugiat ac. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Morbi ultrices
            efficitur mattis. Sed vitae commodo dolor. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Integer hendrerit erat velit, vitae tempor diam dictum nec.
            Fusce non est mollis tellus eleifend lobortis eget vitae dolor.
            Etiam congue, lorem et lobortis semper, erat felis tincidunt ligula,
            sit amet auctor lorem augue vel ligula. Morbi semper, nibh a
            faucibus rhoncus, sem nibh interdum purus, in commodo nunc dui quis
            lacus. In hac habitasse platea dictumst.{" "}
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default DetalhesLivro;

const estilos = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  caixa: {
    marginVertical: 20,
    backgroundColor: "#EBE8E1",
    width: "90%",
    borderColor: "black",
    borderWidth: 3,
  },
  nome: {
    backgroundColor: "grey",
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
    flexDirection: "row",
    justifyContent: "space-around",
  },
  escolher: {
    width: 100,
    height: 50,
    backgroundColor: "#177567",
    padding: 8,
    borderRadius: 3,
    textAlign: "center",
  },
  textoEscolher: {
    color: "white",
    fontFamily: "roboto",
    textAlign: "center",
  },
  favoritar: {
    width: 50,
    height: 50,
    backgroundColor: "#EEBF33",
    padding: 8,
    borderRadius: 3,
    textAlign: "center",
  },
  infos: {
    flexDirection: "row",
  },
});
