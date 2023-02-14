import { StyleSheet, Text, View } from "react-native";

const ItemSeparador = () => {
  return (
    <View style={styles.viewSeprarador}>
      <View style={styles.linha}></View>
    </View>
  );
};

export default ItemSeparador;

const styles = StyleSheet.create({
  viewSeprarador: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 16,
  },
  linha: { backgroundColor: "5451a6", height: 2, width: "80%" },
});
