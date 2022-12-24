import {
  FlatList,
  SafeAreaView,
  Alert,
  RefreshControl,
  StyleSheet,
  View,
  Text,
} from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import { getEstablecimientos } from "../api";
import { useIsFocused } from "@react-navigation/native";

const PruebaScreen = () => {
  const [establecimiento, setEstablecimiento] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();

  const getLugares = async () => {
    try {
      const establecimientos = await getEstablecimientos();
      setEstablecimiento(establecimientos);
    } catch (error) {
      console.log(error);
    }
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getLugares();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    getLugares();
    console.log("llamada getLugares");
  }, [isFocused]);

  const renderItem = ({ item }) => (
    <Text >{item.ci_ciudad}</Text>
  );

  
  return (
      <SafeAreaView style={styles.contenedor}>
      <FlatList
        data={establecimiento}
        renderItem={renderItem}
        keyExtractor={(item) => item.ci_id_ciudad.toString()}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#78e08f"]}
          />
        }
      />
    </SafeAreaView>
  );
};

export default PruebaScreen;

const styles = StyleSheet.create({
  contenedor: {
    justifyContent: "center",
    alignItems: "center",
    padding: 100,
  },
});
