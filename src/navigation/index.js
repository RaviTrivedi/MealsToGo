import { useContext } from "react";
import BottomTabNavigator from "./BottomTabNavigator";
import AccountStackNavigator from "./AccountStackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "../services/authentication/authentication.context";

const AppNavigator = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <BottomTabNavigator /> : <AccountStackNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
