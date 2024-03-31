import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default function FormInput({ placeholder }: { placeholder: string }) {
  return <TextInput placeholder={placeholder} style={styles.input} />;
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    width: "100%",
    marginBottom: 20,
    borderWidth: 2,
    paddingHorizontal: 15,
    borderColor: Colors.pallete.lightGray,
    borderRadius: 12,
    color: "#fff",
    backgroundColor: "transparent",
  },
});
