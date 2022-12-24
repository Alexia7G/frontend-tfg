import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

import SelectList from "../componentes/Dropdownlist";
import InputConIcono from "../componentes/InputConIcono";
import Card from "../componentes/Card";

import Colores from "../Constantes/colores";
import Logo from "../componentes/Logo";

const InicioScreen = () => {
  return (
    <View style={styles.contenedorFilas}>
      <Logo />
      <View style={styles.fila1}>
        <InputConIcono
          icon="search"
          size={20}
          color={Colores.principal}
          placeholder="Buscar"
          placeholderColor={Colores.principal}
        />
      </View>
      {/* 
      <View style={styles.fila2}>
        <View style={styles.contenedorColumnas}>
          <View style={styles.div}>
            <SelectList />
          </View>
          <View style={styles.div}>
            <SelectList />
          </View>
        </View>
      </View>
      */}
      <View style={styles.fila3}>
        <View style={styles.contenedorColumnas}>
            <View style={styles.divContenido}>
              <Card />
              <Card />
              <Card />
            </View>
            <View style={styles.divContenido}>
              <Card />
              <Card />
              <Card />
            </View>
        </View>
      </View>
    </View>
  );
};

export default InicioScreen;

const styles = StyleSheet.create({
  contenedorFilas: {
    marginTop: 25,
    flexDirection: "column",
    height: "100%",
  },
  fila1: {
    justifyContent: "center",
    alignItems: "center",
    flex: 5,
    paddingHorizontal: "10%",
  },
  fila2: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
  },
  fila3: {
    justifyContent: "center",
    alignItems: "center",
    flex: 15,
  },
  contenedorColumnas: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
  },
  div: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  divContenido: {
    alignItems: "center",
    flex: 1,
  },
});
