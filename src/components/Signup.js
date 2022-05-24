import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (text) => {
    setUserName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const handleSubmit = () => {
    console.log(email, password);
  };

  return (
    <ScrollView vertical={true} style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <SafeAreaView
        style={{
          borderWidth: 1,
          paddingHorizontal: 32,
          paddingVertical: 32,
          borderColor: "lightgrey",
          alignItems: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: "steelblue",
              paddingLeft: 15,
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            Log In
          </Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="User name"
          value={username}
          onChangeText={handleChange}
          keyboardType="text"
        ></TextInput>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry={true}
        ></TextInput>
        <View style={{ alignItems: "center", marginLeft: 60, marginTop: 10 }}>
          <Text style={{ fontSize: 10, color: "blue", fontWeight: "bold" }}>
            Forgot Password?
          </Text>
        </View>
        <TouchableOpacity
          style={{
            padding: 16,
            marginVertical: 16,
            backgroundColor: "steelblue",
            width: "50%",
            borderRadius: 15,
          }}
          onPress={handleSubmit}
        >
          <Text style={{ color: "white", paddingLeft: 15, fontWeight: "bold" }}>
            Login
          </Text>
        </TouchableOpacity>

        <View>
          <Text style={{ fontSize: 10, color: "blue", fontWeight: "bold" }}>
            Don't have an account? Sign Up
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 64,
    paddingVertical: 128,
    // alignItems: "center",
    // justifyContent: "center",
  },
  input: {
    // borderWidth: 1,
    borderBottomWidth: 1,
    padding: 8,
    borderColor: "grey",
    width: "80%",
    paddingVertical: 16,
  },
});

export default Signup;
