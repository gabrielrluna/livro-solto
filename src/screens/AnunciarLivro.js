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
import DropDownPicker from "react-native-dropdown-picker";
import imagePlaceholder from "../../assets/images/imagePlaceholder.png";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const AnunciarLivro = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Romance", value: "romance" },
    { label: "Didático", value: "didatico" },
  ]);
  const enviar = () => {
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
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageView}>
        <Image source={imagePlaceholder} style={styles.image} />
      </View>
      <View style={styles.formView}>
        <TextInput
          style={styles.inputUm}
          blurOnSubmit={true}
          placeholder="Titulo do Livro"
        />
        <TextInput
          style={styles.inputUm}
          blurOnSubmit={true}
          placeholder="Autor"
        />
        <TextInput
          style={styles.inputDois}
          editable
          multiline
          autoFocus={false}
          blurOnSubmit={true}
          placeholder="Descrição"
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
              translation={{
                PLACEHOLDER: "Selecione",
              }}
            />
          </View>
          <View style={{ width: "49%" }}>
            <Pressable style={styles.buscarBotao}>
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
