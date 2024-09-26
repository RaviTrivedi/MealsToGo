import { useContext } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { FavoritesContext } from "../../../services/favorites/favorite.context";
import AntDesign from "@expo/vector-icons/AntDesign";

const Favorite = ({ restaurant }) => {
  const { favorites, onAddOrRemoveRestaurant, loading } =
    useContext(FavoritesContext);

  const isFavorite = favorites.find(
    (rest) => rest.placeId === restaurant.placeId
  );

  return (
    <TouchableOpacity
      style={styles.favoriteIconContainer}
      onPress={() => onAddOrRemoveRestaurant(restaurant)}
    >
      {loading ? (
        <AntDesign name={"loading1"} size={34} color="red" />
      ) : (
        <AntDesign
          name={isFavorite ? "heart" : "hearto"}
          size={34}
          color="red"
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  favoriteIconContainer: {
    position: "absolute",
    top: 24,
    right: 24,
    zIndex: 9,
  },
});

export default Favorite;
