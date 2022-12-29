import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Alert,
  RefreshControl,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import Input from "../componentes/Input";
import Colores from "../Constantes/colores";
import Dropdownlist from "../componentes/Dropdownlist";
import AgregarFotos from "../componentes/Botones/AgregarFotos";
import BotonPrincipal from "../componentes/Botones/BotonPrincipal";
import Logo from "../componentes/Logo";
import { getCategorias, getCiudades, guardarEstablecimiento } from "../api";
import Cargando from "../componentes/Cargando";

const NuevoEstablecimientoScreen = () => {
  const [imagenesGuardadas, setImagenesGuardadas] = useState([]);

  const [establecimiento, setEstablecimiento] = useState({
    nombre: "",
    categoria: 0,
    ciudad: 0,
    calle: "",
    nroCalle: 0,
    horarios: "",
    descripcion: "",
    telefono: "",
    insta: "",
    face: "",
    web: "",
  });

  //categorias
  const [listaCategorias, setListaCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState({});

  //ciudades
  const [listaCiudades, setListaCiudades] = useState([]);
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState({});

  const [estaGuardando, setEstaGuardando] = useState(false);

  const [refresh, setRefresh] = useState(false);

  const placeholderColor = Colores.gris;

  useEffect(() => {
    cargarCategorias();
    cargarCiudades();
  }, []);

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

  const nvoEstablecimiento = async () => {
    try {
      setEstaGuardando(true);

      const formData = new FormData();
      formData.append("establecimiento", JSON.stringify(establecimiento));

      let imgData = imagenesGuardadas.map((img, index) => {
        return {
          uri: img.uri,
          base64: img.base64,
          name: `imagen_${index}`,
          type: "image/jpeg",
        };
      });

      formData.append("imagenes", JSON.stringify(imgData));

      guardarOk = await guardarEstablecimiento(formData);

      setEstaGuardando(false);

      Alert.alert(
        "Registro",
        `El establecimiento ${establecimiento.nombre} ha sido registrado`,
        [{ text: "OK", style: "default", onPress: borrarDatos() }]
      );
      //borrarDatos();
    } catch (error) {
      console.error(error);
    }
  };

  const borrarDatos = () => {
    setImagenesGuardadas([]);
    setEstablecimiento({
      nombre: "",
      categoria: establecimiento.categoria,
      ciudad: establecimiento.ciudad,
      calle: "",
      nroCalle: 0,
      horarios: "",
      descripcion: "",
      telefono: "",
      insta: "",
      face: "",
      web: "",
    });
  };

  const cambiarDato = (nombre, valor) => {
    setEstablecimiento({ ...establecimiento, [nombre]: valor });
  };

  const onRefresh = () => {
    setRefresh(true);

    setTimeout(() => {
      borrarDatos();
      setRefresh(false);
    }, 1000);
  };

  return (
    <View style={styles.contenedor}>
      <Logo />
      <View style={styles.fila1}>
        <Text style={styles.titulo}>NUEVO ESTABLECIMIENTO</Text>
      </View>
      <View style={styles.fila2}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={() => onRefresh()} />
          }
        >
          <Input
            placeholderColor={placeholderColor}
            placeholder="Nombre"
            maxLength={100}
            value={establecimiento.nombre}
            onChangeText={(dato) => cambiarDato("nombre", dato)}
          />
          <Dropdownlist
            placeholder="Seleccionar categoría"
            styleTexto={
              categoriaSeleccionada > 0
                ? styles.dropdownlistActivo
                : styles.dropdownlistInactivo
            }
            data={listaCategorias}
            setSelected={setCategoriaSeleccionada}
            onSelect={() => cambiarDato("categoria", categoriaSeleccionada)}
          />
          <Dropdownlist
            placeholder="Seleccionar ciudad"
            styleTexto={
              ciudadSeleccionada > 0
                ? styles.dropdownlistActivo
                : styles.dropdownlistInactivo
            }
            data={listaCiudades}
            setSelected={setCiudadSeleccionada}
            onSelect={() => cambiarDato("ciudad", ciudadSeleccionada)}
          />
          <View style={styles.contenedorDireccion}>
            <TextInput
              style={styles.calle}
              autoCorrect={false}
              placeholder="Calle"
              placeholderTextColor={placeholderColor}
              value={establecimiento.calle}
              onChangeText={(dato) => cambiarDato("calle", dato)}
            />
            <TextInput
              style={styles.numero}
              autoCorrect={false}
              placeholder="Número"
              placeholderTextColor={placeholderColor}
              keyboardType="number-pad"
              value={establecimiento.nroCalle}
              onChangeText={(dato) => cambiarDato("nroCalle", dato)}
            />
          </View>
          <Input
            placeholderColor={placeholderColor}
            placeholder="Horarios"
            maxLength={100}
            value={establecimiento.horarios}
            onChangeText={(dato) => cambiarDato("horarios", dato)}
          />
          <Input
            placeholderColor={placeholderColor}
            placeholder="Descripción"
            maxLength={300}
            value={establecimiento.descripcion}
            onChangeText={(dato) => cambiarDato("descripcion", dato)}
          />
          <Input
            placeholderColor={placeholderColor}
            placeholder="Teléfono"
            keyboardType="number-pad"
            maxLength={30}
            value={establecimiento.telefono}
            onChangeText={(dato) => cambiarDato("telefono", dato)}
          />
          <Input
            placeholderColor={placeholderColor}
            placeholder="Instagram"
            maxLength={150}
            value={establecimiento.insta}
            onChangeText={(dato) => cambiarDato("insta", dato)}
            autoCapitalize="none"
          />
          <Input
            placeholderColor={placeholderColor}
            placeholder="Facebook"
            maxLength={150}
            value={establecimiento.face}
            onChangeText={(dato) => cambiarDato("face", dato)}
          />
          <Input
            placeholderColor={placeholderColor}
            placeholder="Página web"
            keyboardType="url"
            maxLength={70}
            value={establecimiento.web}
            onChangeText={(dato) => cambiarDato("web", dato)}
            autoCapitalize="none"
          />
          <AgregarFotos
            setImagenesGuardadas={setImagenesGuardadas}
            imagenesGuardadas={imagenesGuardadas}
          />
          {estaGuardando && (
            <Cargando
              styleContenedor={styles.contenedorCargando}
              color={Colores.rosaActivo}
              styleIndicador={styles.indicador}
            />
          )}
          <BotonPrincipal texto="AGREGAR" onPress={nvoEstablecimiento} />
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
  contenedorDireccion: {
    flexDirection: "row",
    width: "100%",
  },
  calle: {
    flex: 3,
    borderColor: Colores.secundario,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
    paddingHorizontal: 30,
    marginVertical: 3,
    height: 42,
  },
  numero: {
    flex: 1,
    borderColor: Colores.secundario,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
    paddingHorizontal: 30,
    marginVertical: 3,
    height: 42,
    marginLeft: 5,
  },
  contenedorCargando: {
    position: "absolute",
    marginVertical: 250,
    marginHorizontal: 150,
  },
  mensaje: {
    fontSize: 16,
    marginBottom: 12,
    color: Colores.principal,
  },
  indicador: {
    transform: [{ scaleX: 2 }, { scaleY: 2 }],
  },
  dropdownlistActivo: {
    color: "black",
  },
  dropdownlistInactivo: {
    color: Colores.gris,
  },
});
