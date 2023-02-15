import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Pressable,
  ScrollView,
  TextInput,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import api from "../services/Api";
import { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import CurrencyInput from "react-native-currency-input";
import * as ImagePicker from "expo-image-picker";
import { firebase } from "../../firebaseConfig";

const CadastrarProduto = () => {
  const [nomeProduto, textoProduto] = useState("");
  const [codigoProduto, textoCodigo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [preco, setPreco] = useState(null);
  const [foto, setFoto] = useState(null);
  const [uploading, setUploading] = useState();
  const [urlFoto, setUrlFoto] = useState(null);

  const categoriaProdutos = [
    { key: "1", value: "Salgados" },
    { key: "2", value: "Doces" },
    { key: "3", value: "Bebidas" },
    { key: "4", value: "Lanches" },
  ];
  //console.log(categoria);
  /* image picker */
  const pickerImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    if (!result.canceled) {
      setFoto(result.assets[0].uri);
    }
  };
  /* UPLOAD IMAGEM */

  const [uploadInProgress, setUploadInProgress] = useState(false);
  const [progressPercentage, setProgressPercentage] = useState(0);

  const enviarProduto = async () => {
    if (!uploadInProgress) {
      setUploadInProgress(true);
      const response = await fetch(foto);
      const blob = await response.blob();
      const filename = foto.substring(foto.lastIndexOf("/") + 1);
      let upload = firebase
        .storage()
        .ref("produtos/")
        .child(filename)
        .put(blob);
      upload.on(
        "state_changed",
        (snapshot) => {
          setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        },
        (error) => {
          console.error(error.message);
        },
        async () => {
          const url_imagem = await upload.snapshot.ref.getDownloadURL();
          var capaevento = url_imagem;

          try {
            // await uploadingImage();
            console.log(url_imagem);

            const resposta = await api.post("/produtos.json", {
              nome_produto: nomeProduto,
              cod_produto: codigoProduto,
              quantidade: quantidade,
              valor: preco,
              descricao: descricao,
              caminhoFoto: capaevento,
              categoria: categoria,
            });
            Alert.alert("Salvo com sucesso!!!");
            setUploadInProgress(false);
          } catch (error) {
            console.log("Deu ruim na busca da API: " + error.message);
            setUploadInProgress(false);
          }
        }
      );
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar animated={true} backgroundColor="black" />
        <ScrollView style={styles.scroll}>
          <View style={styles.caixa}>
            <View style={styles.view}>
              {foto && (
                <Image
                  source={{ uri: foto }}
                  style={{ width: 200, height: 200 }}
                />
              )}
            </View>
            <Pressable style={styles.botao} onPress={pickerImage}>
              <Text style={styles.textoBotao}>Escolher foto</Text>
            </Pressable>

            <View style={styles.caixaInput}>
              <Text style={styles.textoInput}>Nome do Produto:</Text>
              <TextInput
                style={styles.input}
                onChangeText={textoProduto}
                value={nomeProduto}
              />
            </View>
            <View style={styles.caixaInput}>
              <Text style={styles.textoInput}>Codigo do Produto:</Text>
              <TextInput
                style={styles.input}
                onChangeText={textoCodigo}
                value={codigoProduto}
              />
            </View>
            <View style={styles.caixaInput}>
              <Text style={styles.textoInput}>Descrição do Produto:</Text>
              <TextInput
                style={styles.inputDescricao}
                editable
                multiline
                numberOfLines={4}
                onChangeText={setDescricao}
                value={descricao}
              />
            </View>
            <View style={styles.caixaInput}>
              <SelectList
                boxStyles={{
                  width: 320,
                  margin: 10,
                  borderWidth: 2,
                  borderColor: "gray",
                  borderRadius: 6,
                }}
                setSelected={(val) => setCategoria(val)}
                data={categoriaProdutos}
                placeholder="Categorias:"
                save="value"
                search={false}
              />
            </View>
          </View>
          {/* valores */}
          <View style={styles.caixaValores}>
            <View style={styles.caixaPequena}>
              <Text style={styles.textoInput}>Quantidade:</Text>
              <TextInput
                style={styles.inputValores}
                keyboardType="numeric"
                onChangeText={setQuantidade}
                value={quantidade}
              />
            </View>
            <View style={styles.caixaPequena}>
              <Text style={styles.textoInput}>Preço:</Text>
              <CurrencyInput
                style={styles.inputValores}
                value={preco}
                onChangeValue={setPreco}
                prefix="R$"
                delimiter="."
                separator=","
                precision={2}
                minValue={0}
                onChangeText={(formattedValue) => {
                  console.log(formattedValue); // R$ +2.310,46
                }}
              />
            </View>
          </View>
          {uploadInProgress && (
            <ActivityIndicator size="large" color="5451a6" />
          )}
          <Pressable style={styles.botaoEnviar} onPress={enviarProduto}>
            <Text style={styles.textoBotao}>Cadastrar Produto</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default CadastrarProduto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  scroll: {
    marginBottom: 60,
  },
  view: {
    height: 200,
    width: 200,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  caixa: {
    width: 400,
    alignItems: "center",
  },
  botao: {
    height: 50,
    width: 250,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: "gray",
  },
  textoBotao: {
    fontSize: 20,
  },
  caixaInput: {
    margin: 5,
  },
  textoInput: {
    fontSize: 16,
    fontWeight: "600",
  },
  input: {
    height: 60,
    width: 320,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
  },
  inputDescricao: {
    height: 60,
    width: 320,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
  },

  caixaValores: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 40,
    marginRight: 40,
  },

  inputValores: {
    height: 60,
    width: 140,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
  },
  botaoEnviar: {
    marginTop: 30,
    marginLeft: 40,
    height: 50,
    width: 320,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: "gray",
  },
});
