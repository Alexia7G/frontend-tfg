import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import AuthContextProvider, { AuthContext } from "../store/auth-context";
import Logo from "../componentes/Logo";
import Colores from "../Constantes/colores";

const CuentaScreen = () => {
  const authCxt = useContext(AuthContext);

  const email = authCxt.usuario.email;

  return (
    <View style={styles.contenedor}>
      <Logo />
      <View style={styles.fila1}>
        <View style={styles.contenedorTitulo}>
          <Text style={styles.titulo}>MI CUENTA</Text>
        </View>
        <View style={styles.contenedorCerrar}>
          <Ionicons
            name="exit"
            size={40}
            color="white"
            onPress={authCxt.logout}
            style={styles.iconoCerrar}
          />
          <Text style={styles.textoCerrar}>Cerrar Sesión</Text>
        </View>
      </View>
      <View style={styles.fila2}>
        <MaterialIcons
          name="account-circle"
          size={300}
          color={Colores.secundario}
        />
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

export default CuentaScreen;

const styles = StyleSheet.create({
  contenedor: {
    marginTop: 25,
    flexDirection: "column",
    height: "100%",
  },
  fila1: {
    flex: 3.5,
  },
  fila2: {
    flex: 10,
    alignItems: "center",
  },
  titulo: {
    color: "white",
    fontSize: 35,
  },
  contenedorTitulo: {
    marginTop: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  contenedorCerrar: {
    marginTop: 16,
    marginLeft: "70%",
  },
  iconoCerrar: {
    marginLeft: 32,
  },
  textoCerrar: {
    color: "white",
    fontSize: 15,
  },
  email: {
    fontSize: 20,
    color: Colores.principal,
    fontWeight: "bold",
  },
});
