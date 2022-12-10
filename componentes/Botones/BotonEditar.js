import { StyleSheet, Pressable, Image, Text } from "react-native";
import React from "react";

const BotonEditar = ({ style }) => {
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed}>
      <Image source={require("../../assets/images/editar.png")} style={style} />
      <Text style={styles.texto}>Editar</Text>
    </Pressable>
  );
};

export default BotonEditar;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.6,
  },
  texto: {
    color: "white",
    fontSize: 10,
    marginLeft: 23,
    marginTop: -7,
  },
});
