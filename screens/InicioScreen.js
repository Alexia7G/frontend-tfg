import { StyleSheet, Text, View, FlatList, Button, Image, RefreshControl } from "react-native";
import { getEstablecimientos, getImagenesXId, URL_BASE } from "../api";
import { useNavigation } from "@react-navigation/native";
import SelectList from "../componentes/Dropdownlist";
import InputConIcono from "../componentes/InputConIcono";
import Card from "../componentes/Card";

import Colores from "../Constantes/colores";
import Logo from "../componentes/Logo";
import { useEffect, useState } from "react";

const InicioScreen = () => {
  const navigation = useNavigation();

  const [listaEstablecimientos, setListaEstablecimientos] = useState([]);

  const [imagenes, setImagenes] = useState([]);

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    cargaEstablecimientos();
    cargaImagenes();
  }, []);

  const cargaEstablecimientos = async () => {
    let response = await getEstablecimientos();
    const lista = response.map((es) => {
      return {
        id: es.es_id_establecimiento,
        nombre: es.es_establecimiento,
        categoria: es.es_cat_categoria,
        ciudad: es.es_ci_ciudad,
        calle: es.es_calle,
        nroCalle: es.es_nro_calle,
        horarios: es.es_horarios,
        descripcion: es.es_descripcion,
        telefono: es.es_telefono,
        insta: es.es_instagram,
        face: es.es_facebook,
        web: es.es_web,
      };
    });
    setListaEstablecimientos(lista);
  };

  const cargaImagenes = async () => {
    let response = await getImagenesXId();
    const lista = response.map((i) => {
      return {
        data: i.data,
        ruta: i.ruta,
      };
    });
    setImagenes(lista);
  };

  function renderList(itemData) {
    function seleccionarLugar() {
      navigation.navigate("Detalles", {
        datos: itemData.item,
      });
    }

    const urlImg = `${URL_BASE}/uploads/${itemData.item.id}_imagen_0`;

    return (
      <Card
        titulo={itemData.item.nombre}
        direccion={`${itemData.item.calle} ${itemData.item.nroCalle}`}
        onPress={seleccionarLugar}
        imagen={urlImg}
      />
    );
  }

  const press = () => {
    //console.log(imagenes[0].ruta);
    //console.log("first")
    // <Image style={{width: 100, height: 50, borderWidth: 1, borderColor: 'red'}}  source={{uri: `data:image/jpeg;base64,${imagenes[0].data}`}} />
  };

  const onRefresh = () => {
    setRefresh(true);

    setTimeout(() => {
      cargaEstablecimientos();
      cargaImagenes();
      setRefresh(false);
    }, 1000);
  };

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
      {/* <Button title="prueba" onPress={press} />  */}
      {/* <Image style={styles.logo} source={{uri: `${URL_BASE}/uploads/${}_imagen_0`}} /> */}
      <View style={styles.fila3}>
        <FlatList
          style={styles.flatLit}
          data={listaEstablecimientos}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={renderList}
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={() => onRefresh()}
            />
          }
        />
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
  div: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  flatLit: {
    marginBottom: 50,
    marginTop: 15,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
