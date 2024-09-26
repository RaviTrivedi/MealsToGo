import { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Avatar, List } from "react-native-paper";
import { Pressable, StyleSheet, Text, View } from "react-native";

const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);

  return (
    <View style={styles.container}>
      <View style={styles.avatarEmailContainer}>
        <Pressable onPress={() => navigation.navigate("camera")}>
          <Avatar.Icon size={180} icon="human" />
        </Pressable>
        <Text>{user?.email}</Text>
      </View>
      <List.Section>
        <List.Item
          title="Favourites"
          left={() => <List.Icon icon="heart" color="red" />}
          onPress={() => navigation.navigate("favourites")}
        />
        <List.Item
          title="Logout"
          left={() => <List.Icon icon="logout" />}
          onPress={onLogout}
        />
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  avatarEmailContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
});

export default SettingsScreen;
