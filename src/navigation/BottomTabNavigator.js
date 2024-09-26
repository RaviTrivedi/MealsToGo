import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapScreen from "../features/restaurants/screens/map.screen";
import SettingsScreen from "../features/restaurants/screens/settings.screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeStackNavigator from "./HomeStackNavigator";
import SettingsStackNavigator from "./SettingsStackNavigation";
import { FavoritesContextProvider } from "../services/favorites/favorite.context";
import { LocationContextProvider } from "../services/location/location.context";
import { RestaurantsContextProvider } from "../services/restaurants.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home",
  Map: "map",
  Settings: "settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({ color, size }) => {
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  };
};

const BottomTabNavigator = () => {
  return (
    <>
      <FavoritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Tab.Navigator screenOptions={createScreenOptions}>
              <Tab.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{ headerShown: false }}
              />
              <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{ headerShown: false }}
              />
              <Tab.Screen name="Settings" component={SettingsStackNavigator} />
            </Tab.Navigator>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavoritesContextProvider>
    </>
  );
};

export default BottomTabNavigator;
