import React from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Form from "./src/components/Form";
import Signup from "./src/components/Signup";

const App = () => {
  return <Form />;
  <Signup />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 16,
  },
});

export default App;
