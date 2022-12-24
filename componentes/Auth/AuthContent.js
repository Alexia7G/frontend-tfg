import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BotonLink from "../Botones/BotonLink";
import AuthForm from "./AuthForm";
import Colores from "../../Constantes/colores";
import Logo from "../Logo";

//isLogin lo recibo de LoginScreen.js
function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation(); //recordar: lo llamo así porque esto no es una screen declarada en app.js

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      //usar replace en lugar de navigate en este caso. Navigate va a habilitar un botón para volver atrás (la flechita), replace no
      //navigation.navigate("Signup");
      navigation.navigate("Registrarse");
    } else {
      navigation.navigate("Login");
    }
  }

  function submitHandler(credentials) {
    let { email, confirmEmail, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert(
        "Datos incorrectos",
        "Chequea los datos ingresados, por favor"
      );
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <>
      <Logo style={styles.logo} />
      <View style={styles.authContent}>
        <AuthForm
          isLogin={isLogin}
          onSubmit={submitHandler}
          credentialsInvalid={credentialsInvalid}
        />
        <BotonLink onPress={switchAuthModeHandler}>
          {isLogin ? "Crear un nuevo usuario" : "Iniciar sesión"}
        </BotonLink>
      </View>
    </>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginTop: "70%",
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 16,
    borderColor: Colores.principal,
    borderWidth: 4,
    backgroundColor: "white",
    elevation: 6,
  },
  logo: {
    width: "90%",
    height: 120,
    marginHorizontal: 25,
    marginVertical: 90,
    opacity: 0.9,
  },
});
