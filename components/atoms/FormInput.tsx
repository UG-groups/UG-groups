import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default function FormInput({
  placeholder,
  onUpdateField,
}: {
  placeholder: string;
  onUpdateField: (value: string) => void;
}) {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      onChangeText={onUpdateField}
    />
  );
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
