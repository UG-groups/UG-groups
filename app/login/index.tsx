import React from "react";
import { View, Text, Button, SafeAreaView, StatusBar } from "react-native";
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
      </SafeAreaView>
    </>
  );
}

export function LoginForm() {
  return (
    <View>
      <View>
        <FormInput placeholder="Correo Electrónico" />
      </View>
      <View>
        <View>
          <FormInput placeholder="Correo Electrónico" />
        </View>
      </View>
      <Button title="Ingresar" onPress={() => {}} />
    </View>
  );
}
