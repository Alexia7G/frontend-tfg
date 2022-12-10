import { StyleSheet, Pressable, Image, Text } from "react-native";
import React from "react";

const BotonFotos = ({ style }) => {
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed}>
      <Image source={require("../../assets/images/fotos.png")} style={style} />
      <Text style={styles.texto}>Fotos</Text>
    </Pressable>
  );
};

export default BotonFotos;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.6,
  },
  texto: {
    color: "white",
    fontSize: 10,
  },
});
