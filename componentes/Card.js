import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import Colores from "../Constantes/colores";
import Estrellas from "./Estrellas";

const Card = () => {
  return (
    <Pressable
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
    >
      <View>
        <Text style={styles.titulo}>Titulo</Text>
        <Image
          style={styles.imagen}
          source={require("../assets/images/restaurant.jpg")}
        />
        <Estrellas />
        <Text style={styles.direccion}>Dirección 1234</Text>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.8,
  },
  item: {
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: Colores.secundario,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 170,
  },
  imagen: {
    width: 170,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  direccion: {
    paddingHorizontal: 3,
    textAlign: "center",
    color: "white",
    padding: 5
  },
});
