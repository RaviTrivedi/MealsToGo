import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import CallOutCard from "./callout.component";

const FavoriteRestaurants = ({ favorites, onNavigate }) => {
  if (!favorites.length) {
    return null;
  }
  return (
    <View style={styles.favoritesContainer}>
      <ScrollView horizontal>
        {favorites.map((restaurant, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() =>
                onNavigate("RestaurantDetail", {
                  restaurant,
                })
              }
            >
              <CallOutCard restaurant={restaurant} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  favoritesContainer: {
    position: "relative",
    top: 100,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
  },
});

export default FavoriteRestaurants;
