import { StyleSheet, Image } from "react-native";
import React from "react";

const Logo = ({ style }) => {
  return (
    <Image
      source={require("../assets/images/logo.png")}
      style={{...styles.imagen, ...style}}
    />
  );
};

export default Logo;

const styles = StyleSheet.create({
  imagen: {
    width: '35%',
    height: 43,
    position: 'absolute',
    marginVertical: 5,
    marginHorizontal: 130,
    opacity: 0.6
  },
});
