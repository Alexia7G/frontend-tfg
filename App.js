import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import IconoFavoritos from "./componentes/IconoFavoritos";
import IconoMas from "./componentes/IconoMas";

import InicioScreen from "./screens/InicioScreen";
import MapaScreen from "./screens/MapaScreen";
import CuentaScreen from "./screens/CuentaScreen";
import FavoritosScreen from "./screens/FavoritosScreen";
import NuevoEstablecimientoScreen from "./screens/NuevoEstablecimientoScreen";

import Colores from "./Constantes/colores";
import LoginScreen from "./screens/LoginScreen";
import RegistrarseScreen from "./screens/RegistrarseScreen";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import { useContext } from "react";

const BottonTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

function VistaDeslogueado() {
  return (
    <ImageBackground
      source={require("./assets/images/fondoLiso.png")}
      resizeMode="cover"
      style={styles.ImageBackgroundLogin}
    >
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colores.principal },
          headerTintColor: "white",
          contentStyle: { backgroundColor: Colores.secundario },
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Registrarse"
          component={RegistrarseScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </ImageBackground>
  );
}

function VistaLogueado() {
  const authCxt = useContext(AuthContext);
  return (
    <ImageBackground
      source={require("./assets/images/fondo.png")}
      resizeMode="cover"
      style={styles.ImageBackgroundLogueado}
    >
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
              <FontAwesome5 name="map-marked-alt" size={size} color={color} />
            ),
          }}
        />
        <BottonTab.Screen
          name="Cuenta"
          component={CuentaScreen}
          options={{
            title: "MI CUENTA",
            //headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-circle-outline"
                color={color}
                size={30}
              />
            ),
            headerRight: ({ tintColor }) => (
              <Ionicons
                name="exit"
                size={24}
                color={tintColor}
                onPress={authCxt.logout}
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
              <IconoFavoritos
                style={[
                  focused ? styles.activo : styles.inactivo2,
                  styles.tamFavorito,
                ]}
              />
            ),
          }}
        />
        <BottonTab.Screen
          name="Agregar"
          component={NuevoEstablecimientoScreen}
          options={{
            headerShown: false,
            title: "",
            tabBarIcon: ({ focused }) => (
              <IconoMas
                style={[
                  focused ? styles.activo : styles.inactivo,
                  styles.flotante,
                ]}
              />
            ),
          }}
        />
      </BottonTab.Navigator>
    </ImageBackground>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer theme={navTheme}>
      {!authCtx.isAuthenticated && <VistaDeslogueado />}
      {authCtx.isAuthenticated && <VistaLogueado />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  ImageBackgroundLogueado: {
    flex: 1,
    width: "100%",
    height: "32%",
  },
  ImageBackgroundLogin: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  activo: {
    opacity: 1,
  },
  inactivo: {
    opacity: 0.8,
  },
  inactivo2: {
    opacity: 0.6,
  },
  tamFavorito: {
    width: 28,
    height: 28,
  },
  flotante: {
    position: "absolute",
    top: -25,
    width: 50,
    height: 50,
  },
});
