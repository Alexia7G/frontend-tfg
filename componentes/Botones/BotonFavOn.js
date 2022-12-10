import { StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'

const BotonFavOn = ({ style }) => {
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed}>
      <Image source={require("../../assets/images/favOff.png")} style={style} />
    </Pressable>
  )
}

export default BotonFavOn

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.6,
      },
})