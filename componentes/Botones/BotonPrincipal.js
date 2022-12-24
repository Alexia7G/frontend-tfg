import { StyleSheet, Text, Pressable, View } from "react-native";
import React from "react";
import Colores from "../../Constantes/colores";

const BotonPrincipal = ({ texto, onPress, style }) => {
  return (
    <View style={{...styles.alinear, ...style}}>
      <Pressable
        style={({ pressed }) => [styles.contenedor, pressed && styles.pressed]}
        onPress={onPress}
      >
        <Text style={styles.texto}>{texto}</Text>
      </Pressable>
    </View>
  );
};

export default BotonPrincipal;

const styles = StyleSheet.create({
  alinear: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 13,
    marginBottom: 60,
  },
  contenedor: {
    borderRadius: 15,
    backgroundColor: Colores.rosaBoton,
    height: 40,
    width: "60%",
    elevation: 4,
    borderWidth: 2,
    borderColor: '#F5F3EE'
  },
  pressed: {
    opacity: 0.6,
  },
  texto: {
    flex: 5,
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
    padding: 5
  },
});
