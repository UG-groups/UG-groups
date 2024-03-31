import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
//* UI comps.
import FormInput from "../../components/atoms/FormInput";
//* Styling
import styles from "./styles";
import Colors from "../../constants/Colors";

export default function Login() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.beeBoxContainer}>
          <BeeBox />
        </View>
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

function BeeBox() {
  return (
    <View style={styles.beeBox}>
      <Image
        style={styles.beeImg}
        source={require("../../assets/images/bee_emoji.png")}
      />
    </View>
  );
}

function LoginForm() {
  const router = useRouter();

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
      <View style={styles.dividerContainer}>
        <View style={styles.divider}></View>
        <Text style={styles.dividerText}>O</Text>
        <View style={styles.divider}></View>
      </View>
      <Pressable
        style={[
          styles.buttonForm,
          {
            marginVertical: 0,
            backgroundColor: "transparent",
            borderWidth: 3,
            borderColor: Colors.pallete.primary,
          },
        ]}
        onPress={() => router.push("signup")}
      >
        <Text
          style={[styles.buttonFormText, { color: Colors.pallete.primary }]}
        >
          Crear una cuenta
        </Text>
      </Pressable>
    </View>
  );
}
