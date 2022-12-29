import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  usuario: [],
  authenticate: (dato) => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState(); //no pongo valor inicial, porque al inicio no hay token
  const [usuario, setUsuario] = useState([]);

  //NO FUNCIONA
  // useEffect(() => {
  //   async function fetchToken() {
  //     const storedToken = await AsyncStorage.get("token");

  //     if (storedToken) {
  //       setAuthToken(storedToken);
  //     }
  //   }
  //   fetchToken();
  // }, []);

  function authenticate(dato) {
    setAuthToken(dato.token);
    setUsuario(dato);

    //NO FUNCIONA
    //así se almacena el token en el almacenamiento del cel
    //AsyncStorage.setItem("token", token); //1 parámetro es el nombre
  }
  function logout(token) {
    setAuthToken(null);
  }

  const value = {
    token: authToken,
    usuario: usuario,
    isAuthenticated: !!authToken, //si authtoken no tiene dato va a ser false
    authenticate: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
