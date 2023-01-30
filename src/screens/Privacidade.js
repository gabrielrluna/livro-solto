import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

const Privacidade = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Termos de Privacidade</Text>
      <View style={styles.viewTexto}>
        <Text style={styles.paragraph}>
          A livro solto se compromete com a segurança dos dados de seus usuários
          com padrões rigorosos.
        </Text>
        <Text style={styles.paragraph}>
          A livro solto se dispõe no direito de solicitar dados de seus usuários
          para efetuação do cadastro que será movimentado na utilização do site.
        </Text>
        <Text style={styles.paragraph}>
          A livro solto se compromete a não utilizar os dados fornecidos pelos
          usuários, para realizar envios de propagandas, spam, ou ofertas de
          produtos.
        </Text>
        <Text style={styles.paragraph}>
          Todo e qualquer dado fornecido pelo usuário será utilizado apenas com
          intuito de utilização site e para a identificação do mesmo.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Privacidade;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 18,
    alignItems: "center",
    fontFamily: "roboto",
  },
  titulo: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "roboto",
    fontWeight: "bold",
    marginVertical: 8,
  },
  viewTexto: { marginVertical: 8 },
  paragraph: {
    textAlign: "justify",
    marginVertical: 8,
    fontSize: 18,
    fontFamily: "roboto",
  },
});
