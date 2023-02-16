import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  TextInput,
  Image,
  View,
  Pressable,
  Text
} from "react-native";
import apiAxios from "../api/apiAxios";
import { auth } from "../../firebaseConfig";
import {firebase} from "../../firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import DropDownPicker from "react-native-dropdown-picker";
import * as ImagePicker from "expo-image-picker";
import imagePlaceholder from "../../assets/images/imagePlaceholder.png";

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [senac, setSenac] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [foto, setFoto] = useState(null);
  const [uploading, setUploading] = useState();
  const [urlFoto, setUrlFoto] = useState(null);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Manhã", value: "manha" },
    { label: "Tarde", value: "tarde" },
    { label: "Noite", value: "noite" },
  ]);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const [uploadInProgress, setUploadInProgress] = useState(false);
  const [progressPercentage, setProgressPercentage] = useState(0);

  const pickerImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    console.log(result.canceled);
    if (!result.canceled) {
      setFoto(result.assets[0].uri);
      console.log(result.assets[0].uri);
    }
  };



  const cadastrar = async () => {
    if (!email || !senha) {
      Alert.alert("Atençãoo", "Você deve preencher e-mail e senha");
      return;
    }
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, senha)
    .then(() => {
      
      Alert.alert("Cadastro", "Conta criada com sucesso!", [
        {
          text: "Acessar Perfil",
          onPress: () => {
            navigation.replace("LoginStack");
          },
          style: "default",
        },
      ]);
    })
    .then(async () => {
      if (!uploadInProgress) {
        setUploadInProgress(true);
        const imgResponse = await fetch(foto);
        const blobFile = await imgResponse.blob();
        const fileName = foto.substring(foto.lastIndexOf("/") + 1);
        let upload = firebase
          .storage()
          .ref("users/")
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
            const resposta = await apiAxios.post("/users.json", {
              nome: nome,
              senac: senac,
              email: email,
              senha: senha,
              periodo: periodo,
              foto: url_imagem,
            });
            updateProfile(auth.currentUser, {
              displayName: nome,
              photoURL: url_imagem,
            });
          }
        );
      }


      

      
    })
    .catch((error) => {
      console.log(error);
      let mensagem;
      switch (error.code) {
        case "auth/email-already-in-use":
          mensagem = "E-mail já cadastrado!";
          break;

        case "auth/weak-password":
          mensagem = "Senha deve ter pelo menos 6 dígitos!";
          break;

        case "auth/invalid-email":
          mensagem = "Endereço de e-mail inválido!";
          break;

        default:
          mensagem = "Algo deu errado... tente novamente!";
          break;
      }
      Alert.alert("Atenção!", mensagem);
    })
    .finally(() => {
      setLoading(false);
      setUploadInProgress(false)
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formulario}>
      <View style={styles.imageView}>
        
        {
          foto ?
          <Image source={{uri: foto}} style={styles.image} />
          : <Image source={imagePlaceholder} style={styles.image}/>
        }
      </View>
        <TextInput
          placeholder="Nome"
          style={styles.input}
          onChangeText={(valor) => setNome(valor)}
        />
        <TextInput
          placeholder="Senac"
          style={styles.input}
          onChangeText={(valor) => setSenac(valor)}
        />

        <View>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            onChangeItem={(items) => setPeriodo(items.value)}
            translation={{
              PLACEHOLDER: "Período",
            }}
          />
        </View>

        <TextInput
          placeholder="E-mail"
          style={styles.input}
          keyboardType="email-address"
          onChangeText={(valor) => setEmail(valor)}
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry
          onChangeText={(valor) => setSenha(valor)}
        />
        <View>
        <Pressable style={styles.botao} onPress={pickerImage}>
        <Text style={styles.textoBotao}>Escolher foto</Text>
      </Pressable>
        </View>
        <View style={styles.botoes}>

          <Button
            disabled={loading}
            onPress={cadastrar}
            title="Cadastre-se"
            color="#5A3F26"
         
          />
          {loading && <ActivityIndicator size="large" color="blue" />}


        </View>

      </View>


      
    </View>
  );
};

export default Cadastro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2EEE3",
    alignItems: "center",
    justifyContent: "center",
  },
  formulario: {
    marginVertical: 16,
    width: "80%",
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
  input: {
    backgroundColor: "white",
    marginVertical: 8,
    padding: 8,
    borderRadius: 4,
  },
  botoes: {
    marginVertical: 8,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    resizeMode: "contain",
    width: 150,
    height: 150,
  },
  botao: {
    height: 50,
    width: "100%",
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: "#EEBF33",
  },
  textoBotao: {
    fontSize: 20,
  },

});
