import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Colores from "../../Constantes/colores";
import BotonPrincipal from "../Botones/BotonPrincipal";
import Input from "../Input";

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "confirmEmail":
        setEnteredConfirmEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }
  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }
  const placeholderColor = Colores.gris;
  return (
    <View>
      <Input
        placeholder="Email Address"
        placeholderTextColor={placeholderColor}
        onChangeText={updateInputValueHandler.bind(this, "email")}
        value={enteredEmail}
        keyboardType="email-address"
        invalido={emailIsInvalid}
        autoCapitalize="none"
      />
      {!isLogin && (
        <Input
          placeholder="Confirm Email Address"
          placeholderTextColor={placeholderColor}
          onChangeText={updateInputValueHandler.bind(this, "confirmEmail")}
          value={enteredConfirmEmail}
          keyboardType="email-address"
          invalido={emailsDontMatch}
          autoCapitalize="none"
        />
      )}
      <Input
        placeholder="Password"
        placeholderTextColor={placeholderColor}
        onChangeText={updateInputValueHandler.bind(this, "password")}
        secure
        value={enteredPassword}
        invalido={passwordIsInvalid}
      />
      {!isLogin && (
        <Input
          placeholder="Confirm Password"
          placeholderTextColor={placeholderColor}
          onChangeText={updateInputValueHandler.bind(this, "confirmPassword")}
          secure
          value={enteredConfirmPassword}
          invalido={passwordsDontMatch}
        />
      )}
      <BotonPrincipal
        texto={isLogin ? "Ingresar" : "Registrarse"}
        onPress={submitHandler}
      />
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({});
