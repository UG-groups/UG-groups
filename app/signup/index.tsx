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

export default function SignUp() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.beeBoxContainer}>
          <BeeBox />
        </View>
        <Text style={styles.loginTitle}>Crear una cuenta</Text>
        <Text style={styles.loginSubtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          tincidunt emmet.
        </Text>
        <SignUpForm />
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

function SignUpForm() {
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
        <Pressable
          style={styles.buttonForm}
          onPress={() => router.push("/signup/verification")}
        >
          <Text style={styles.buttonFormText}>Crear cuenta</Text>
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={[styles.forgetText, { color: "#fff", marginRight: 5 }]}>
            ¿Ya tienes una cuenta?
          </Text>
          <Pressable onPress={() => router.push("login")}>
            <Text style={styles.forgetText}>Inicia sesión</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
