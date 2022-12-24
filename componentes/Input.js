import { View, TextInput, StyleSheet } from "react-native";
import Colores from "../Constantes/colores";

function Input({
  invalido,
  placeholder,
  placeholderColor,
  autoCapitalize,
  keyboardType,
  secure,
  onChangeText,
  value,
  maxLength
}) {
  return (
    <View style={[styles.contenedor, invalido && styles.invalido]}>
      <TextInput
        style={styles.inputStyle}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={invalido ? Colores.invalido : placeholderColor }
        maxLength={maxLength}
      />
    </View>
  );
}

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
  invalido: {
    borderColor: Colores.invalido,
  },
});
