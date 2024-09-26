import { useContext } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { FavoritesContext } from "../../../services/favorites/favorite.context";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";

const FavouritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", {
                restaurant: item,
              })
            }
          >
            <RestaurantInfoCard restaurant={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  flatList: {
    backgroundColor: "#FFF",
  },
});

export default FavouritesScreen;
