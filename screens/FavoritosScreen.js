import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CardFavorito from "../componentes/CardFavorito";

const FavoritosScreen = () => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.fila1}>
        <Text style={styles.titulo}>FAVORITOS</Text>
      </View>
      <View style={styles.fila2}>
        <View style={styles.contenedorColumnas}>
          <View style={styles.divContenido}>
            <CardFavorito />
            <CardFavorito />
          </View>
          <View style={styles.divContenido}>
            <CardFavorito />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FavoritosScreen;

const styles = StyleSheet.create({
  contenedor: {
    marginTop: 25,
    flexDirection: "column",
    height: "100%",
  },
  fila1: {
    flex: 3.5,
    justifyContent: "center",
    alignItems: "center",
  },
  fila2: {
    flex: 10,
  },
  titulo: {
    color: "white",
    fontSize: 35,
  },
  contenedorColumnas: {
    flexDirection: "row",
    flex: 1,
  },
  divContenido: {
    alignItems: "center",
    flex: 1,
  },
});
