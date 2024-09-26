import { StyleSheet, Text, View } from "react-native";
import ImageBackgroundComponent from "../components/image-background.component";
import { ActivityIndicator, Button } from "react-native-paper";
import { fonts } from "../../../../constants/fonts";
import { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { colors } from "../../../../constants/colors";

const AccountScreen = ({ navigation }) => {
  const { loading } = useContext(AuthenticationContext);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          animating={true}
          color={colors.brand.primary}
          size={"large"}
        />
      </View>
    );
  }
  return (
    <ImageBackgroundComponent>
      <Text style={styles.screenText}>Meals To Go</Text>
      <View style={styles.btnContainer}>
        <View style={styles.loginBtnContainer}>
          <Button
            icon="lock-open"
            mode="contained"
            onPress={() => navigation.navigate("login")}
            style={styles.loginBtn}
          >
            Login
          </Button>
        </View>
        <View>
          <Button
            icon="lock-open"
            mode="contained"
            onPress={() => navigation.navigate("register")}
            style={styles.registerBtn}
          >
            Register
          </Button>
        </View>
      </View>
    </ImageBackgroundComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  screenText: {
    fontFamily: fonts.heading,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  btnContainer: {
    backgroundColor: "#dddddd",
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtnContainer: {
    marginBottom: 10,
  },
  loginBtn: {
    borderRadius: 0,
  },
  registerBtn: {
    borderRadius: 0,
  },
  loadingContainer: {
    position: "absolute",
    zIndex: 20,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AccountScreen;
