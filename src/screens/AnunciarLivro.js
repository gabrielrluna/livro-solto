import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  Alert,
} from "react-native";
import apiAxios from "../api/apiAxios";
import { auth } from "../../firebaseConfig";
import {firebase} from "../../firebaseConfig";
import DropDownPicker from "react-native-dropdown-picker";
import imagePlaceholder from "../../assets/images/imagePlaceholder.png";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { LinkingContext } from "@react-navigation/native";

const AnunciarLivro = ({navigation}) => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [autor, setAutor] = useState("");
  const [dono, setDono] = useState("");
  const [capa, setCapa] = useState(null);
  const [uploading, setUploading] = useState();
  const [urlCapa, setUrlCapa] = useState(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Romance", value: "romance" },
    { label: "Didático", value: "didatico" },
  ]);
  const [genero, setGenero] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploadInProgress, setUploadInProgress] = useState(false);
  const [progressPercentage, setProgressPercentage] = useState(0);

  const usuarioLogado = auth.currentUser;

  console.log(usuarioLogado);

  const pickerImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    console.log(result.canceled);
    if (!result.canceled) {
      setCapa(result.assets[0].uri);
      console.log(result.assets[0].uri);
    }
  };

  const enviar = async () => {
    if (!titulo || !descricao || !capa || !items) {
      Alert.alert("Atenção", "Você deve preencher todos os campos");
      return;
    }
    Alert.alert(
      "Certeza que quer enviar?",
      "Ao clicar você disponibiliza o livro",
      [
        {
          text: "cancelar",
          onPress: () => {
            return false;
          },
          style: "cancel",
        },
        {
          text: "sim, enviar",
          style: "destructive",
        },
      ]
    );
    try {
      if (!uploadInProgress) {
        setUploadInProgress(true);
        
        const imgResponse = await fetch(capa);
        const blobFile = await imgResponse.blob();
        const fileName = capa.substring(capa.lastIndexOf("/") + 1);
        
        let upload = firebase
          .storage()
          .ref("livros/")
          .child(fileName)
          .put(blobFile);
        
        upload.on(
          "state_changed",
          (snapshot) => {
            setProgressPercentage((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          },
          (error) => {
            console.error(error.message);
          },
          async () => {
            const url_imagem = await upload.snapshot.ref.getDownloadURL();
            const resposta = await apiAxios.post("/livros.json", {
              titulo: titulo,
              descricao: descricao,
              dono: usuarioLogado.uid,
              autor: autor,
              genero: genero,
              capa: url_imagem,
            });
          }
        );
      }  
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
      setUploadInProgress(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageView}>
        {
          capa ?
          <Image source={{uri: capa}} style={styles.image} />
          : <Image source={imagePlaceholder} style={styles.image} />
        }
        
      </View>
      <View style={styles.formView}>
        <TextInput
          style={styles.inputUm}
          blurOnSubmit={true}
          placeholder="Titulo do Livro"
          onChangeText={(valor) => setTitulo(valor)}
        />
        <TextInput
          style={styles.inputUm}
          blurOnSubmit={true}
          placeholder="Autor"
          onChangeText={(valor) => setAutor(valor)}
        />
        <TextInput
          style={styles.inputDois}
          editable
          multiline
          autoFocus={false}
          blurOnSubmit={true}
          placeholder="Descrição"
          onChangeText={(valor) => setDescricao(valor)}
          numberOfLines={4}
          maxLength={140}
        />

        <View style={styles.selectView}>
          <View style={{ width: "49%", marginRight: "1%" }}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              onChangeItem={(items) => setGenero(items.value)}
              translation={{
                PLACEHOLDER: "Selecione",
              }}
            />
          </View>
          <View style={{ width: "49%" }}>
            <Pressable style={styles.buscarBotao} onPress={pickerImage}>
              <Text style={styles.texto}>
                <AntDesign name="search1" size={20} color="white" />
                Buscar Capa
              </Text>
            </Pressable>
          </View>
        </View>

        <Pressable onPress={enviar} style={styles.enviarBotao}>
          <Text style={styles.texto}>Enviar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default AnunciarLivro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    alignItems: "center",
    alignContent: "center",
    width: 400,
  },
  imageView: {
    alignItems: "center",
    height: 200,
    width: 150,
    justifyContent: "center",
    borderColor: "black",
    margin: 10,
    padding: 10,
  },
  image: {
    height: 200,
    width: 150,
  },
  formView: {
    height: "50%",
    width: "90%",
  },
  inputUm: {
    marginVertical: 5,
    height: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 3,
  },
  inputDois: {
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 3,
  },
  selectView: {
    flexDirection: "row",
  },
  drop: {
    borderRadius: 3,
    width: "45%",
  },
  buscarBotao: {
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    height: 50,
    // marginVertical: 4,
  },
  texto: {
    color: "white",
    padding: 4,
    justifyContent: "center",
  },
  enviarBotao: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 3,
    backgroundColor: "#177567",
    justifyContent: "center",
    alignItems: "center",
  },
});
