import { StyleSheet, Text, View } from "react-native";
import ImageBackgroundComponent from "../components/image-background.component";
import { useContext, useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { fonts } from "../../../../constants/fonts";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, loading, error } = useContext(AuthenticationContext);

  return (
    <ImageBackgroundComponent>
      <Text style={styles.screenText}>Meals To Go</Text>
      <View style={styles.container}>
        <View style={styles.emailContainer}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={(ema) => setEmail(ema)}
          />
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            label="Password"
            value={password}
            onChangeText={(pass) => setPassword(pass)}
          />
        </View>
        {error && <Text style={styles.errorText}>{error?.toString()}</Text>}
        <View style={styles.loginBtnContainer}>
          <Button
            icon="lock-open"
            mode="contained"
            onPress={() => onLogin(email, password)}
            style={styles.loginBtn}
            loading={loading}
          >
            Login
          </Button>
        </View>
      </View>
    </ImageBackgroundComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 340,
    justifyContent: "center",
    backgroundColor: "#ddd",
    padding: 30,
  },
  screenText: {
    fontFamily: fonts.heading,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  loginBtn: {
    borderRadius: 0,
  },
  emailContainer: {
    marginBottom: 10,
  },
  passwordContainer: {
    marginBottom: 20,
  },
  errorText: {
    color: "red",
  },
});

export default LoginScreen;
