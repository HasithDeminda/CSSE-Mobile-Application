import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function MaterialUnderlineTextbox2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder="000"
        placeholderTextColor="rgba(155,155,155,1)"
        dataDetector="phoneNumber"
        style={styles.inputStyle}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    flex: 1,
    lineHeight: 16,
    paddingTop: 16,
    paddingBottom: 8,
    textAlign: "justify",
    alignSelf: "stretch"
  }
});

export default MaterialUnderlineTextbox2;
