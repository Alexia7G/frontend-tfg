import AuthContent from "../componentes/Auth/AuthContent";
import { useState, useContext } from "react";
import Cargando from "../componentes/Cargando";
import { login } from "../api";
import { Alert, StyleSheet } from "react-native";
import { AuthContext } from "../store/auth-context";
import Colores from "../Constantes/colores";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false); //inicia falso porque cuando la pantalla se carga por primera vez no está autenticando

  const authCtx = useContext(AuthContext);

 const loginHandler = async ({ email, password }) => {
    setIsAuthenticating(true); //está autenticando
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Fallo la autenticación",
        "Chequea los datos ingresados, por favor"
      );
      setIsAuthenticating(false); //finalizó el proceso de autenticar
    }
  }

  if (isAuthenticating) {
    return (
      <Cargando
        mensaje="Iniciando sesión..."
        styleContenedor={styles.contenedor}
        styleMensaje={styles.mensaje}
        color="white"
      />
    );
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    backgroundColor: Colores.principal,
  },
  mensaje: {
    fontSize: 16,
    marginBottom: 12,
    color: "white",
  },
});
