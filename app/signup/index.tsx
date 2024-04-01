import React, { useState } from "react";
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

const signUpForm = {
  firstName: "",
  lastName: "",
  email: "",
  bio: "",
  userType: "",
  division: "",
  academicLevel: "",
  degreeName: "",
  password: "",
  passwordConfirm: "",
  captchaToken: "",
};

function SignUpForm() {
  const router = useRouter();
  const [signUpData, setSignUpData] = useState(signUpForm);

  console.log("SIGN UP DATA -> ", signUpData);

  const handleSendRequest = async () => {
    try {
      const response = await fetch("http://164.90.152.172/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpData),
      });
      const data = await response.json();
      console.log("SIGN UP RESPONSE -> ", data);
    } catch (error) {
      console.log("SIGN UP ERROR -> ", error);
    }
  };

  return (
    <View style={styles.formContainer}>
      <View>
        <FormInput
          placeholder="Correo Electrónico"
          onUpdateField={(text: string) =>
            setSignUpData({ ...signUpData, email: text })
          }
        />
      </View>
      <View>
        <View>
          <FormInput
            placeholder="Contraseña"
            onUpdateField={(text: string) =>
              setSignUpData({ ...signUpData, password: text })
            }
          />
        </View>
      </View>
      <View>
        <Pressable style={styles.buttonForm} onPress={handleSendRequest}>
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
