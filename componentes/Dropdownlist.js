import { StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import Colores from "../Constantes/colores";

const Dropdownlist = ({ placeholder, setSelected, data, onSelect }) => {
  return (
    <SelectList
      boxStyles={styles.contenedorBox}
      inputStyles={styles.seleccionado}
      dropdownTextStyles={styles.opciones}
      setSelected={setSelected}
      data={data}
      save="key"
      search={false}
      searchPlaceholder="Buscar"
      placeholder={placeholder}
      onSelect={onSelect}
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
  seleccionado: {
    color: "#484949",
    marginTop: -2,
  },
  opciones: {
    marginVertical: -5,
    marginHorizontal: 8,
  },
});
