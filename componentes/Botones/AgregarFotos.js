import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import Colores from "../../Constantes/colores";

const AgregarFotos = () => {
  return (
    <Pressable
      style={({ pressed }) => [styles.contenedor, pressed && styles.pressed]}
    >
      <Text style={styles.texto}>Agregar fotos</Text>
      <Image
        source={require("../../assets/images/camara.png")}
        style={styles.imagen}
      />
    </Pressable>
  );
};

export default AgregarFotos;

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    borderColor: Colores.secundario,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
    paddingHorizontal: 25,
    marginVertical: 3,
    height: 40,
    width: "60%",
  },
  pressed: {
    opacity: 0.6,
  },
  texto: {
    flex: 5,
    color: Colores.secundario,
    fontSize: 17,
    paddingTop: 5,
  },
  imagen: {
    flex: 1,
    width: 48,
    height: 48,
    position: "absolute",
    top: -6,
    marginLeft: 140,
  },
});
