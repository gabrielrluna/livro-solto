import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";

const Sobre = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Sobre a Livro Solto</Text>
      <View style={styles.viewTexto}>
        <Text style={styles.paragraph}>
          A Livro Solto é uma iniciativa que uniu estudantes do Técnico de
          Informática para Internet do Senac Penha na construção de um projeto
          que acessibiliza os livros pela interação da comunidade leitora que
          troca obras entre si.
        </Text>
        <Text style={styles.paragraph}>
          Vemos a leitura como um agente de educação na sociedade. Portanto,
          toda atitude, mesmo que pequena, é um grande impulso dessa causa.
        </Text>
        <Text style={styles.paragraph}>
          Pessoas que lêem, se educam. E, pessoas educadas, ajudam a mudar a
          realidade.
        </Text>
        <Text style={styles.paragraph}>
          Caso queiram compartilhar ideias sobre como podemos melhorar a
          interação do nosso site, entrem em contato pelo nosso email:
        </Text>
        <Text style={styles.email}>contato@livrosolto.com.br</Text>
      </View>
    </SafeAreaView>
  );
};

export default Sobre;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
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
  email: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "roboto",
    marginVertical: 8,
    fontWeight: "bold",
  },
});
