import { StyleSheet, Text, View, Image, Button } from "react-native";
import React, { useEffect, useState } from "react";
import BotonAtras from "../componentes/Botones/BotonAtras";
import Estrellas from "../componentes/Estrellas";
import BotonFavOn from "../componentes/Botones/BotonFavOn";
import Puntuar from "../componentes/Botones/Puntuar";
import BotonFotos from "../componentes/Botones/BotonFotos";
import BotonEditar from "../componentes/Botones/BotonEditar";
import DatosEstablecimiento from "../componentes/DatosEstablecimiento";
import Logo from "../componentes/Logo";

const DetalleScreen = ({ route, navigation }) => {
  const datos = route.params.datos;
  const [lugarSeleccionado, setLugarSeleccionado] = useState({});

  useEffect(() => {
    setLugarSeleccionado(datos);
  }, []);

  return (
    <View style={styles.contenedor}>
      <Logo />
      <View style={styles.fila1}>
        <BotonAtras style={styles.botonAtras} onPress={() => navigation.goBack()}/>
        <View style={styles.contenedorHeader}>
          <View style={styles.contenedorTitulo}>
            <Text style={styles.titulo}>{lugarSeleccionado.nombre}</Text>
          </View>
          <View style={styles.contenedorEstrellas}>
            <Estrellas style={styles.estrellas} />
          </View>
          <View style={styles.contenedorBotonFav}>
            <BotonFavOn style={styles.botonFav} />
          </View>
        </View>
      </View>

      <View style={styles.fila2}>
        <BotonFotos style={styles.botonFotos} />
        <BotonEditar style={styles.botonEditar} />
      </View>
      <View style={styles.fila3}>
        <DatosEstablecimiento
          direccion={`${lugarSeleccionado.calle} ${lugarSeleccionado.nroCalle}`}
          horarios={lugarSeleccionado.horarios}
          descripcion={lugarSeleccionado.descripcion}
          telefono={lugarSeleccionado.telefono}
          web={lugarSeleccionado.web}
          face={lugarSeleccionado.face}
          insta={lugarSeleccionado.insta}
        />
      </View>
    </View>
  );
};

export default DetalleScreen;

const styles = StyleSheet.create({
  contenedor: {
    marginTop: 25,
    height: "100%",
    marginRight: 1,
  },
  fila1: {
    flex: 2.9,
    flexDirection: "column",
  },
  fila2: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1.3,
    marginTop: 15,
  },
  fila3: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 12,
  },
  botonAtras: {
    height: 40,
    width: 40,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  contenedorHeader: {
    flexDirection: "row",
    width: "100%",
  },
  contenedorTitulo: {
    flex: 7,
  },
  titulo: {
    textAlign: "center",
    color: "white",
    fontSize: 25,
  },
  contenedorEstrellas: {
    flex: 2,
    alignItems: "center",
  },
  estrellas: {
    width: "110%",
  },
  contenedorBotonFav: {
    flex: 2,
  },
  botonFav: {
    height: "75%",
    width: "75%",
    marginLeft: 14,
  },
  textoPuntuar: {
    color: "white",
  },
  botonFotos: {
    height: "55%",
    width: "150%",
    marginLeft: -10,
  },
  botonEditar: {
    height: 50,
    width: 50,
    marginTop: -10,
    marginRight: 10,
    marginLeft: 10,
  },
});
