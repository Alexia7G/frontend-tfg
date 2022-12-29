import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import Colores from "../Constantes/colores";

function Cargando({ mensaje, styleContenedor, styleMensaje, styleIndicador, color }) {
  return (
    <View style={styleContenedor}>
      <Text style={styleMensaje}>{mensaje}</Text>
      <ActivityIndicator size="large" color={color} style={styleIndicador} />
    </View>
  );
}

export default Cargando;
