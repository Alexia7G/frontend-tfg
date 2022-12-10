import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colores from "../Constantes/colores";
import BotonAgregar from "./Botones/BotonAgregar";
import Comentarios from "./Comentarios";
import Puntuar from "./Botones/Puntuar";

const DatosEstablecimiento = () => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.calificar}>
        <Text>¿Quieres calificar este lugar?</Text>
        <Puntuar size={18} />
      </View>
      <View style={styles.lineaCalificar}></View>
      <View style={styles.direccion}>
        <Ionicons name="location-sharp" size={17} color={Colores.secundario} />
        <Text style={styles.texto}>Dirección del establecimiento</Text>
        <Pressable style={({ pressed }) => pressed && styles.pressed}>
          <FontAwesome5
            name="map-marked-alt"
            size={25}
            color={Colores.secundario}
            style={styles.botonMapa}
          />
        </Pressable>
      </View>
      <View style={styles.lineaConIcono}>
        <FontAwesome5 name="clock" size={16} color={Colores.secundario} />
        <Text style={styles.texto}>Horarios</Text>
      </View>
      <View style={styles.horas}>
        <Text style={styles.texto}>Lunes a viernes de 9 a 18h</Text>
        <Text style={styles.texto}>Sábados de 10 a 13h</Text>
      </View>
      <View style={styles.descripcion}>
        <Text style={styles.textoDescripcion}>
          Descripción de establecimiento
        </Text>
      </View>
      <View style={styles.lineaConIcono}>
        <Ionicons
          name="ios-logo-whatsapp"
          size={17}
          color={Colores.secundario}
        />
        <Text style={styles.texto}>Teléfono</Text>
      </View>
      <View style={styles.lineaConIcono}>
        <MaterialCommunityIcons
          name="web"
          size={18}
          color={Colores.secundario}
        />
        <Text style={styles.texto}>Página web</Text>
      </View>
      <View style={styles.lineaConIcono}>
        <Ionicons name="logo-facebook" size={17} color={Colores.secundario} />
        <Text style={styles.texto}>Facebook</Text>
      </View>
      <View style={styles.lineaConIcono}>
        <Ionicons name="logo-instagram" size={18} color={Colores.secundario} />
        <Text style={styles.texto}>Instagram</Text>
      </View>

      <View style={styles.lineas}>
        <View style={styles.comentarios}>
          <FontAwesome5 name="comment" size={18} color={Colores.secundario} />
          <Text style={styles.texto}>Comentarios</Text>
          <BotonAgregar style={styles.flotante} />
        </View>
      </View>
      <View>
        <Comentarios />
        <Comentarios />
        <Comentarios />
        <Comentarios />
      </View>
    </View>
  );
};

export default DatosEstablecimiento;

const styles = StyleSheet.create({
  contenedor: {
    marginHorizontal: 18,
    width: "90%",
  },
  calificar: {
    flexDirection: "row",
    marginTop: 10,
    paddingHorizontal: 3,
  },
  lineaCalificar: {
    borderBottomColor: Colores.secundario,
    borderBottomWidth: 2,
    marginTop: 10,
    opacity: 0.2,
  },
  direccion: {
    flexDirection: "row",
    marginTop: 15,
  },
  texto: {
    paddingRight: 10,
    paddingLeft: 3,
  },
  pressed: {
    opacity: 0.6,
  },
  botonMapa: {
    marginTop: -5,
  },
  lineaConIcono: {
    flexDirection: "row",
    marginTop: 5,
  },
  horas: {
    marginLeft: 35,
  },
  descripcion: {
    marginTop: 5,
    borderColor: Colores.secundario,
    borderWidth: 2,
    borderRadius: 10,
  },
  textoDescripcion: {
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  lineas: {
    marginTop: 15,
    borderTopColor: Colores.secundario,
    borderTopWidth: 2,
    borderBottomColor: Colores.secundario,
    borderBottomWidth: 2,
    padding: 5,
    marginHorizontal: -20,
  },
  comentarios: {
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  flotante: {
    position: "absolute",
    top: -14,
    width: 45,
    height: 45,
    marginLeft: 190,
  },
});
