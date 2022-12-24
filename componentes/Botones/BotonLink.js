import { Pressable, StyleSheet, Text, View } from "react-native";
import Colores from "../../Constantes/colores";

function BotonLink({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.boton, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.texto}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default BotonLink;

const styles = StyleSheet.create({
  boton: {
    marginTop: -50,
    paddingHorizontal: 12,
  },
  pressed: {
    opacity: 0.7,
  },
  texto: {
    textAlign: "center",
    color: Colores.principal,
    fontSize: 15,
  },
});
