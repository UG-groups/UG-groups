import React from "react";
import { View, Text, Pressable, SafeAreaView, StatusBar } from "react-native";
//* UI comps.
import FormInput from "../../components/atoms/FormInput";
//* Styling
import styles from "./styles";

export default function SignUp() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.loginTitle}>Crea una cuenta</Text>
        <Text style={styles.loginSubtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          tincidunt emmet.
        </Text>
        <SignUpForm />
      </SafeAreaView>
    </>
  );
}

export function SignUpForm() {
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
          <Text style={styles.buttonFormText}>Crear cuenta</Text>
        </Pressable>
        <Pressable style={styles.forgetText} onPress={() => {}}>
          ¿Olvidaste tu contraseña?
        </Pressable>
      </View>
    </View>
  );
}
