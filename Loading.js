import React from "react";
import {StyleSheet, Text, View, StatusBar} from "react-native";


export default function Loading() {
  return(
    <View style={styles.container}>
      <StatusBar barStyle="white-content"></StatusBar>
      <Text style={styles.text}>Wheather-App</Text>
      <Text style={styles.text}>just for you😀</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#42ddf5",
  },
  text: {
    color: "white",
    fontSize: 30
  }
})