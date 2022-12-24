import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import Colores from "../Constantes/colores";

function Cargando({ mensaje }) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.mensaje}>{mensaje}</Text>
      <ActivityIndicator size="large" color='white' />
    </View>
  );
}

export default Cargando;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    backgroundColor: Colores.principal,
  },
  mensaje: {
    fontSize: 16,
    marginBottom: 12,
    color: "white",
  },
});
