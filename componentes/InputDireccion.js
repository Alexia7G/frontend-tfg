import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import Input from "./Input";
import Colores from "../Constantes/colores";

const InputDireccion = ({ placeholderCalle, placeholderColorCalle, placeholderNro, placeholderColorNro }) => {
  return (
    <View style={styles.contenedor}>
      <TextInput
        style={styles.calle}
        autoCorrect={false}
        placeholder={placeholderCalle}
        placeholderTextColor={placeholderColorCalle}
      />
      <TextInput
        style={styles.numero}
        autoCorrect={false}
        placeholder={placeholderNro}
        placeholderTextColor={placeholderColorNro}
      />
    </View>
  );
};

export default InputDireccion;

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    width: "100%",
  },
  calle: {
    flex: 3,
    borderColor: Colores.secundario,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
    paddingHorizontal: 30,
    marginVertical: 3,
    height: 42,
  },
  numero: {
    flex: 1,
    borderColor: Colores.secundario,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
    paddingHorizontal: 30,
    marginVertical: 3,
    height: 42,
    marginLeft: 5
  },
});
