import React from "react";
import { View, Text, Pressable, SafeAreaView, StatusBar } from "react-native";
//* UI comps.
import FormInput from "../../components/atoms/FormInput";
//* Styling
import styles from "./styles";

export default function Login() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.loginTitle}>Inicia Sesión</Text>
        <Text style={styles.loginSubtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          tincidunt emmet.
        </Text>
        <LoginForm />
      </SafeAreaView>
    </>
  );
}

export function LoginForm() {
  return (
    <View style={styles.formContainer}>
      <View>
        <FormInput placeholder="Correo Electrónico" />
      </View>
      <View>
        <View>
          <FormInput placeholder="Contraseña" />
        </View>
      </View>
      <View>
        <Pressable style={styles.buttonForm} onPress={() => {}}>
          <Text style={styles.buttonFormText}>Ingresar</Text>
        </Pressable>
        <Pressable onPress={() => {}}>
          <Text style={styles.forgetText}>¿Olvidaste tu contraseña?</Text>
        </Pressable>
      </View>
    </View>
  );
}
