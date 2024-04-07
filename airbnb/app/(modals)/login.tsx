import { useSignIn } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  Text,
  Alert,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

const Login = () => {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation =useNavigation();
  
  function handleLogin() {
    const user={
      email: emailAddress,
      password
    }
    axios
      .post("http://10.0.2.2:3000/login", user)
      .then((response) => {
        // console.log(response.data.userId);
        // dispatch(loginUser(response.data.userId));
        // const token = response.data.token;
        // console.log(token);

        // AsyncStorage.setItem("authToken", token).then(r => navigation.navigate("logtodash"));
        navigation.navigate("profile")
      })
      .catch((error) => {
        Alert.alert("Login error");
        console.log("error ", error);
      });
  }

  // const onSignInPress = async () => {
  //   if (!isLoaded) {
  //     return;
  //   }
  //   setLoading(true);
  //   try {
      
  //   } catch (err: any) {
  //     alert(err.errors[0].message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <View style={styles.container}>
      <Spinner visible={loading} />

      <TextInput
        autoCapitalize="none"
        placeholder="simon@galaxies.dev"
        value={emailAddress}
        onChangeText={setEmailAddress}
        style={styles.inputField}
      />
      <TextInput
        placeholder="password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.inputField}
      />

      <Button onPress={handleLogin} title="Login" color={"#6c47ff"}></Button>

      <Link href="/reset" asChild>
        <Pressable style={styles.button}>
          <Text>Forgot password?</Text>
        </Pressable>
      </Link>
      <Link href="/register" asChild>
        <Pressable style={styles.button}>
          <Text>Create Account</Text>
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: "#6c47ff",
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
  button: {
    margin: 8,
    alignItems: "center",
  },
});

export default Login;
