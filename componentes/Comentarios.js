import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colores from "../Constantes/colores";

const Comentarios = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.usuario} >Nombre del usuario</Text>
      <Text style={styles.comentario}>Comentario del usuario</Text>
      <Text style={styles.fecha} >Fecha</Text>
    </View>
  );
};

export default Comentarios;

const styles = StyleSheet.create({
  contenedor: {
    borderWidth: 2,
    borderColor: Colores.secundario,
    borderRadius: 10,
    marginVertical: 10,
  },
  usuario: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  comentario: {
    paddingHorizontal: 30,
  },
  fecha: {
    color: 'grey',
    fontSize: 12,
    marginLeft: 280,
    paddingVertical: 3
  },
});
