import AuthContent from "../componentes/Auth/AuthContent";
import { useState, useContext } from "react";
import Cargando from "../componentes/Cargando";
import { login } from "../api";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false); //inicia falso porque cuando la pantalla se carga por primera vez no está autenticando

  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
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
    return <Cargando mensaje="Iniciando sesión..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;

