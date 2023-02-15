import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  TextInput,
  Image,
  View,
} from "react-native";

import logo from "../../assets/images/logo.png";
import apiAxios from "../api/apiAxios";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import DropDownPicker from "react-native-dropdown-picker";

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [senac, setSenac] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Manhã", value: "manhã" },
    { label: "Tarde", value: "tarde" },
    { label: "Noite", value: "noite" },
  ]);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const cadastrar = () => {
    if (!email || !senha) {
      Alert.alert("Aten��o", "Voc� deve preencher e-mail e senha");
      return;
    }
    /* imagem */

    setLoading(true);
    createUserWithEmailAndPassword(auth, email, senha)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: nome,
          senac,
          periodo,
        });

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
        const resposta = await apiAxios.post("/users.json", {
          nome: nome,
          senac: senac,
          email: email,
          senha: senha,
          periodo: periodo,
          foto: "",
        });
      })
      .catch((error) => {
        console.log(error);
        let mensagem;
        switch (error.code) {
          case "auth/email-already-in-use":
            mensagem = "E-mail j� cadastrado!";
            break;

          case "auth/weak-password":
            mensagem = "Senha deve ter pelo menos 6 d�gitos!";
            break;

          case "auth/invalid-email":
            mensagem = "Endere�o de e-mail inv�lido!";
            break;

          default:
            mensagem = "Algo deu errado... tente novamente!";
            break;
        }
        Alert.alert("Aten��oo!", mensagem);
      })
      .finally(() => setLoading(false));
  };

  return (
    <View style={estilos.container}>
      <View>
        <Image style={estilos.logo} source={logo} />
      </View>
      <View style={estilos.formulario}>
        <TextInput
          placeholder="Nome"
          style={estilos.input}
          onChangeText={(valor) => setNome(valor)}
        />
        <TextInput
          placeholder="Senac"
          style={estilos.input}
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
            onChangeItem={(item) => setPeriodo(item.value)}
            translation={{
              PLACEHOLDER: "Per�odo",
            }}
          />
        </View>

        <TextInput
          placeholder="E-mail"
          style={estilos.input}
          keyboardType="email-address"
          onChangeText={(valor) => setEmail(valor)}
        />
        <TextInput
          placeholder="Senha"
          style={estilos.input}
          secureTextEntry
          onChangeText={(valor) => setSenha(valor)}
        />
        <View style={estilos.botoes}>
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

const estilos = StyleSheet.create({
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
});
