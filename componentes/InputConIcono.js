import { StyleSheet, View, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const InputConIcono = ({
  icon,
  size,
  color,
  placeholder,
  placeholderColor,
}) => {
  return (
    <View style={styles.contenedor}>
      <Ionicons name={icon} color={color} size={size} style={styles.icono} />
      <TextInput
        style={styles.inputStyle}
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
      />
    </View>
  );
};

export default InputConIcono;

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    borderColor: "#7312E0",
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
  },
  icono: {
    padding: "2%",
  },
  inputStyle: {
    flex: 1,
  },
});
