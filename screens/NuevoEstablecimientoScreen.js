import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Input from "../componentes/Input";
import Colores from "../Constantes/colores";
import Dropdownlist from "../componentes/Dropdownlist";
import InputDireccion from "../componentes/InputDireccion";
import AgregarFotos from "../componentes/Botones/AgregarFotos";
import BotonPrincipal from "../componentes/Botones/BotonPrincipal";

const NuevoEstablecimientoScreen = () => {
  const placeholderColor = Colores.gris;

  return (
    <View style={styles.contenedor}>
      <View style={styles.fila1}>
        <Text style={styles.titulo}>NUEVO ESTABLECIMIENTO</Text>
      </View>
      <View style={styles.fila2}>
        <ScrollView>
          <Input placeholderColor={placeholderColor} placeholder="Nombre" />
          <Dropdownlist placeholder="Seleccionar categoría" />
          <Dropdownlist placeholder="Seleccionar país" />
          <Dropdownlist placeholder="Seleccionar ciudad" />
          <InputDireccion
            placeholderCalle="Calle"
            placeholderColorCalle={placeholderColor}
            placeholderNro="Número"
            placeholderColorNro={placeholderColor}
          />
          <Dropdownlist placeholder="Seleccionar horarios" />
          <Input placeholderColor={placeholderColor} placeholder="Teléfono" />
          <Input placeholderColor={placeholderColor} placeholder="Instagram" />
          <Input placeholderColor={placeholderColor} placeholder="Facebook" />
          <Input placeholderColor={placeholderColor} placeholder="Página web" />
          <Dropdownlist placeholder="Seleccionar tipo de precio" />
          <AgregarFotos />
          <BotonPrincipal texto="AGREGAR" />
        </ScrollView>
      </View>
    </View>
  );
};
export default NuevoEstablecimientoScreen;

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
    marginTop: 25,
    marginHorizontal: 20,
  },
  titulo: {
    color: "white",
    fontSize: 25,
  },
});
