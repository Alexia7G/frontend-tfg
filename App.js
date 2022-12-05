import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ImageBackground, Pressable, Image } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import IconoFavoritos from "./componentes/IconoFavoritos";

import InicioScreen from "./screens/InicioScreen";
import MapaScreen from "./screens/MapaScreen";
import CuentaScreen from "./screens/CuentaScreen";
import FavoritosScreen from "./screens/FavoritosScreen";
import Colores from "./Constantes/colores";

const BottonTab = createBottomTabNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ImageBackground
        source={require("./assets/images/fondo.png")}
        resizeMode="cover"
        style={styles.rootScreen}
      >
        <NavigationContainer theme={navTheme}>
          <BottonTab.Navigator
            initialRouteName="Inicio"
            screenOptions={{
              tabBarActiveTintColor: "#FFFFFF",
              tabBarInactiveTintColor: "#FFFFFF77",
              tabBarActiveBackgroundColor: Colores.principal,
              tabBarInactiveBackgroundColor: Colores.principal,
            }}
          >
            <BottonTab.Screen
              name="Inicio"
              component={InicioScreen}
              options={{
                title: "INICIO",
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" color={color} size={size} />
                ),
              }}
            />
            <BottonTab.Screen
              name="Mapa"
              component={MapaScreen}
              options={{
                title: "VISTA MAPA",
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome5
                    name="map-marked-alt"
                    size={size}
                    color={color}
                  />
                ),
              }}
            />
            <BottonTab.Screen
              name="Cuenta"
              component={CuentaScreen}
              options={{
                title: "MI CUENTA",
                headerShown: false,
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="account-circle-outline"
                    color={color}
                    size={30}
                  />
                ),
              }}
            />
            <BottonTab.Screen
              name="Favoritos"
              component={FavoritosScreen}
              options={{
                title: "FAVORITOS",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <IconoFavoritos style={ focused ? styles.activo : styles.inactivo} />
                ),
              }}
            />
          </BottonTab.Navigator>
        </NavigationContainer>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    width: "100%",
    height: "32%",
  },
  activo: {
    opacity: 1,
    width: 28,
    height: 28,
  },
  inactivo: {
    opacity: 0.6,
    width: 28,
    height: 28,
  },
});
//<IconoFavoritos />
