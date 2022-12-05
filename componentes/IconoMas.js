import { StyleSheet, Image } from 'react-native'
import React from 'react'

const IconoMas = ({ style }) => {
  return (
    <Image 
    source={require("../assets/images/agregar.png")} 
    style={style} />
  )
}

export default IconoMas

const styles = StyleSheet.create({})