import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RegisterScreen from "../features/restaurants/screens/register.screen";
import LoginScreen from "../features/restaurants/screens/login.screen";
import AccountScreen from "../features/restaurants/screens/account.screen";

const AccountStack = createStackNavigator();

const AccountStackNavigator = () => {
  return (
    <>
      <AccountStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <AccountStack.Screen name="main" component={AccountScreen} />
        <AccountStack.Screen name="register" component={RegisterScreen} />
        <AccountStack.Screen name="login" component={LoginScreen} />
      </AccountStack.Navigator>
    </>
  );
};

export default AccountStackNavigator;
