import { StyleSheet, Text, View, Image } from "react-native";
import { useCallback, useLayoutEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import Colores from "../Constantes/colores";
import Logo from "../componentes/Logo";

const MapaScreen = () => {
  //const [selectedLocation, setSelectedLocation] = useState(initialLocation);

  const region = {
    latitude: -31.4, //define el centro de la pantalla
    longitude: -64.18, //define el centro de la pantalla
    latitudeDelta: 0.222, //define cuando contenido además del centro es visible
    longitudeDelta: 0.1421, //define cuando contenido además del centro es visible
  };

  return (
    <View>
      <View style={styles.contenedor1}>
        <Logo />
      </View>
      <View style={styles.contenedor2}>
        <MapView style={styles.map} initialRegion={region}>
          <Marker
            title="Ubi elegida"
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
          />
        </MapView>
      </View>
    </View>
  );
};

export default MapaScreen;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  contenedor1: {
    //marginTop: 235,
    //height: 510,
    borderColor: "black",
    borderWidth: 2,
    flex: 1,
  },
  contenedor2: {
    marginTop: 235,
    height: 510,
    borderColor: Colores.secundario,
    borderWidth: 2,
  },
});
