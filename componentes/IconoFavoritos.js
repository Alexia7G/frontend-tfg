import { StyleSheet, Pressable, Image, Text } from "react-native";
import React from "react";

const IconoFavoritos = ({ style }) => {
  return (
    <Image 
    source={require("../assets/images/favoritos.png")} 
    style={style} />
  );
};

export default IconoFavoritos;

const styles = StyleSheet.create({
});
