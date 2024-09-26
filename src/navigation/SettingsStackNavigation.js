import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../features/restaurants/screens/settings.screen";
import FavouritesScreen from "../features/restaurants/screens/favourites.screen";
import CameraScreen from "../features/restaurants/screens/camera.screen";

const SettingsStack = createStackNavigator();

const SettingsStackNavigator = () => {
  return (
    <>
      <SettingsStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <SettingsStack.Screen name="settings" component={SettingsScreen} />
        <SettingsStack.Screen name="favourites" component={FavouritesScreen} />
        <SettingsStack.Screen name="camera" component={CameraScreen} />
      </SettingsStack.Navigator>
    </>
  );
};

export default SettingsStackNavigator;
