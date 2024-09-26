import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RestaurantsScreen from "../features/restaurants/screens/restaurants.screen";
import RestaurantDetailScreen from "../features/restaurants/screens/restaurantDetail.screen";

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <>
      <HomeStack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      >
        <HomeStack.Screen name="Restaurants" component={RestaurantsScreen} />
        <HomeStack.Screen
          name="RestaurantDetail"
          component={RestaurantDetailScreen}
        />
      </HomeStack.Navigator>
    </>
  );
};

export default HomeStackNavigator;
