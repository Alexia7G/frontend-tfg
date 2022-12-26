import { StyleSheet, Pressable, Alert } from "react-native";
import IconoMas from "../IconoMas";

const BotonAgregar = ({ style }) => {
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed}>
      <IconoMas style={style} />
    </Pressable>
  );
};

export default BotonAgregar;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.8,
  },
});
