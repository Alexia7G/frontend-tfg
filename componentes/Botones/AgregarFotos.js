import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Alert,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Colores from "../../Constantes/colores";
import {
  launchImageLibraryAsync,
  useCameraPermissions,
  MediaTypeOptions,
  PermissionStatus,
} from "expo-image-picker";

const AgregarFotos = ({ imagenesGuardadas, setImagenesGuardadas }) => {
  const [statusPermisos, requestPermisos] = useCameraPermissions();

  async function verifyPermissions() {
    if (
      statusPermisos.status === PermissionStatus.UNDETERMINED ||
      statusPermisos.status === PermissionStatus.DENIED
    ) {
      const permisosResponse = await requestPermisos();

      return permisosResponse.granted;
    }

    if (statusPermisos.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Permisos insuficientes",
        "Necesitas aceptar los permisos para utilizar la app"
      );
      return false;
    }

    return true;
  }

  const tomarImagen = async () => {
    const tienePermiso = await verifyPermissions();

    if (!tienePermiso) {
      return; //sale de la función y no ejecuta lo siguiente porque no hay permisos
    }

    let imagenes = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      selectionLimit: 3,
      aspect: [4, 3],
      //quality: 0.5,
      base64: true,
    });
    // console.log("Martin puto"+imagenes);
    // console.log(JSON.stringify(imagenes));
    if (!imagenes.canceled) {
      setImagenesGuardadas(imagenes.assets);
    }
  };

  return (
    <View>
      <Pressable
        style={({ pressed }) => [styles.contenedor, pressed && styles.pressed]}
        onPress={tomarImagen}
      >
        <Text style={styles.texto}>Agregar fotos</Text>
        <Image
          source={require("../../assets/images/camara.png")}
          style={styles.imagen}
        />
      </Pressable>
      <View style={styles.contenedorImagenes}>
        {imagenesGuardadas.length > 0 &&
          imagenesGuardadas.map((item, index) => (
            <Image
              key={index}
              source={{ uri: item.uri }}
              style={styles.imagenSeleccionada}
            />
          ))}
      </View>
    </View>
  );
};

{
  /*
  {imagenGuardada && (
        <Image
          source={{ uri: imagenGuardada }}
          style={styles.imagenSeleccionada}
        />
      )}
  */
}

export default AgregarFotos;

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    borderColor: Colores.secundario,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
    paddingHorizontal: 25,
    marginVertical: 3,
    height: 40,
    width: "60%",
  },
  pressed: {
    opacity: 0.6,
  },
  texto: {
    flex: 5,
    color: Colores.secundario,
    fontSize: 17,
    paddingTop: 5,
  },
  imagen: {
    flex: 1,
    width: 48,
    height: 48,
    position: "absolute",
    top: -6,
    marginLeft: 140,
  },
  imagenSeleccionada: {
    width: 50,
    height: 50,
    borderColor: Colores.secundario,
    borderWidth: 1,
    borderRadius: 6,
    margin: 2
  },
  contenedorImagenes: {
    flexDirection: 'row'
  },
});
