import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import Input from "../componentes/Input";
import Colores from "../Constantes/colores";
import Dropdownlist from "../componentes/Dropdownlist";
import InputDireccion from "../componentes/InputDireccion";
import AgregarFotos from "../componentes/Botones/AgregarFotos";
import BotonPrincipal from "../componentes/Botones/BotonPrincipal";
import Logo from "../componentes/Logo";
import { getCategorias, getCiudades, getPaises } from "../api";

const NuevoEstablecimientoScreen = () => {
  //categorias
  const [listaCategorias, setListaCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState({});

  //ciudades
  const [listaCiudades, setListaCiudades] = useState([]);
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState({});

  const placeholderColor = Colores.gris;

  useEffect(() => {
    cargarCategorias();
    cargarCiudades();
  }, [categoriaSeleccionada]);

  const cargarCategorias = async () => {
    try {
      let response = await getCategorias();
      let listaMapeada = response.map((cat) => {
        return { key: cat.cat_id_categoria, value: cat.cat_categoria };
      });
      setListaCategorias(listaMapeada);
    } catch (error) {
      console.error(error);
    }
  };

  const cargarCiudades = async () => {
    try {
      let response = await getCiudades();
      let listaMapeada = response.map((ciu) => {
        return { key: ciu.ci_id_ciudad, value: ciu.ci_ciudad };
      });
      setListaCiudades(listaMapeada);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.contenedor}>
      <Logo />
      <View style={styles.fila1}>
        <Text style={styles.titulo}>NUEVO ESTABLECIMIENTO</Text>
      </View>
      <View style={styles.fila2}>
        <ScrollView>
          <Input
            placeholderColor={placeholderColor}
            placeholder="Nombre"
            maxLength={100}
          />
          <Dropdownlist
            placeholder="Seleccionar categoría"
            data={listaCategorias}
            setSelected={setCategoriaSeleccionada}
          />
          <Dropdownlist
            placeholder="Seleccionar ciudad"
            data={listaCiudades}
            setSelected={setCiudadSeleccionada}
          />
          <InputDireccion
            placeholderCalle="Calle"
            placeholderColorCalle={placeholderColor}
            placeholderNro="Número"
            placeholderColorNro={placeholderColor}
          />
          <Input placeholderColor={placeholderColor} placeholder="Horarios" />
          <Input placeholderColor={placeholderColor} placeholder="Teléfono" keyboardType="number-pad" />
          <Input placeholderColor={placeholderColor} placeholder="Instagram" />
          <Input placeholderColor={placeholderColor} placeholder="Facebook" />
          <Input placeholderColor={placeholderColor} placeholder="Página web" keyboardType="url" />
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
