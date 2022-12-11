import { StyleSheet, View, TextInput } from "react-native";
import Colores from "../Constantes/colores";

const Input = ({ placeholder, placeholderColor }) => {
  return (
    <View style={styles.contenedor}>
      <TextInput
        style={styles.inputStyle}
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    borderColor: Colores.secundario,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
    paddingHorizontal: 10,
    marginVertical: 3,
  },
  inputStyle: {
    flex: 1,
    marginHorizontal: 20,
    height: 40,
  },
});
