import { Pressable, StyleSheet, Image } from "react-native";
import React from "react";

const BotonAtras = ({ style }) => {
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed}>
      <Image source={require("../../assets/images/atras.png")} style={style} />
    </Pressable>
  );
};

export default BotonAtras;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.6,
  },
});
