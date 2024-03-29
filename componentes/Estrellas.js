import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colores from "../Constantes/colores";

const Estrellas = ({ style, size }) => {
  return (
    <View style={style}>
      <View style={styles.contenedor}>
        <Ionicons
          name="star"
          size={size}
          color={Colores.amarillo}
          style={styles.estrella}
        />
        <Ionicons
          name="star"
          size={size}
          color={Colores.amarillo}
          style={styles.estrella}
        />
        <Ionicons
          name="star"
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
      <View>
        <Text style={styles.cantidad}>Cantidad de calificaciones</Text>
      </View>
    </View>
  );
};

export default Estrellas;

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
  },
  estrella: {
    paddingHorizontal: 1,
    paddingTop: 4,
  },
  cantidad: {
    paddingHorizontal: 3,
    textAlign: "center",
    color: "white",
    fontSize: 10,
  },
});
