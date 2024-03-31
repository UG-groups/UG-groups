import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default function FormInput({ placeholder }: { placeholder: string }) {
  return <TextInput placeholder={placeholder} style={styles.input} />;
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    borderColor: Colors.pallete.lightGray,
  },
});
