import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import Colores from "../Constantes/colores";
import Estrellas from "./Estrellas";
import BotonFavOn from "./Botones/BotonFavOn";

const CardFavorito = () => {
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
        <View style={styles.contenerSecundario}>
          <View style={styles.contenedorPuntaje}>
            <Estrellas />
          </View>
          <View style={styles.contenedorBoton}>
            <BotonFavOn style={styles.fav} />
          </View>
        </View>
        <Text style={styles.direccion}>Dirección 1234</Text>
      </View>
    </Pressable>
  );
};

export default CardFavorito;

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
    padding: 5,
  },
  contenerSecundario: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  contenedorPuntaje: {
    flex: 2,
  },
  contenedorBoton: {
    flex: 1,
  },
  fav: {
    width: 40,
    height: 40,
    marginTop: 2
  },
});
