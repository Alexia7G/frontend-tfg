import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colores from "../../Constantes/colores";

const Puntuar = ({ style, size }) => {
  return (
    <View style={style}>
      <View style={styles.contenedor}>
        <Ionicons
          name="star-outline"
          size={size}
          color={Colores.amarillo}
          style={styles.estrella}
        />
        <Ionicons
          name="star-outline"
          size={size}
          color={Colores.amarillo}
          style={styles.estrella}
        />
        <Ionicons
          name="star-outline"
          size={size}
          color={Colores.amarillo}
          style={styles.estrella}
        />
        <Ionicons
          name="star-outline"
          size={size}
          color={Colores.amarillo}
          style={styles.estrella}
        />
        <Ionicons
          name="star-outline"
          size={size}
          color={Colores.amarillo}
          style={styles.estrella}
        />
      </View>
    </View>
  );
};

export default Puntuar;

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 10,
  },
  estrella: {
    paddingHorizontal: 1,
  },
});
