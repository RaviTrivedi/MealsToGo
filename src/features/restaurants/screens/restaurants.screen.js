import { useContext, useState } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import { space } from "../../../../constants/spacing";
import { RestaurantsContext } from "../../../services/restaurants.context";
import { colors } from "../../../../constants/colors";
import { Search } from "../components/search.component";
import FavoriteRestaurants from "../components/favorite-restaurant.component";
import { FavoritesContext } from "../../../services/favorites/favorite.context";
import FadeInView from "../components/fade-in-view.component";

const isAndroid = Platform.OS === "android";
const statusBarHeight = StatusBar.currentHeight;

const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            animating={true}
            color={colors.brand.primary}
            size={"large"}
          />
        </View>
      )}
      <View style={styles.searchBarContainer}>
        <Search isToggled={isToggled} setIsToggled={setIsToggled} />
      </View>
      {isToggled && (
        <>
          <FavoriteRestaurants
            favorites={favorites}
            onNavigate={navigation.navigate}
          />
        </>
      )}
      <View style={styles.restaurantsContainer}>
        <FlatList
          data={restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <FadeInView>
                <RestaurantInfoCard restaurant={item} />
              </FadeInView>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          style={styles.flatList}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? statusBarHeight : 0,
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
  searchBarContainer: {
    marginLeft: space[2],
    marginRight: space[2],
  },
  restaurantsContainer: {
    flex: 1,
    padding: space[3],
    marginTop: 100,
  },
  flatList: {
    backgroundColor: "#FFF",
  },
});

export default RestaurantsScreen;
