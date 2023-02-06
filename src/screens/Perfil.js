import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import fotoAlternativa from "../../assets/images/fotoAlternativa.png";
import { AntDesign } from "@expo/vector-icons";
import garotaLendo from "../../assets/images/garota-lendo.png";

const Perfil = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardPerfil}>
        <View style={styles.fotoContainer}>
          <Image source={fotoAlternativa} style={styles.foto} />
        </View>
        <View style={styles.dadosContainer}>
          <Text style={styles.nome}>Estrubufúncia Silva</Text>
          <Text style={styles.texto}>198 Anos</Text>
          <Text style={styles.texto}>Senac Favela</Text>
        </View>
      </View>

      <View style={styles.imagemHome}>
        <Image style={styles.garotaLendo} source={garotaLendo} />
      </View>

      <View style={styles.chatView}>
        <Pressable style={styles.chatBotao}>
          <Text style={styles.textoBotao}>
            <AntDesign name="message1" size={20} color="white" />
            {""} Ver/Enviar Mensagens
          </Text>
        </Pressable>
      </View>

      <View></View>
    </SafeAreaView>
  );
};

export default Perfil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardPerfil: {
    backgroundColor: "#EBE8E1",
    height: 200,
    padding: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fotoContainer: {
    height: 150,
    width: 120,
    justifyContent: "center",
  },
  foto: {
    height: 180,
    width: 150,
  },
  nome: {
    fontFamily: "roboto",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 5,
  },
  texto: {
    fontFamily: "roboto",
    fontSize: 18,
  },
  garotaLendo: {
    resizeMode: "contain",
    width: 200,
    height: 150,
  },
  chatView: {
    width: "100%",
  },
  chatBotao: {
    backgroundColor: "#73563C",
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
  textoBotao: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
});
