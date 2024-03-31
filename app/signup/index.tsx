import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
} from "react-native";
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
        <Text style={styles.loginTitle}>Crear una cuenta</Text>
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
        <Pressable onPress={() => {}}>
          <Text style={styles.forgetText}>
            <Text style={{ color: "#fff" }}>¿Ya tienes una cuenta?</Text> Inicia
            sesión
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
