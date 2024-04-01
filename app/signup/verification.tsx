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

export default function Verification() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.beeBoxContainer}>
          <BeeBox />
        </View>
        <Text style={styles.loginTitle}>Código de verificación</Text>
        <Text style={styles.loginSubtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          tincidunt emmet.
        </Text>
        <VerificationForm />
      </SafeAreaView>
    </>
  );
}

function BeeBox() {
  return (
    <View style={styles.beeBox}>
      <Image
        style={[styles.beeImg, { width: 30, height: 30 }]}
        source={require("../../assets/images/monkey_emoji.png")}
      />
    </View>
  );
}

function VerificationForm() {
  const router = useRouter();

  return (
    <View style={styles.formContainer}>
      <View>
        <FormInput placeholder="Correo Electrónico" />
      </View>
      <View>
        <Pressable style={styles.buttonForm} onPress={() => {}}>
          <Text style={styles.buttonFormText}>Continuar</Text>
        </Pressable>
        <Pressable
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => router.push("login")}
        >
          <Text style={styles.forgetText}>Volver a inicio de sesión</Text>
        </Pressable>
      </View>
    </View>
  );
}
