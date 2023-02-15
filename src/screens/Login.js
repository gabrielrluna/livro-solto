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

/* Importamos os recursos de autenticação através das configurações Firebase */
import { auth } from "../../firebaseConfig";

/* Importamos as funções de autenticação diretamente da lib */
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const login = () => {
    if (!email || !senha) {
      Alert.alert("Atenção!", "Você deve preencher todos os campos");
      return; // parar o processo
    }

    setLoading(true);
    signInWithEmailAndPassword(auth, email, senha)
      .then(() => {
        navigation.replace("PerfilStack");
      })
      .catch((error) => {
        // console.log(error);
        // console.log(error.code);
        let mensagem;
        switch (error.code) {
          case "auth/user-not-found":
            mensagem = "Usuário não encontrado!";
            break;
          case "auth/wrong-password":
            mensagem = "Senha incorreta";
            break;
          default:
            mensagem = "Houve um erro, tente novamente mais tarde";
            break;
        }
        Alert.alert("Ops!", mensagem);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const recuperarSenha = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert("Recuperar senha", "Verifique sua caixa de entrada");
      })
      .catch((error) => console.log(error));
  };

  return (
    <View style={estilos.container}>
      <View>
        <Image style={estilos.logo} source={logo} />
      </View>
      <View style={estilos.formulario}>
        <TextInput
          onChangeText={(valor) => setEmail(valor)}
          placeholder="E-mail"
          style={estilos.input}
          keyboardType="email-address"
        />
        <TextInput
          onChangeText={(valor) => setSenha(valor)}
          placeholder="Senha"
          style={estilos.input}
          secureTextEntry
        />

        <View style={estilos.botoes}>
          <Button
            disabled={loading}
            title="Entre"
            color="#177567"
            onPress={login}
          />

          {loading && <ActivityIndicator size="large" color="green" />}

          <Button
            title="Recuperar senha"
            color="#D4A417"
            onPress={recuperarSenha}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F5ED",
    alignItems: "center",
    justifyContent: "center",
  },
  formulario: {
    marginBottom: 32,
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
