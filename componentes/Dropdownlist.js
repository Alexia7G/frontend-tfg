import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import Colores from "../Constantes/colores";


const Dropdownlist = ({ placeholder }) => {
  const [seleccionado, setSeleccionado] = useState("");

  const data = [
    //{ key: "1", value: "Mobiles", disabled: true },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    //{ key: "4", value: "Computers", disabled: true },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];

  return (
      <SelectList
        boxStyles={styles.contenedorBox}
        inputStyles={styles.input}
        dropdownTextStyles={styles.opciones}
        setSelected={(val) => setSelected(val)}
        data={data}
        save="value"
        search={false}
        searchPlaceholder="Buscar"
        placeholder={placeholder}
      />
  );
};

export default Dropdownlist;

const styles = StyleSheet.create({
  contenedorBox: {
    borderColor: Colores.secundario,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
    paddingHorizontal: 25,
    marginVertical: 3,
    height: 45,
  },
  input: {
    color: Colores.gris,
    marginTop: -2,
  },
  opciones: {
    marginVertical: -5,
    marginHorizontal: 8,
  }
});
