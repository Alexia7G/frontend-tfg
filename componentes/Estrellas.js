import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colores from "../Constantes/colores";

const Estrellas = () => {
  return (
    <View style={styles.contenedor}>
      <Ionicons name="star" size={15} color={Colores.amarillo} style={styles.estrella} />
      <Ionicons name="star" size={15} color={Colores.amarillo} style={styles.estrella} />
      <Ionicons name="star" size={15} color={Colores.amarillo} style={styles.estrella} />
      <Ionicons name="star-outline" size={15} color={Colores.amarillo} style={styles.estrella} />
      <Ionicons name="star-outline" size={15} color={Colores.amarillo} style={styles.estrella} />
    </View>
  );
};

export default Estrellas;

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  estrella: {
    paddingHorizontal: 2,
    paddingTop: 4,
  },
});
