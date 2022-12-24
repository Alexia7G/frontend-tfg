import { useContext, useState } from "react";
import AuthContent from "../componentes/Auth/AuthContent";
import { createUser } from "../api";
import Cargando from "../componentes/Cargando";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function RegistrarseScreen() {
  const [estaAutenticando, setEstaAutenticando] = useState(false); //inicia falso porque cuando la pantalla se carga por primera vez no está autenticando

  const authCtx = useContext(AuthContext);

  async function registrar({ email, password }) {
    setEstaAutenticando(true); 
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("No se puede crear el usuario", "Corrobora los datos, por favor");
      setEstaAutenticando(false); //finalizó el proceso de autenticar
    }
  }

  if (estaAutenticando) {
    return <Cargando mensaje="Creando usuario..." />;
  }

  return <AuthContent onAuthenticate={registrar} />;
}

export default RegistrarseScreen;

